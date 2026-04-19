export type TimeSegment = {
  minutes: number;
  activity: string;
  teacherTask: string;
  studentTask: string;
  evidence: string;
};

export type LiveSessionTime = {
  title: string;
  durationMinutes: number;
  purpose: string;
  segments: TimeSegment[];
};

export type AssignmentTime = {
  title: string;
  studentMinutes: number;
  teacherReviewMinutes: number;
  evidence: string;
  notes: string;
};

export type TeacherTaskTime = {
  phase: 'Antes' | 'Durante' | 'Después' | 'Evaluación';
  task: string;
  minutes: number;
  notes: string;
};

export type ModuleTimeBudget = {
  moduleId: string;
  liveMinutes: number;
  asyncMinutes: number;
  assumption: string;
  sessions: LiveSessionTime[];
  assignments: AssignmentTime[];
  teacherTasks: TeacherTaskTime[];
};

export const programTimeConstraints = {
  maxWeeks: 12,
  maxSessionsPerWeek: 1,
  maxSessionMinutes: 90,
  maxLiveSessions: 12,
};

export function formatMinutes(minutes: number) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  if (hours === 0) return `${remainingMinutes} min`;
  if (remainingMinutes === 0) return `${hours} h`;
  return `${hours} h ${remainingMinutes} min`;
}

