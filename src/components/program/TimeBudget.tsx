import { modules } from '@site/src/data/program';
import {
  formatMinutes,
  programTimeConstraints,
  programTimeTotals,
  timeBudgets,
  timeConstraintViolations,
} from '@site/src/data/timeMetrics';
import styles from './TimeBudget.module.css';

function getModule(moduleId: string) {
  return modules.find((module) => module.id === moduleId);
}

function getBudget(moduleId: string) {
  return timeBudgets.find((budget) => budget.moduleId === moduleId);
}

function sum(values: number[]) {
  return values.reduce((total, value) => total + value, 0);
}

type TimeBudgetProps = {
  moduleId: string;
};

export default function TimeBudget({ moduleId }: TimeBudgetProps) {
  const module = getModule(moduleId);
  const budget = getBudget(moduleId);

  if (!module || !budget) {
    return (
      <section className={styles.budget}>
        <p>No hay métricas de tiempo configuradas para este módulo.</p>
      </section>
    );
  }

  const studentTotal = budget.liveMinutes + budget.asyncMinutes;
  const expectedTotal = module.hours * 60;
  const teacherTotal = sum(budget.teacherTasks.map((task) => task.minutes));
  const reviewTotal = sum(budget.assignments.map((assignment) => assignment.teacherReviewMinutes));
  const accountingIsAligned = studentTotal === expectedTotal;

  return (
    <section className={styles.budget} aria-labelledby={`${moduleId}-time-budget`}>
      <h2 id={`${moduleId}-time-budget`}>Métricas de tiempo</h2>
      <p className={styles.note}>{budget.assumption}</p>
      <div className={styles.summaryGrid}>
        <div className={styles.metric}>
          <strong>{formatMinutes(studentTotal)}</strong>
          <span>Tiempo total requerido del estudiante</span>
        </div>
        <div className={styles.metric}>
          <strong>{formatMinutes(budget.liveMinutes)}</strong>
          <span>Tiempo dentro de sesiones en vivo</span>
        </div>
        <div className={styles.metric}>
          <strong>{formatMinutes(budget.asyncMinutes)}</strong>
          <span>Tiempo autónomo y asignaciones</span>
        </div>
        <div className={styles.metric}>
          <strong>{formatMinutes(teacherTotal)}</strong>
          <span>Carga docente estimada por cohorte</span>
        </div>
        <div className={styles.metric}>
          <strong>{formatMinutes(reviewTotal)}</strong>
          <span>Revisión docente de asignaciones</span>
        </div>
      </div>

      <p className={accountingIsAligned ? styles.ok : styles.warn}>
        Cuadre del módulo: {formatMinutes(studentTotal)} contabilizados de {formatMinutes(expectedTotal)} planificados.
      </p>

      <h3>Sesiones en vivo</h3>
      <div className={styles.tableWrap}>
        <table>
          <thead>
            <tr>
              <th>Sesión</th>
              <th>Duración</th>
              <th>Propósito</th>
              <th>Tiempo contabilizado por segmentos</th>
            </tr>
          </thead>
          <tbody>
            {budget.sessions.map((session) => {
              const segmentTotal = sum(session.segments.map((segment) => segment.minutes));
              return (
                <tr key={session.title}>
                  <td>{session.title}</td>
                  <td>{formatMinutes(session.durationMinutes)}</td>
                  <td>{session.purpose}</td>
                  <td>{formatMinutes(segmentTotal)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {budget.sessions.map((session) => (
        <div key={session.title}>
          <h4 className={styles.sessionHeading}>{session.title}</h4>
          <div className={styles.tableWrap}>
            <table>
              <thead>
                <tr>
                  <th>Min</th>
                  <th>Actividad</th>
                  <th>Tarea docente</th>
                  <th>Tarea del estudiante</th>
                  <th>Evidencia</th>
                </tr>
              </thead>
              <tbody>
                {session.segments.map((segment) => (
                  <tr key={`${session.title}-${segment.activity}`}>
                    <td>{segment.minutes}</td>
                    <td>{segment.activity}</td>
                    <td>{segment.teacherTask}</td>
                    <td>{segment.studentTask}</td>
                    <td>{segment.evidence}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}

      <h3>Asignaciones y trabajo autónomo del estudiante</h3>
      <div className={styles.tableWrap}>
        <table>
          <thead>
            <tr>
              <th>Asignación</th>
              <th>Tiempo estudiante</th>
              <th>Revisión docente</th>
              <th>Evidencia</th>
              <th>Nota operativa</th>
            </tr>
          </thead>
          <tbody>
            {budget.assignments.map((assignment) => (
              <tr key={assignment.title}>
                <td>{assignment.title}</td>
                <td>{formatMinutes(assignment.studentMinutes)}</td>
                <td>{formatMinutes(assignment.teacherReviewMinutes)}</td>
                <td>{assignment.evidence}</td>
                <td>{assignment.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3>Carga docente por tarea</h3>
      <div className={styles.tableWrap}>
        <table>
          <thead>
            <tr>
              <th>Fase</th>
              <th>Tarea docente</th>
              <th>Tiempo estimado</th>
              <th>Nota</th>
            </tr>
          </thead>
          <tbody>
            {budget.teacherTasks.map((task) => (
              <tr key={`${task.phase}-${task.task}`}>
                <td>{task.phase}</td>
                <td>{task.task}</td>
                <td>{formatMinutes(task.minutes)}</td>
                <td>{task.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function ProgramTimeOverview() {
  const studentTotal = programTimeTotals.liveMinutes + programTimeTotals.asyncMinutes;

  return (
    <section className={styles.budget} aria-labelledby="program-time-overview">
      <h2 id="program-time-overview">Resumen de tiempos del programa</h2>
      <div className={styles.summaryGrid}>
        <div className={styles.metric}>
          <strong>{formatMinutes(studentTotal)}</strong>
          <span>Total requerido del estudiante</span>
        </div>
        <div className={styles.metric}>
          <strong>{formatMinutes(programTimeTotals.liveMinutes)}</strong>
          <span>Sesiones en vivo</span>
        </div>
        <div className={styles.metric}>
          <strong>{formatMinutes(programTimeTotals.asyncMinutes)}</strong>
          <span>Asignaciones y trabajo autónomo</span>
        </div>
        <div className={styles.metric}>
          <strong>{formatMinutes(programTimeTotals.teacherMinutes)}</strong>
          <span>Carga docente estimada por cohorte</span>
        </div>
        <div className={styles.metric}>
          <strong>{programTimeTotals.liveSessions}</strong>
          <span>Sesiones semanales en vivo</span>
        </div>
        <div className={styles.metric}>
          <strong>{formatMinutes(programTimeTotals.maxSessionMinutes)}</strong>
          <span>Duración máxima por sesión</span>
        </div>
      </div>
      <p className={timeConstraintViolations.length === 0 ? styles.ok : styles.warn}>
        Restricción operativa: máximo {programTimeConstraints.maxWeeks} semanas, {programTimeConstraints.maxSessionsPerWeek} sesión por semana y{' '}
        {formatMinutes(programTimeConstraints.maxSessionMinutes)} por sesión.
      </p>
      <div className={styles.tableWrap}>
        <table>
          <thead>
            <tr>
              <th>Módulo</th>
              <th>Estudiante total</th>
              <th>En vivo</th>
              <th>Autónomo</th>
              <th>Carga docente</th>
              <th>Sesiones</th>
              <th>Asignaciones</th>
            </tr>
          </thead>
          <tbody>
            {timeBudgets.map((budget) => {
              const module = getModule(budget.moduleId);
              const teacherTotal = sum(budget.teacherTasks.map((task) => task.minutes));
              const moduleStudentTotal = budget.liveMinutes + budget.asyncMinutes;
              return (
                <tr key={budget.moduleId}>
                  <td>{module?.shortTitle ?? budget.moduleId}</td>
                  <td>{formatMinutes(moduleStudentTotal)}</td>
                  <td>{formatMinutes(budget.liveMinutes)}</td>
                  <td>{formatMinutes(budget.asyncMinutes)}</td>
                  <td>{formatMinutes(teacherTotal)}</td>
                  <td>{budget.sessions.length}</td>
                  <td>{budget.assignments.length}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className={styles.note}>
        La carga docente está estimada por cohorte de 30 participantes e incluye preparación, facilitación, seguimiento y evaluación.
      </p>
    </section>
  );
}
