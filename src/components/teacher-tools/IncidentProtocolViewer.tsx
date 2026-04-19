import { useState } from 'react';
import { incidents } from '@site/src/data/program';
import styles from './TeacherTools.module.css';

export default function IncidentProtocolViewer() {
  const [active, setActive] = useState(incidents[0].type);
  const incident = incidents.find((item) => item.type === active) ?? incidents[0];

  return (
    <section className={styles.tool} aria-labelledby="incident-viewer-title">
      <h2 id="incident-viewer-title">Visor de protocolo de incidentes</h2>
      <div className={styles.toolbar} role="tablist" aria-label="Tipos de incidente">
        {incidents.map((item) => (
          <button
            className={item.type === active ? styles.button : styles.buttonSecondary}
            type="button"
            key={item.type}
            onClick={() => setActive(item.type)}
            role="tab"
            aria-selected={item.type === active}
          >
            {item.type}
          </button>
        ))}
      </div>
      <article className={styles.card}>
        <h3>{incident.type}</h3>
        <ol>
          <li>
            <strong>Detectar:</strong> {incident.signal}
          </li>
          <li>
            <strong>Contener:</strong> {incident.immediate}
          </li>
          <li>
            <strong>Escalar:</strong> {incident.escalation}
          </li>
          <li>
            <strong>Prevenir:</strong> {incident.prevention}
          </li>
        </ol>
      </article>
    </section>
  );
}