export const timeBudgets: ModuleTimeBudget[] = [
  {
    moduleId: 'modulo-01',
    liveMinutes: 90,
    asyncMinutes: 150,
    assumption: 'Una sesión en vivo de 90 minutos en la semana 1 y dos horas y media de trabajo autónomo.',
    sessions: [
      {
        title: 'Semana 1. Inducción, política y acuerdo',
        durationMinutes: 90,
        purpose: 'Alinear expectativas, política de IA, privacidad, trazabilidad y diagnóstico inicial.',
        segments: [
          { minutes: 10, activity: 'Apertura y objetivo', teacherTask: 'Presentar propósito y evidencias', studentTask: 'Registrar expectativas', evidence: 'Respuesta inicial' },
          { minutes: 20, activity: 'Política de IA del curso', teacherTask: 'Explicar usos permitidos y prohibidos', studentTask: 'Marcar dudas', evidence: 'Preguntas registradas' },
          { minutes: 20, activity: 'Casos rápidos', teacherTask: 'Modelar análisis de escenarios', studentTask: 'Clasificar casos', evidence: 'Tabla de casos' },
          { minutes: 25, activity: 'Privacidad y trazabilidad', teacherTask: 'Facilitar discusión y corregir criterios', studentTask: 'Resolver escenarios', evidence: 'Escenarios resueltos' },
          { minutes: 15, activity: 'Acuerdo y cierre', teacherTask: 'Aclarar condiciones finales', studentTask: 'Firmar acuerdo y planificar entrega', evidence: 'Acuerdo completado' },
        ],
      },
    ],
    assignments: [
      { title: 'Pretest y encuesta de acceso', studentMinutes: 30, teacherReviewMinutes: 20, evidence: 'Formulario completado', notes: 'Revisión agregada por cohorte.' },
      { title: 'Lectura de política y dudas', studentMinutes: 40, teacherReviewMinutes: 20, evidence: 'Dudas marcadas', notes: 'El docente consolida FAQ.' },
      { title: 'Política personal de uso de IA', studentMinutes: 80, teacherReviewMinutes: 60, evidence: 'Política breve', notes: 'Feedback breve por estudiante o equipo.' },
    ],
    teacherTasks: [
      { phase: 'Antes', task: 'Preparar syllabus, política, casos y formularios', minutes: 75, notes: 'Por cohorte de 30.' },
      { phase: 'Durante', task: 'Facilitar una sesión semanal en vivo', minutes: 90, notes: 'Bloque máximo de 90 minutos.' },
      { phase: 'Después', task: 'Consolidar dudas y ajustar FAQ', minutes: 30, notes: 'Actualizar LMS.' },
      { phase: 'Evaluación', task: 'Revisar acuerdos y política personal', minutes: 100, notes: 'Incluye revisión de asignaciones del módulo.' },
    ],
  },
  {
    moduleId: 'modulo-02',
    liveMinutes: 90,
    asyncMinutes: 270,
    assumption: 'Una sesión en vivo de 90 minutos en la semana 2 y cuatro horas y media de comparación, verificación e informe.',
    sessions: [
      {
        title: 'Semana 2. Capacidades, límites y verificación inicial',
        durationMinutes: 90,
        purpose: 'Comprender límites de la IA generativa y practicar comparación crítica con evidencia.',
        segments: [
          { minutes: 15, activity: 'Mapa conceptual', teacherTask: 'Explicar conceptos base', studentTask: 'Tomar notas guiadas', evidence: 'Mapa anotado' },
          { minutes: 20, activity: 'Demostración con errores', teacherTask: 'Mostrar respuesta convincente pero fallida', studentTask: 'Detectar señales de riesgo', evidence: 'Lista de errores' },
          { minutes: 25, activity: 'Comparación inicial', teacherTask: 'Guiar comparación de herramientas', studentTask: 'Comparar dos salidas', evidence: 'Tabla parcial' },
          { minutes: 20, activity: 'Verificación y riesgos', teacherTask: 'Acompañar contraste de afirmaciones', studentTask: 'Verificar una afirmación', evidence: 'Fuente registrada' },
          { minutes: 10, activity: 'Cierre del informe', teacherTask: 'Explicar criterios de entrega', studentTask: 'Planificar informe', evidence: 'Esquema de informe' },
        ],
      },
    ],
    assignments: [
      { title: 'Comparación de dos respuestas de IA', studentMinutes: 90, teacherReviewMinutes: 40, evidence: 'Tabla de comparación', notes: 'Revisión por muestra o por equipos.' },
      { title: 'Verificación de tres afirmaciones', studentMinutes: 80, teacherReviewMinutes: 35, evidence: 'Fuentes externas', notes: 'Priorizar existencia y pertinencia.' },
      { title: 'Informe corto de contraste', studentMinutes: 100, teacherReviewMinutes: 65, evidence: 'Informe breve', notes: 'Feedback con foco en límites y evidencia.' },
    ],
    teacherTasks: [
      { phase: 'Antes', task: 'Preparar ejemplos, herramientas y plantilla de comparación', minutes: 90, notes: 'Incluye prueba técnica.' },
      { phase: 'Durante', task: 'Facilitar una sesión semanal en vivo', minutes: 90, notes: 'Bloque máximo de 90 minutos.' },
      { phase: 'Después', task: 'Responder dudas y ajustar ejemplos', minutes: 45, notes: 'Canal de soporte.' },
      { phase: 'Evaluación', task: 'Revisar verificaciones e informes de contraste', minutes: 140, notes: 'Incluye revisión de asignaciones del módulo.' },
    ],
  },
  {
    moduleId: 'modulo-03',
    liveMinutes: 180,
    asyncMinutes: 420,
    assumption: 'Dos sesiones en vivo de 90 minutos, una por semana, y siete horas de práctica documentada.',
    sessions: [
      {
        title: 'Semana 3. Anatomía de un prompt verificable',
        durationMinutes: 90,
        purpose: 'Construir solicitudes con contexto, formato, criterios, límites y trazabilidad.',
        segments: [
          { minutes: 15, activity: 'Estructura de prompt', teacherTask: 'Modelar componentes', studentTask: 'Anotar patrón', evidence: 'Plantilla marcada' },
          { minutes: 25, activity: 'Prompt débil a fuerte', teacherTask: 'Demostrar iteración', studentTask: 'Identificar mejoras', evidence: 'Prompt revisado' },
          { minutes: 35, activity: 'Taller en parejas', teacherTask: 'Circular y retroalimentar', studentTask: 'Reescribir prompt', evidence: 'Versión 2' },
          { minutes: 15, activity: 'Cierre', teacherTask: 'Definir tarea autónoma', studentTask: 'Registrar próximos pasos', evidence: 'Plan de bitácora' },
        ],
      },
      {
        title: 'Semana 4. Verificación y auditoría de salida',
        durationMinutes: 90,
        purpose: 'Separar fluidez de confiabilidad y cerrar con una auditoría defendible.',
        segments: [
          { minutes: 15, activity: 'Revisión de bitácoras', teacherTask: 'Detectar patrones', studentTask: 'Compartir hallazgo', evidence: 'Bitácora parcial' },
          { minutes: 30, activity: 'Tabla de contraste', teacherTask: 'Modelar verificación', studentTask: 'Contrastar afirmaciones', evidence: 'Tabla de fuentes' },
          { minutes: 30, activity: 'Auditoría guiada', teacherTask: 'Acompañar revisión y decisión humana', studentTask: 'Auditar salida', evidence: 'Auditoría parcial' },
          { minutes: 15, activity: 'Debrief', teacherTask: 'Nombrar criterios finales', studentTask: 'Redactar aprendizaje', evidence: 'Reflexión breve' },
        ],
      },
    ],
    assignments: [
      { title: 'Bitácora con dos iteraciones', studentMinutes: 120, teacherReviewMinutes: 50, evidence: 'Bitácora de prompts', notes: 'Revisar trazabilidad, no perfección.' },
      { title: 'Auditoría de una respuesta', studentMinutes: 180, teacherReviewMinutes: 90, evidence: 'Auditoría completa', notes: 'Debe incluir fuentes y decisión humana.' },
      { title: 'Reflexión de decisión humana', studentMinutes: 60, teacherReviewMinutes: 40, evidence: 'Reflexión breve', notes: 'Puede revisarse con lista de cotejo.' },
      { title: 'Corrección final documentada', studentMinutes: 60, teacherReviewMinutes: 40, evidence: 'Bitácora corregida', notes: 'Cerrar cambios posteriores a retroalimentación.' },
    ],
    teacherTasks: [
      { phase: 'Antes', task: 'Preparar prompts débiles, rúbrica y fuentes de verificación', minutes: 150, notes: 'Incluye pruebas de herramientas.' },
      { phase: 'Durante', task: 'Facilitar dos sesiones semanales en vivo', minutes: 180, notes: 'Dos bloques de 90 minutos en semanas distintas.' },
      { phase: 'Después', task: 'Tutoría y respuesta a dudas de auditoría', minutes: 90, notes: 'Por cohorte.' },
      { phase: 'Evaluación', task: 'Revisar bitácoras, auditorías y reflexiones', minutes: 220, notes: 'Incluye revisión de asignaciones del módulo.' },
    ],
  },
  {
    moduleId: 'modulo-04',
    liveMinutes: 180,
    asyncMinutes: 300,
    assumption: 'Dos sesiones en vivo de 90 minutos, una por semana, y cinco horas de lectura, borrador y miniensayo.',
    sessions: [
      {
        title: 'Semana 5. Lectura asistida y ficha verificable',
        durationMinutes: 90,
        purpose: 'Usar IA para apoyar lectura sin reemplazar comprensión directa.',
        segments: [
          { minutes: 15, activity: 'Propósito y límites', teacherTask: 'Aclarar autoría y apoyo', studentTask: 'Identificar riesgo de sustitución', evidence: 'Criterio escrito' },
          { minutes: 25, activity: 'Demostración de ficha', teacherTask: 'Modelar lectura asistida', studentTask: 'Observar verificación', evidence: 'Notas de observación' },
          { minutes: 35, activity: 'Taller de ficha', teacherTask: 'Retroalimentar lectura', studentTask: 'Construir ficha', evidence: 'Ficha parcial' },
          { minutes: 15, activity: 'Cierre', teacherTask: 'Asignar lectura autónoma', studentTask: 'Planificar entrega', evidence: 'Plan de lectura' },
        ],
      },
      {
        title: 'Semana 6. Escritura, voz propia y atribución',
        durationMinutes: 90,
        purpose: 'Revisar borradores con IA sin delegar autoría ni fabricar referencias.',
        segments: [
          { minutes: 15, activity: 'Declaración de uso', teacherTask: 'Explicar ejemplos válidos', studentTask: 'Redactar borrador de declaración', evidence: 'Declaración parcial' },
          { minutes: 30, activity: 'Revisión de borrador', teacherTask: 'Guiar revisión crítica', studentTask: 'Corregir borrador', evidence: 'Cambios documentados' },
          { minutes: 30, activity: 'Revisión por pares', teacherTask: 'Calibrar criterios', studentTask: 'Dar feedback', evidence: 'Comentario de par' },
          { minutes: 15, activity: 'Cierre', teacherTask: 'Explicar entrega sumativa', studentTask: 'Registrar ajustes', evidence: 'Lista de ajustes' },
        ],
      },
    ],
    assignments: [
      { title: 'Ficha de lectura asistida', studentMinutes: 100, teacherReviewMinutes: 45, evidence: 'Ficha de lectura', notes: 'Revisar fidelidad al texto.' },
      { title: 'Borrador revisado con declaración', studentMinutes: 90, teacherReviewMinutes: 45, evidence: 'Borrador anotado', notes: 'Verificar voz propia y trazabilidad.' },
      { title: 'Miniensayo trazable', studentMinutes: 110, teacherReviewMinutes: 90, evidence: 'Miniensayo final', notes: 'Aplicar rúbrica parcial.' },
    ],
    teacherTasks: [
      { phase: 'Antes', task: 'Preparar lectura, ficha y ejemplos de declaración', minutes: 120, notes: 'Incluye accesibilidad del material.' },
      { phase: 'Durante', task: 'Facilitar dos sesiones semanales en vivo', minutes: 180, notes: 'Dos bloques de 90 minutos en semanas distintas.' },
      { phase: 'Después', task: 'Atender dudas de lectura y atribución', minutes: 75, notes: 'Foro o tutoría breve.' },
      { phase: 'Evaluación', task: 'Revisar fichas, borradores y miniensayos', minutes: 180, notes: 'Incluye revisión de asignaciones del módulo.' },
    ],
  },
  {
    moduleId: 'modulo-05',
    liveMinutes: 180,
    asyncMinutes: 420,
    assumption: 'Dos sesiones en vivo de 90 minutos, una por semana, y siete horas de práctica técnica reproducible.',
    sessions: [
      {
        title: 'Semana 7. Pregunta, dataset y licencia',
        durationMinutes: 90,
        purpose: 'Convertir una pregunta simple en un análisis con datos apropiados.',
        segments: [
          { minutes: 15, activity: 'Pregunta y dataset', teacherTask: 'Modelar selección de datos', studentTask: 'Elegir pregunta', evidence: 'Pregunta de análisis' },
          { minutes: 20, activity: 'Licencias y cards', teacherTask: 'Explicar restricciones', studentTask: 'Identificar licencia', evidence: 'Ficha de dataset' },
          { minutes: 35, activity: 'Carga y limpieza inicial', teacherTask: 'Acompañar setup', studentTask: 'Cargar y limpiar datos', evidence: 'Datos cargados' },
          { minutes: 20, activity: 'Cierre', teacherTask: 'Asignar análisis autónomo', studentTask: 'Planificar pasos', evidence: 'Plan técnico' },
        ],
      },
      {
        title: 'Semana 8. Análisis, código asistido y README',
        durationMinutes: 90,
        purpose: 'Probar análisis reproducible y documentar pasos, límites y uso de IA.',
        segments: [
          { minutes: 15, activity: 'Revisión de setup', teacherTask: 'Resolver bloqueos', studentTask: 'Validar entorno', evidence: 'Entorno funcional' },
          { minutes: 35, activity: 'Visualización y pruebas', teacherTask: 'Guiar interpretación y pruebas', studentTask: 'Crear gráfico y probar salida', evidence: 'Resultado probado' },
          { minutes: 25, activity: 'README', teacherTask: 'Guiar documentación', studentTask: 'Documentar pasos', evidence: 'README parcial' },
          { minutes: 15, activity: 'Cierre', teacherTask: 'Asignar entrega reproducible', studentTask: 'Registrar pendientes', evidence: 'Checklist final' },
        ],
      },
    ],
    assignments: [
      { title: 'Notebook, script u hoja de análisis', studentMinutes: 160, teacherReviewMinutes: 90, evidence: 'Análisis reproducible', notes: 'Debe poder ejecutarse o revisarse paso a paso.' },
      { title: 'Visualización e interpretación', studentMinutes: 90, teacherReviewMinutes: 35, evidence: 'Gráfico comentado', notes: 'Evaluar límites de interpretación.' },
      { title: 'README y licencia de datos', studentMinutes: 80, teacherReviewMinutes: 35, evidence: 'README', notes: 'Verificar fuente y licencia.' },
      { title: 'Corrección final documentada', studentMinutes: 90, teacherReviewMinutes: 50, evidence: 'Versión final', notes: 'Confirmar pruebas mínimas.' },
    ],
    teacherTasks: [
      { phase: 'Antes', task: 'Preparar dataset, notebook base y ruta sin código', minutes: 150, notes: 'Incluye prueba de baja conectividad.' },
      { phase: 'Durante', task: 'Facilitar dos sesiones semanales en vivo', minutes: 180, notes: 'Dos bloques de 90 minutos en semanas distintas.' },
      { phase: 'Después', task: 'Soporte técnico y revisión de entornos', minutes: 120, notes: 'Mesa técnica o foro.' },
      { phase: 'Evaluación', task: 'Revisar entregas reproducibles', minutes: 210, notes: 'Incluye revisión de asignaciones del módulo.' },
    ],
  },
  {
    moduleId: 'modulo-06',
    liveMinutes: 180,
    asyncMinutes: 300,
    assumption: 'Dos sesiones en vivo de 90 minutos, una por semana, y cinco horas de producción de portafolio.',
    sessions: [
      {
        title: 'Semana 9. Comunicación honesta y CV',
        durationMinutes: 90,
        purpose: 'Convertir evidencias reales del curso en lenguaje profesional honesto.',
        segments: [
          { minutes: 15, activity: 'Audiencia y evidencia', teacherTask: 'Explicar criterio profesional', studentTask: 'Listar evidencias', evidence: 'Inventario' },
          { minutes: 30, activity: 'CV asistido', teacherTask: 'Modelar revisión sin exageración', studentTask: 'Revisar CV', evidence: 'CV parcial' },
          { minutes: 25, activity: 'Feedback por pares', teacherTask: 'Calibrar honestidad y claridad', studentTask: 'Dar feedback', evidence: 'Comentarios' },
          { minutes: 20, activity: 'Cierre', teacherTask: 'Asignar versión final', studentTask: 'Registrar ajustes', evidence: 'Lista de ajustes' },
        ],
      },
      {
        title: 'Semana 10. Portafolio, README y pitch',
        durationMinutes: 90,
        purpose: 'Preparar una presentación breve y una evidencia compartible.',
        segments: [
          { minutes: 20, activity: 'README o portafolio', teacherTask: 'Mostrar estructura', studentTask: 'Organizar evidencias', evidence: 'Portafolio parcial' },
          { minutes: 25, activity: 'Pitch', teacherTask: 'Modelar pitch breve', studentTask: 'Ensayar pitch', evidence: 'Guion' },
          { minutes: 30, activity: 'Ronda de práctica', teacherTask: 'Dar feedback en vivo', studentTask: 'Presentar y ajustar', evidence: 'Pitch revisado' },
          { minutes: 15, activity: 'Cierre', teacherTask: 'Explicar entrega', studentTask: 'Planificar envío', evidence: 'Checklist' },
        ],
      },
    ],
    assignments: [
      { title: 'CV o perfil revisado', studentMinutes: 90, teacherReviewMinutes: 50, evidence: 'CV o perfil', notes: 'Revisar honestidad y pertinencia.' },
      { title: 'README o portafolio inicial', studentMinutes: 110, teacherReviewMinutes: 70, evidence: 'Portafolio', notes: 'Debe incluir evidencias del curso.' },
      { title: 'Pitch breve', studentMinutes: 70, teacherReviewMinutes: 30, evidence: 'Pitch oral, escrito o grabado', notes: 'Evaluar claridad y audiencia.' },
      { title: 'Declaración de uso de IA', studentMinutes: 30, teacherReviewMinutes: 20, evidence: 'Declaración', notes: 'Puede integrarse al portafolio.' },
    ],
    teacherTasks: [
      { phase: 'Antes', task: 'Preparar plantillas de CV, README y pitch', minutes: 120, notes: 'Incluye ejemplos accesibles.' },
      { phase: 'Durante', task: 'Facilitar dos sesiones semanales en vivo', minutes: 180, notes: 'Dos bloques de 90 minutos en semanas distintas.' },
      { phase: 'Después', task: 'Mentoría y revisión de portafolios', minutes: 90, notes: 'Puede apoyarse en pares o mentores.' },
      { phase: 'Evaluación', task: 'Revisar artefactos profesionales', minutes: 170, notes: 'Incluye revisión de asignaciones del módulo.' },
    ],
  },
  {
    moduleId: 'modulo-07',
    liveMinutes: 180,
    asyncMinutes: 300,
    assumption: 'Dos sesiones en vivo de 90 minutos, una por semana, y cinco horas de cierre, producto final y defensa.',
    sessions: [
      {
        title: 'Semana 11. Sprint review y riesgos finales',
        durationMinutes: 90,
        purpose: 'Revisar avance, riesgos multimodales, evidencias y criterios de defensa.',
        segments: [
          { minutes: 20, activity: 'Criterios finales', teacherTask: 'Explicar rúbrica y mínimos', studentTask: 'Revisar brechas', evidence: 'Checklist de brechas' },
          { minutes: 30, activity: 'Sprint review', teacherTask: 'Retroalimentar proyectos', studentTask: 'Presentar avance', evidence: 'Demo parcial' },
          { minutes: 25, activity: 'Riesgos y consentimiento', teacherTask: 'Revisar privacidad e identidad', studentTask: 'Completar matriz', evidence: 'Matriz de riesgos' },
          { minutes: 15, activity: 'Cierre', teacherTask: 'Asignar cierre del producto', studentTask: 'Planificar entrega', evidence: 'Plan final' },
        ],
      },
      {
        title: 'Semana 12. Presentación, defensa y certificación',
        durationMinutes: 90,
        purpose: 'Presentar producto final, defender decisiones y cerrar la microcredencial.',
        segments: [
          { minutes: 10, activity: 'Apertura de feria', teacherTask: 'Recordar tiempos y criterios', studentTask: 'Preparar presentación', evidence: 'Orden de presentación' },
          { minutes: 40, activity: 'Presentaciones finales', teacherTask: 'Evaluar con rúbrica', studentTask: 'Presentar proyecto', evidence: 'Presentación' },
          { minutes: 25, activity: 'Defensa oral breve', teacherTask: 'Hacer preguntas de proceso', studentTask: 'Defender decisiones', evidence: 'Defensa' },
          { minutes: 15, activity: 'Postest y cierre', teacherTask: 'Cerrar evidencias y próximos pasos', studentTask: 'Completar postest', evidence: 'Postest' },
        ],
      },
    ],
    assignments: [
      { title: 'Producto final', studentMinutes: 140, teacherReviewMinutes: 120, evidence: 'Producto o prototipo', notes: 'Evaluar producto y proceso.' },
      { title: 'Bitácora y tabla de verificación', studentMinutes: 80, teacherReviewMinutes: 70, evidence: 'Anexos de proceso', notes: 'Debe ser auditable.' },
      { title: 'Reflexión final y postest', studentMinutes: 40, teacherReviewMinutes: 30, evidence: 'Reflexión y formulario', notes: 'Requisito de microcredencial.' },
      { title: 'Ensayo de defensa', studentMinutes: 40, teacherReviewMinutes: 20, evidence: 'Guion o práctica', notes: 'Puede hacerse por equipo.' },
    ],
    teacherTasks: [
      { phase: 'Antes', task: 'Preparar rúbrica final, agenda de presentaciones y protocolo de cierre', minutes: 180, notes: 'Incluye revisión de consentimiento.' },
      { phase: 'Durante', task: 'Facilitar dos sesiones semanales en vivo', minutes: 180, notes: 'Sprint review y defensa final en bloques de 90 minutos.' },
      { phase: 'Después', task: 'Consolidar evidencias, postest e incidencias', minutes: 120, notes: 'Archivo de cohorte.' },
      { phase: 'Evaluación', task: 'Evaluar proyectos finales y retroalimentación', minutes: 240, notes: 'Incluye revisión de asignaciones del módulo.' },
    ],
  },
];

