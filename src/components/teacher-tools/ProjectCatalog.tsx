import { useMemo, useState } from 'react';
import { projects } from '@site/src/data/program';
import styles from './TeacherTools.module.css';

export default function ProjectCatalog() {
  const [discipline, setDiscipline] = useState('todas');
  const disciplines = ['todas', ...projects.map((project) => project.discipline)];
  const visible = useMemo(() => (discipline === 'todas' ? projects : projects.filter((project) => project.discipline === discipline)), [discipline]);

  return (
    <section className={styles.tool} aria-labelledby="project-catalog-title">
      <h2 id="project-catalog-title">Catálogo de proyectos finales</h2>
      <label>
        Disciplina
        <select className={styles.select} value={discipline} onChange={(event) => setDiscipline(event.target.value)}>
          {disciplines.map((item) => (
            <option key={item} value={item}>
              {item === 'todas' ? 'Todas' : item}
            </option>
          ))}
        </select>
      </label>
      <div className={styles.grid}>
        {visible.map((project) => (
          <article className={styles.card} key={project.discipline}>
            <h3>{project.discipline}</h3>
            <p>{project.project}</p>
            <h4>Entregables</h4>
            <p>{project.deliverables}</p>
            <h4>Vigilar</h4>
            <p>{project.watch}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

