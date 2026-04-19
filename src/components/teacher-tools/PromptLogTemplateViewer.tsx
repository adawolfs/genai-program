import { useMemo, useState } from 'react';
import styles from './TeacherTools.module.css';

const templates = {
  estudiante: [
    'Proyecto o tarea:',
    'Fecha:',
    'Herramienta:',
    'Versión o plan:',
    'Objetivo del uso:',
    '',
    'Prompt inicial:',
    'Resultado recibido:',
    'Problemas detectados:',
    'Prompt revisado:',
    'Qué se aceptó:',
    'Qué se corrigió o descartó:',
    'Fuentes o evidencias usadas para verificar:',
    'Riesgos éticos o de privacidad:',
    'Decisión final humana:',
  ].join('\n'),
  docente: [
    'Actividad:',
    'Módulo:',
    'Estudiante o equipo:',
    'Herramienta declarada:',
    'Evidencia de proceso recibida:',
    '',
    'Calidad del prompt:',
    'Calidad de verificación:',
    'Riesgos detectados:',
    'Retroalimentación prioritaria:',
    'Acción siguiente:',
    'Fecha de revisión:',
  ].join('\n'),
};

export default function PromptLogTemplateViewer() {
  const [view, setView] = useState<keyof typeof templates>('estudiante');
  const template = useMemo(() => templates[view], [view]);

  async function copyTemplate() {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      await navigator.clipboard.writeText(template);
    }
  }

  return (
    <section className={styles.tool} aria-labelledby="prompt-log-title">
      <h2 id="prompt-log-title">Plantilla de bitácora de prompts</h2>
      <div className={styles.toolbar} role="tablist" aria-label="Vista de plantilla">
        <button className={view === 'estudiante' ? styles.button : styles.buttonSecondary} type="button" onClick={() => setView('estudiante')}>
          Vista estudiante
        </button>
        <button className={view === 'docente' ? styles.button : styles.buttonSecondary} type="button" onClick={() => setView('docente')}>
          Vista docente
        </button>
        <button className={styles.buttonSecondary} type="button" onClick={copyTemplate}>
          Copiar
        </button>
      </div>
      <pre className={styles.printArea}>{template}</pre>
    </section>
  );
}