export const programTimeTotals = timeBudgets.reduce(
  (totals, budget) => {
    totals.liveMinutes += budget.liveMinutes;
    totals.asyncMinutes += budget.asyncMinutes;
    totals.teacherMinutes += budget.teacherTasks.reduce((sum, task) => sum + task.minutes, 0);
    totals.assignmentReviewMinutes += budget.assignments.reduce((sum, assignment) => sum + assignment.teacherReviewMinutes, 0);
    totals.liveSessions += budget.sessions.length;
    totals.maxSessionMinutes = Math.max(totals.maxSessionMinutes, ...budget.sessions.map((session) => session.durationMinutes));
    return totals;
  },
  { liveMinutes: 0, asyncMinutes: 0, teacherMinutes: 0, assignmentReviewMinutes: 0, liveSessions: 0, maxSessionMinutes: 0 },
);

const moduleTimeConstraintViolations = timeBudgets.flatMap((budget) => {
  const sessionViolations = budget.sessions
    .filter((session) => session.durationMinutes > programTimeConstraints.maxSessionMinutes)
    .map((session) => `${budget.moduleId}: ${session.title} supera ${programTimeConstraints.maxSessionMinutes} minutos`);
  const segmentViolations = budget.sessions
    .filter((session) => session.segments.reduce((sum, segment) => sum + segment.minutes, 0) !== session.durationMinutes)
    .map((session) => `${budget.moduleId}: los segmentos de ${session.title} no cuadran con la duración`);
  const studentMinutes = budget.liveMinutes + budget.asyncMinutes;
  const assignmentMinutes = budget.assignments.reduce((sum, assignment) => sum + assignment.studentMinutes, 0);
  const asyncViolation = assignmentMinutes === budget.asyncMinutes ? [] : [`${budget.moduleId}: asignaciones no cuadran con el tiempo autónomo`];
  const liveViolation = budget.sessions.reduce((sum, session) => sum + session.durationMinutes, 0) === budget.liveMinutes ? [] : [`${budget.moduleId}: sesiones no cuadran con el tiempo en vivo`];
  const totalViolation = studentMinutes % 30 === 0 ? [] : [`${budget.moduleId}: el total estudiantil no está en bloques de 30 minutos`];
  return [...sessionViolations, ...segmentViolations, ...asyncViolation, ...liveViolation, ...totalViolation];
});

export const timeConstraintViolations = [
  ...moduleTimeConstraintViolations,
  ...(programTimeTotals.liveSessions <= programTimeConstraints.maxLiveSessions ? [] : [`El programa supera ${programTimeConstraints.maxLiveSessions} sesiones en vivo`]),
  ...(programTimeTotals.maxSessionMinutes <= programTimeConstraints.maxSessionMinutes ? [] : [`El programa incluye sesiones mayores a ${programTimeConstraints.maxSessionMinutes} minutos`]),
];
