import Link from '@docusaurus/Link';
import { modules } from '@site/src/data/program';
import { formatMinutes, timeBudgets } from '@site/src/data/timeMetrics';
import styles from './TeacherTools.module.css';

export default function TeacherDashboard() {
  const totalHours = modules.reduce((sum, module) => sum + module.hours, 0);

  return (
    <section className={styles.tool} aria-labelledby="teacher-dashboard-title">
      <h2 id="teacher-dashboard-title">Panel docente del programa</h2>
      <div className={styles.meta}>
        <span className={styles.pill}>{modules.length} módulos</span>
        <span className={styles.pill + ' ' + styles.accent}>{totalHours} horas</span>
        <span className={styles.pill}>12 semanas</span>
      </div>
      <div className={styles.grid}>
        {modules.map((module) => {
          const budget = timeBudgets.find((item) => item.moduleId === module.id);
          const teacherMinutes = budget?.teacherTasks.reduce((sum, task) => sum + task.minutes, 0) ?? 0;

          return (
            <article className={styles.card} key={module.id}>
              <h3>{module.shortTitle}</h3>
              <p>{module.description}</p>
              <div className={styles.meta}>
                <span className={styles.pill}>{module.hours} h estudiante</span>
                <span className={styles.pill}>{module.week}</span>
                {budget ? <span className={`${styles.pill} ${styles.accent}`}>{formatMinutes(budget.liveMinutes)} en vivo</span> : null}
                {budget ? <span className={styles.pill}>{formatMinutes(budget.asyncMinutes)} autónomo</span> : null}
                {budget ? <span className={`${styles.pill} ${styles.danger}`}>{formatMinutes(teacherMinutes)} docente</span> : null}
              </div>
              <h4>Materiales</h4>
              <ul>
                {module.materials.slice(0, 3).map((material) => (
                  <li key={material}>{material}</li>
                ))}
              </ul>
              <h4>Puntos de evaluación</h4>
              <ul>
                {module.formative.slice(0, 2).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className={styles.toolbar}>
                <Link className={styles.buttonSecondary} to={'/docs/04-syllabus-modular/' + module.slug}>
                  Abrir módulo
                </Link>
                <Link className={styles.buttonSecondary} to={module.slidePath}>
                  Abrir slides
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
