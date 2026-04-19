import { useMemo, useState } from 'react';
import { modalityPlans, modules } from '@site/src/data/program';
import { formatMinutes, timeBudgets } from '@site/src/data/timeMetrics';
import styles from './TeacherTools.module.css';

function roundMinutes(minutes: number) {
  return Math.round(minutes / 5) * 5;
}

export default function SyllabusPlanner() {
  const [modeId, setModeId] = useState(modalityPlans[0].id);
  const plan = modalityPlans.find((item) => item.id === modeId) ?? modalityPlans[0];
  const rows = useMemo(
    () =>
      modules.map((module, index) => {
        const budget = timeBudgets.find((item) => item.moduleId === module.id);
        const plannedHours = Math.max(2, Math.round(module.hours * plan.multiplier * 10) / 10);
        const planScale = plannedHours / module.hours;
        const teacherBaseMinutes = budget?.teacherTasks.reduce((sum, task) => sum + task.minutes, 0) ?? 0;

        return {
          ...module,
          plannedHours,
          sequence: index + 1,
          plannedLiveMinutes: budget ? roundMinutes(budget.liveMinutes * planScale) : 0,
          plannedAsyncMinutes: budget ? roundMinutes(budget.asyncMinutes * planScale) : 0,
          plannedTeacherMinutes: roundMinutes(teacherBaseMinutes * planScale),
        };
      }),
    [plan],
  );

  return (
    <section className={styles.tool} aria-labelledby="syllabus-planner-title">
      <h2 id="syllabus-planner-title">Planificador de syllabus</h2>
      <label>
        Modalidad
        <select className={styles.select} value={modeId} onChange={(event) => setModeId(event.target.value)}>
          {modalityPlans.map((item) => (
            <option key={item.id} value={item.id}>
              {item.label}
            </option>
          ))}
        </select>
      </label>
      <div className={styles.meta}>
        <span className={styles.pill}>{plan.duration}</span>
        <span className={styles.pill + ' ' + styles.accent}>{plan.rhythm}</span>
      </div>
      <p>{plan.bestFor}</p>
      <div className={styles.tableWrap}>
        <table>
          <thead>
            <tr>
              <th>Secuencia</th>
              <th>Módulo</th>
              <th>Horas planificadas</th>
              <th>En vivo</th>
              <th>Estudiante autónomo</th>
              <th>Carga docente</th>
              <th>Evidencia</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td>{row.sequence}</td>
                <td>{row.shortTitle}</td>
                <td>{row.plannedHours}</td>
                <td>{formatMinutes(row.plannedLiveMinutes)}</td>
                <td>{formatMinutes(row.plannedAsyncMinutes)}</td>
                <td>{formatMinutes(row.plannedTeacherMinutes)}</td>
                <td>{row.deliverables[0]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
