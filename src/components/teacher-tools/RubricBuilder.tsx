import { useMemo, useState } from 'react';
import { rubricCriteria } from '@site/src/data/program';
import styles from './TeacherTools.module.css';

type Criterion = (typeof rubricCriteria)[number];

function toMarkdown(criteria: Criterion[]) {
  const header = '| Criterio | Excelente | Competente | En desarrollo | Insuficiente |\n|---|---|---|---|---|';
  const rows = criteria
    .map((item) => '| ' + item.criterion + ' | ' + item.excellent + ' | ' + item.competent + ' | ' + item.developing + ' | ' + item.insufficient + ' |')
    .join('\n');
  return header + '\n' + rows;
}

export default function RubricBuilder() {
  const [criteria, setCriteria] = useState<Criterion[]>(rubricCriteria);
  const markdown = useMemo(() => toMarkdown(criteria), [criteria]);

  function updateCriterion(index: number, field: keyof Criterion, value: string) {
    setCriteria((current) => current.map((item, itemIndex) => (itemIndex === index ? { ...item, [field]: value } : item)));
  }

  async function copyMarkdown() {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      await navigator.clipboard.writeText(markdown);
    }
  }

  return (
    <section className={styles.tool} aria-labelledby="rubric-builder-title">
      <h2 id="rubric-builder-title">Visualizador y editor de rúbrica</h2>
      <div className={styles.toolbar}>
        <button className={styles.button} type="button" onClick={copyMarkdown}>
          Exportar Markdown
        </button>
        <button className={styles.buttonSecondary} type="button" onClick={() => typeof window !== 'undefined' && window.print()}>
          Imprimir
        </button>
      </div>
      <div className={styles.grid}>
        {criteria.map((criterion, index) => (
          <article className={styles.card} key={criterion.criterion}>
            <label>
              Criterio
              <input
                className={styles.input}
                value={criterion.criterion}
                onChange={(event) => updateCriterion(index, 'criterion', event.target.value)}
              />
            </label>
            {(['excellent', 'competent', 'developing', 'insufficient'] as const).map((field) => (
              <label key={field}>
                {field === 'excellent' ? 'Excelente' : field === 'competent' ? 'Competente' : field === 'developing' ? 'En desarrollo' : 'Insuficiente'}
                <textarea
                  className={styles.textarea}
                  value={criterion[field]}
                  onChange={(event) => updateCriterion(index, field, event.target.value)}
                />
              </label>
            ))}
          </article>
        ))}
      </div>
      <h3>Vista Markdown</h3>
      <pre className={styles.printArea}>{markdown}</pre>
    </section>
  );
}

