import { useState } from 'react';
import { licenseTypes } from '@site/src/data/program';
import styles from './TeacherTools.module.css';

type Assignment = {
  type: string;
  quantity: number;
  window: string;
  team: string;
  project: string;
  rule: string;
};

export default function LicenseRotationPlanner() {
  const [assignments, setAssignments] = useState<Assignment[]>(
    licenseTypes.map((license, index) => ({
      type: license.type,
      quantity: license.quantity,
      window: license.defaultWindow,
      team: 'Equipo ' + (index + 1),
      project: license.rule,
      rule: license.rule,
    })),
  );

  function update(index: number, field: keyof Assignment, value: string) {
    setAssignments((current) =>
      current.map((assignment, itemIndex) => (itemIndex === index ? { ...assignment, [field]: field === 'quantity' ? Number(value) : value } : assignment)),
    );
  }

  return (
    <section className={styles.tool} aria-labelledby="license-planner-title">
      <h2 id="license-planner-title">Planificador de rotación de licencias</h2>
      <p>Use ventanas cortas y registre la necesidad pedagógica de cada asignación.</p>
      <div className={styles.tableWrap}>
        <table>
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Cantidad</th>
              <th>Ventana</th>
              <th>Equipo</th>
              <th>Proyecto o criterio</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((assignment, index) => (
              <tr key={assignment.type}>
                <td>{assignment.type}</td>
                <td>
                  <input
                    className={styles.input}
                    type="number"
                    min="0"
                    value={assignment.quantity}
                    onChange={(event) => update(index, 'quantity', event.target.value)}
                    aria-label={'Cantidad para ' + assignment.type}
                  />
                </td>
                <td>
                  <input className={styles.input} value={assignment.window} onChange={(event) => update(index, 'window', event.target.value)} />
                </td>
                <td>
                  <input className={styles.input} value={assignment.team} onChange={(event) => update(index, 'team', event.target.value)} />
                </td>
                <td>
                  <input className={styles.input} value={assignment.project} onChange={(event) => update(index, 'project', event.target.value)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

