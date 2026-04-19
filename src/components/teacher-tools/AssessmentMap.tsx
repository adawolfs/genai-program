import { useMemo, useState } from 'react';
import { assessmentRows, modules } from '@site/src/data/program';
import styles from './TeacherTools.module.css';

export default function AssessmentMap() {
  const [moduleId, setModuleId] = useState('todos');
  const rows = useMemo(
    () => (moduleId === 'todos' ? assessmentRows : assessmentRows.filter((row) => row.moduleId === moduleId)),
    [moduleId],
  );

  return (
    <section className={styles.tool} aria-labelledby="assessment-map-title">
      <h2 id="assessment-map-title">Mapa de evaluación</h2>
      <label>
        Filtrar por módulo
        <select className={styles.select} value={moduleId} onChange={(event) => setModuleId(event.target.value)}>
          <option value="todos">Todos los módulos</option>
          {modules.map((module) => (
            <option key={module.id} value={module.id}>
              {module.shortTitle}
            </option>
          ))}
        </select>
      </label>
      <div className={styles.tableWrap}>
        <table>
          <thead>
            <tr>
              <th>Módulo</th>
              <th>Objetivo</th>
              <th>Competencias</th>
              <th>Actividad</th>
              <th>Evidencia</th>
              <th>Rúbrica</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.moduleId}>
                <td>{row.module}</td>
                <td>{row.objective}</td>
                <td>{row.competencies}</td>
                <td>{row.activity}</td>
                <td>{row.evidence}</td>
                <td>{row.rubric}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

