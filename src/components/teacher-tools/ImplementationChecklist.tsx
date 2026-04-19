import { useMemo, useState } from 'react';
import { checklistGroups } from '@site/src/data/program';
import styles from './TeacherTools.module.css';

export default function ImplementationChecklist() {
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const total = checklistGroups.reduce((sum, group) => sum + group.items.length, 0);
  const progress = Math.round((checked.size / total) * 100);
  const summary = useMemo(() => checked.size + ' de ' + total + ' tareas listas', [checked.size, total]);

  function toggle(id: string) {
    setChecked((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <section className={styles.tool} aria-labelledby="checklist-title">
      <h2 id="checklist-title">Checklist de lanzamiento</h2>
      <p>{summary}</p>
      <div className={styles.progress} aria-label={'Progreso ' + progress + '%'}>
        <div className={styles.progressBar} style={{ width: progress + '%' }} />
      </div>
      <div className={styles.grid}>
        {checklistGroups.map((group) => (
          <article className={styles.card} key={group.group}>
            <h3>{group.group}</h3>
            {group.items.map((item) => {
              const id = group.group + '-' + item;
              return (
                <label className={styles.checkItem} key={id}>
                  <input type="checkbox" checked={checked.has(id)} onChange={() => toggle(id)} />
                  <span>{item}</span>
                </label>
              );
            })}
          </article>
        ))}
      </div>
    </section>
  );
}

