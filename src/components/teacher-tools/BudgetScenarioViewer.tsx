import { useMemo, useState } from 'react';
import { budgetScenarios } from '@site/src/data/program';
import styles from './TeacherTools.module.css';

export default function BudgetScenarioViewer() {
  const [cohort, setCohort] = useState(30);
  const multiplier = cohort / 30;
  const scenarios = useMemo(
    () =>
      budgetScenarios.map((scenario) => ({
        ...scenario,
        softwareLow: Math.round(scenario.softwareLow * multiplier),
        softwareHigh: Math.round(scenario.softwareHigh * multiplier),
        humanLow: Math.round(scenario.humanLow * multiplier),
        humanHigh: Math.round(scenario.humanHigh * multiplier),
      })),
    [multiplier],
  );

  return (
    <section className={styles.tool} aria-labelledby="budget-title">
      <h2 id="budget-title">Comparador de escenarios presupuestarios</h2>
      <label>
        Tamaño de cohorte
        <input className={styles.input} type="number" min="10" max="120" value={cohort} onChange={(event) => setCohort(Number(event.target.value))} />
      </label>
      <div className={styles.grid}>
        {scenarios.map((scenario) => (
          <article className={styles.card} key={scenario.name}>
            <h3>{scenario.name}</h3>
            <p>{scenario.description}</p>
            <p>
              <strong>Software:</strong> {scenario.softwareLow.toLocaleString('es')} a {scenario.softwareHigh.toLocaleString('es')} USD
            </p>
            <p>
              <strong>RR. HH.:</strong> {scenario.humanLow.toLocaleString('es')} a {scenario.humanHigh.toLocaleString('es')} USD
            </p>
            <p>{scenario.notes}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

