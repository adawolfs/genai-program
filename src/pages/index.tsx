import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import { modules } from '@site/src/data/program';
import styles from './index.module.css';

export default function Home() {
  const totalHours = modules.reduce((sum, module) => sum + module.hours, 0);

  return (
    <Layout>
      <main>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>Microcredencial híbrida</p>
            <h1>Programa IA Universitaria</h1>
            <p className={styles.lede}>
              Portal operativo para que coordinación, docentes y tutores implementen un programa de alfabetización y uso aplicado de IA con trazabilidad,
              evaluación y gobernanza.
            </p>
            <div className={styles.actions}>
              <Link className="button button--primary button--lg" to="/docs/00-introduccion/bienvenida">
                Abrir documentación
              </Link>
              <Link className="button button--secondary button--lg" to="/docs/04-syllabus-modular/estructura-general">
                Ver syllabus
              </Link>
            </div>
          </div>
        </section>
        <section className={styles.stats} aria-label="Resumen del programa">
          <div>
            <strong>{modules.length}</strong>
            <span>Módulos</span>
          </div>
          <div>
            <strong>{totalHours}</strong>
            <span>Horas</span>
          </div>
          <div>
            <strong>12</strong>
            <span>Semanas</span>
          </div>
          <div>
            <strong>30</strong>
            <span>Cohorte base</span>
          </div>
        </section>
        <section className={styles.band}>
          <div className={styles.sectionHeader}>
            <h2>Rutas de trabajo</h2>
            <p>Entradas rápidas para los equipos que ejecutan el programa.</p>
          </div>
          <div className={styles.grid}>
            <Link className={styles.card} to="/docs/02-manual-docente/manual-docente-general">
              <h3>Docentes</h3>
              <p>Manual, sesiones, evaluación, aula híbrida y lineamientos de uso de IA.</p>
            </Link>
            <Link className={styles.card} to="/docs/03-guia-del-estudiante/guia-estudiante">
              <h3>Estudiantes</h3>
              <p>Normas de trabajo, bitácora de prompts, verificación, privacidad y portafolio.</p>
            </Link>
            <Link className={styles.card} to="/docs/06-implementacion/onboarding-docente">
              <h3>Coordinación</h3>
              <p>Onboarding, cronograma operativo, presupuesto, licencias y soporte técnico.</p>
            </Link>
            <Link className={styles.card} to="/docs/09-recursos/decks-y-diapositivas">
              <h3>Slides</h3>
              <p>Decks Reveal.js para bienvenida, capacitación docente, módulos y cierre.</p>
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
