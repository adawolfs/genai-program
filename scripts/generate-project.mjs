import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const notSpecified = 'Not specified in source documentation';

function write(filePath, content) {
  const absolutePath = path.join(root, filePath);
  fs.mkdirSync(path.dirname(absolutePath), { recursive: true });
  fs.writeFileSync(absolutePath, content.trimStart() + '\n', 'utf8');
}

function json(value) {
  return JSON.stringify(value, null, 2);
}

function frontmatter(meta) {
  return `---\n${Object.entries(meta)
    .map(([key, value]) => {
      if (Array.isArray(value)) return `${key}: [${value.map((item) => `"${item}"`).join(', ')}]`;
      return `${key}: ${JSON.stringify(value)}`;
    })
    .join('\n')}\n---`;
}

function mdx(meta, body) {
  return `${frontmatter(meta)}\n\n${body.trim()}\n`;
}

const modules = [
  {
    id: 'modulo-01',
    slug: 'modulo-01-induccion',
    shortTitle: 'Inducción',
    title: 'Módulo 01. Inducción y política de uso',
    hours: 4,
    week: 'Semana 1',
    slidePath: '/slides/modulo-01/',
    description:
      'Introduce el propósito de la microcredencial, la política de uso de IA, las reglas de privacidad, la trazabilidad obligatoria y el diagnóstico inicial.',
    objectives: [
      'Reconocer qué usos de IA están permitidos, condicionados y prohibidos en el curso.',
      'Aplicar la política base de trazabilidad, verificación y protección de datos.',
      'Completar el diagnóstico inicial y firmar el acuerdo de uso responsable.',
    ],
    competencies: ['Ética y privacidad', 'Comunicación responsable', 'Pensamiento crítico inicial'],
    outcomes: [
      'Distingue escenarios aceptables y no aceptables de uso de IA.',
      'Explica por qué no se deben subir datos personales o sensibles a herramientas no aprobadas.',
      'Entrega una política personal de uso de IA alineada con la política del curso.',
    ],
    materials: ['Syllabus', 'Política base de IA', 'Consentimiento informado', 'Pretest', 'Checklist de privacidad'],
    freeTools: ['LMS institucional', 'Formulario de diagnóstico', 'Documento compartido para bitácora'],
    paidTools: ['No se requieren herramientas de pago para este módulo'],
    syncPlan: [
      ['90 min', 'Semana 1: inducción, política de IA, privacidad, acuerdo y ticket de salida'],
    ],
    asyncActivities: [
      'Completar pretest y encuesta de acceso tecnológico.',
      'Leer la política base de uso de IA y marcar dudas.',
      'Redactar una política personal breve de uso responsable.',
    ],
    facilitationNotes: [
      'Evitar que la conversación se reduzca a prohibiciones. El tono debe ser práctico: se permite usar IA con evidencia y responsabilidad.',
      'Pedir ejemplos concretos de riesgos de privacidad cercanos a la vida estudiantil.',
    ],
    difficulties: [
      'Confundir uso asistido con delegar autoría.',
      'Creer que una herramienta gratuita es automáticamente apropiada para datos personales.',
    ],
    formative: ['Quiz de política de IA', 'Discusión de escenarios', 'Ticket de salida'],
    summative: ['Acuerdo de uso firmado', 'Política personal de uso de IA'],
    deliverables: ['Pretest completado', 'Acuerdo de uso', 'Política personal'],
    accessibility: ['Ofrecer política en formato texto descargable y lectura guiada.', 'Permitir respuesta oral o escrita en el ticket de salida.'],
    ethics: ['No introducir datos personales de terceros en demostraciones.', 'Usar ejemplos ficticios o anonimizados.'],
  },
  {
    id: 'modulo-02',
    slug: 'modulo-02-fundamentos-ia',
    shortTitle: 'Fundamentos',
    title: 'Módulo 02. Fundamentos de IA y límites',
    hours: 6,
    week: 'Semana 2',
    slidePath: '/slides/modulo-02/',
    description:
      'Presenta capacidades, límites y riesgos de los sistemas de IA generativa, incluyendo contexto, memoria, sesgos, alucinaciones y seguridad.',
    objectives: [
      'Diferenciar capacidades reales, límites y errores frecuentes de modelos generativos.',
      'Comparar respuestas de dos o más sistemas sin asumir que una salida convincente es correcta.',
      'Describir riesgos de sesgo, opacidad, dependencia y alucinación.',
    ],
    competencies: ['Alfabetización técnica', 'Pensamiento crítico', 'Gestión de riesgos'],
    outcomes: [
      'Explica con lenguaje accesible qué puede y qué no puede hacer una herramienta de IA generativa.',
      'Identifica señales de respuesta especulativa o no verificable.',
      'Produce un informe breve de comparación entre herramientas.',
    ],
    materials: ['Guía de comparación', 'Plantilla de informe breve', 'Checklist de errores frecuentes'],
    freeTools: ['Dos LLMs con capa gratuita', 'LMS o documento compartido', 'Buscador web y fuentes primarias'],
    paidTools: ['Opcional: licencia premium de razonamiento para demostración docente'],
    syncPlan: [
      ['90 min', 'Semana 2: capacidades, límites, comparación inicial y verificación de afirmaciones'],
    ],
    asyncActivities: [
      'Comparar dos respuestas de IA sobre una pregunta académica.',
      'Verificar tres afirmaciones con fuentes externas.',
      'Redactar un informe corto de contraste.',
    ],
    facilitationNotes: [
      'Modelar incertidumbre docente: mostrar cuándo una respuesta parece útil pero requiere verificación.',
      'Usar preguntas de distintas disciplinas para no centrar todo en programación.',
    ],
    difficulties: ['Aceptar la primera respuesta por fluidez.', 'No separar estilo de exactitud.', 'No registrar versión o herramienta utilizada.'],
    formative: ['Bitácora de pruebas', 'Lista de errores detectados'],
    summative: ['Informe breve de comparación'],
    deliverables: ['Tabla de comparación', 'Informe corto con fuentes'],
    accessibility: ['Ofrecer ejemplos textuales además de demostración en vivo.', 'Permitir trabajar con lectura, audio transcrito o dataset simple.'],
    ethics: ['No evaluar personas reales ni grupos protegidos con herramientas no auditadas.', 'Discutir sesgo sin exponer casos personales.'],
  },
  {
    id: 'modulo-03',
    slug: 'modulo-03-prompting-y-verificacion',
    shortTitle: 'Prompting y verificación',
    title: 'Módulo 03. Prompting y verificación',
    hours: 10,
    week: 'Semanas 3 y 4',
    slidePath: '/slides/modulo-03/',
    description:
      'Desarrolla solicitudes reproducibles, criterios de evaluación, verificación con fuentes y corrección humana de salidas de IA.',
    objectives: [
      'Diseñar prompts con contexto, tarea, formato, criterios y límites.',
      'Auditar una salida de IA con fuentes, revisión humana y documentación del proceso.',
      'Rechazar o corregir resultados cuando la evidencia sea insuficiente.',
    ],
    competencies: ['Prompting reproducible', 'Verificación', 'Trazabilidad'],
    outcomes: [
      'Reescribe un prompt débil y demuestra mejora observable.',
      'Documenta un ciclo de prompt, resultado, problema, revisión y decisión final.',
      'Entrega una auditoría de salida de IA con evidencias.',
    ],
    materials: ['Bitácora de prompts', 'Checklist de verificación', 'Ejemplos de prompts débiles', 'Rúbrica de auditoría'],
    freeTools: ['LLMs gratuitos para comparación', 'Fuentes primarias abiertas', 'Documento de bitácora'],
    paidTools: ['Opcional: Perplexity Education Pro, Le Chat Pro o plan premium similar para investigación avanzada'],
    syncPlan: [
      ['90 min', 'Semana 3: anatomía de un prompt verificable y taller de reescritura'],
      ['90 min', 'Semana 4: verificación con fuentes, auditoría de salida y decisión humana'],
    ],
    asyncActivities: [
      'Completar una bitácora de prompts con dos iteraciones.',
      'Auditar una respuesta con al menos dos evidencias externas.',
      'Publicar una reflexión sobre qué decisión final fue humana.',
    ],
    facilitationNotes: [
      'Insistir en que pedir citas no garantiza que existan.',
      'Evaluar la trazabilidad del proceso, no solo la calidad de la respuesta final.',
    ],
    difficulties: ['Prompts demasiado amplios.', 'Citas fabricadas.', 'Mezclar fuentes no comparables.', 'No explicar la decisión humana final.'],
    formative: ['Lista de cotejo por pares', 'Revisión de bitácora'],
    summative: ['Auditoría de una salida de IA'],
    deliverables: ['Prompt inicial y revisado', 'Tabla de verificación', 'Auditoría final'],
    accessibility: ['Permitir bitácora en formato tabla, audio transcrito o documento narrativo.', 'Separar pasos para estudiantes con baja conectividad.'],
    ethics: ['Verificar afirmaciones sobre personas, salud, finanzas o decisiones de alto impacto con extremo cuidado.', 'No simular fuentes.'],
  },
  {
    id: 'modulo-04',
    slug: 'modulo-04-estudio-y-escritura',
    shortTitle: 'Estudio y escritura',
    title: 'Módulo 04. Estudio, lectura y escritura',
    hours: 8,
    week: 'Semanas 5 y 6',
    slidePath: '/slides/modulo-04/',
    description:
      'Integra IA en lectura, toma de notas, estudio y escritura académica sin perder autoría, voz propia ni rigor de citación.',
    objectives: [
      'Usar IA para preparar preguntas, mapas conceptuales y fichas de lectura verificables.',
      'Revisar borradores sin delegar autoría ni inventar referencias.',
      'Declarar el uso de IA en un ensayo o artefacto académico.',
    ],
    competencies: ['Comunicación académica', 'Autoría humana', 'Verificación de fuentes'],
    outcomes: [
      'Construye una ficha de lectura con soporte de IA y contraste con el texto original.',
      'Redacta un miniensayo con declaración de uso de IA.',
      'Distingue mejora de estilo, síntesis y generación no atribuida.',
    ],
    materials: ['Texto de lectura', 'Plantilla de ficha', 'Modelo de declaración de uso de IA', 'Rúbrica de escritura'],
    freeTools: ['NotebookLM o herramienta equivalente cuando esté disponible institucionalmente', 'Procesador de texto', 'LMS'],
    paidTools: ['Opcional: ChatGPT Plus, Claude Pro o Gemini AI Pro si la institución los aprueba'],
    syncPlan: [
      ['90 min', 'Semana 5: lectura asistida, ficha verificable y límites de autoría'],
      ['90 min', 'Semana 6: revisión de borrador, declaración de uso y revisión por pares'],
    ],
    asyncActivities: [
      'Preparar una ficha de lectura con preguntas y objeciones.',
      'Redactar un miniensayo o síntesis propia.',
      'Adjuntar declaración de uso de IA y evidencia de verificación.',
    ],
    facilitationNotes: [
      'Pedir que el estudiantado señale qué cambió después de leer directamente la fuente.',
      'Corregir de inmediato la confusión entre “mejorar estilo” y “reemplazar pensamiento”.',
    ],
    difficulties: ['Resúmenes genéricos.', 'Citas imprecisas.', 'Voz demasiado homogénea.', 'Falta de conexión con la lectura original.'],
    formative: ['Tutoría de borrador', 'Revisión de ficha de lectura'],
    summative: ['Miniensayo trazable'],
    deliverables: ['Ficha de lectura', 'Borrador revisado', 'Miniensayo con declaración'],
    accessibility: ['Permitir lectura con audio, resumen docente o versión de lectura fácil cuando corresponda.', 'Aceptar formatos equivalentes de ficha.'],
    ethics: ['No cargar textos con restricciones de licencia cuando no esté permitido.', 'No fabricar referencias ni citas.'],
  },
  {
    id: 'modulo-05',
    slug: 'modulo-05-datos-codigo-y-automatizacion',
    shortTitle: 'Datos y código',
    title: 'Módulo 05. Datos, código y automatización',
    hours: 10,
    week: 'Semanas 7 y 8',
    slidePath: '/slides/modulo-05/',
    description:
      'Trabaja con CSV, hojas de cálculo, notebooks, scripts simples y asistentes de código para producir análisis reproducibles con licencias claras.',
    objectives: [
      'Limpiar y analizar un dataset simple con herramientas accesibles.',
      'Usar IA para explicar, revisar o prototipar código sin dejar de probarlo.',
      'Documentar datos, licencias, pasos de análisis y límites.',
    ],
    competencies: ['Datos básicos', 'Reproducibilidad', 'Automatización responsable'],
    outcomes: [
      'Entrega un notebook, hoja de cálculo o script comentado.',
      'Explica qué parte del flujo fue asistida por IA y qué pruebas realizó.',
      'Identifica licencia y restricciones de un dataset.',
    ],
    materials: ['Dataset público', 'Notebook base', 'README de análisis', 'Checklist de licencias'],
    freeTools: ['VS Code', 'Google Colab', 'Kaggle', 'Hugging Face datasets', 'GitHub'],
    paidTools: ['Opcional: Copilot Pro, Colab Pro o pool de cómputo premium por proyecto'],
    syncPlan: [
      ['90 min', 'Semana 7: pregunta, dataset, licencia, carga y limpieza inicial'],
      ['90 min', 'Semana 8: análisis reproducible, pruebas, visualización y README'],
    ],
    asyncActivities: [
      'Completar notebook o hoja de cálculo con dos preguntas de análisis.',
      'Generar una visualización y explicar su límite.',
      'Documentar licencia, fuente y uso de IA.',
    ],
    facilitationNotes: [
      'Ofrecer ruta sin código en hoja de cálculo y ruta con código en notebook.',
      'Enfatizar que código generado debe ejecutarse, probarse y explicarse.',
    ],
    difficulties: ['Copiar código que no se entiende.', 'No documentar origen del dataset.', 'Sobreinterpretar visualizaciones.', 'Errores por datos faltantes.'],
    formative: ['Notebook comentado', 'Revisión por pares de pasos reproducibles'],
    summative: ['Entrega reproducible con datos y licencia explicitados'],
    deliverables: ['Notebook, script o hoja', 'README', 'Visualización comentada'],
    accessibility: ['Ruta alternativa con hoja de cálculo.', 'Dataset pequeño para baja conectividad.', 'Instrucciones paso a paso descargables.'],
    ethics: ['Usar datos públicos o anonimizados.', 'No inferir atributos sensibles ni perfilar personas reales.'],
  },
  {
    id: 'modulo-06',
    slug: 'modulo-06-comunicacion-y-carrera',
    shortTitle: 'Comunicación y carrera',
    title: 'Módulo 06. Comunicación, colaboración y carrera',
    hours: 8,
    week: 'Semanas 9 y 10',
    slidePath: '/slides/modulo-06/',
    description:
      'Aplica IA a presentaciones, documentación, colaboración, CV, entrevistas y portafolio profesional inicial.',
    objectives: [
      'Crear materiales de comunicación académica y profesional con revisión humana.',
      'Construir un CV, README, presentación o pitch con honestidad y evidencia.',
      'Usar IA para ensayar entrevistas sin exagerar competencias.',
    ],
    competencies: ['Comunicación profesional', 'Colaboración', 'Portafolio'],
    outcomes: [
      'Entrega un artefacto profesional inicial revisado.',
      'Presenta un pitch breve y claro.',
      'Documenta proceso y límites de uso de IA en materiales de carrera.',
    ],
    materials: ['Plantilla de CV', 'Plantilla de README', 'Guía de pitch', 'Rúbrica de comunicación'],
    freeTools: ['Google Docs o Microsoft Word web', 'Slides o PowerPoint web', 'GitHub o carpeta de portafolio'],
    paidTools: ['Opcional: licencia premium de escritura o diseño si está aprobada'],
    syncPlan: [
      ['90 min', 'Semana 9: comunicación honesta, CV asistido y feedback por pares'],
      ['90 min', 'Semana 10: portafolio, README, pitch y preparación de entrevista'],
    ],
    asyncActivities: [
      'Crear o revisar CV, README o página de portafolio.',
      'Grabar o presentar un pitch breve.',
      'Declarar uso de IA y cambios humanos realizados.',
    ],
    facilitationNotes: [
      'Pedir evidencia para cada afirmación de competencia.',
      'Conectar materiales de carrera con entregables reales del curso.',
    ],
    difficulties: ['CV inflado.', 'Presentaciones con demasiado texto.', 'README sin instrucciones reproducibles.', 'Pitch genérico.'],
    formative: ['Feedback en vivo', 'Revisión por pares del pitch'],
    summative: ['Portafolio profesional inicial'],
    deliverables: ['CV o perfil', 'README o portafolio', 'Pitch'],
    accessibility: ['Permitir pitch oral, escrito o grabado con subtítulos.', 'Plantillas compatibles con lector de pantalla.'],
    ethics: ['No inventar experiencia.', 'No subir datos personales innecesarios a herramientas de consumo.'],
  },
  {
    id: 'modulo-07',
    slug: 'modulo-07-multimodalidad-y-proyecto-final',
    shortTitle: 'Multimodalidad y proyecto',
    title: 'Módulo 07. Multimodalidad y proyecto final',
    hours: 8,
    week: 'Semanas 11 y 12',
    slidePath: '/slides/modulo-07/',
    description:
      'Cierra el programa con un proyecto aplicado por disciplina, evidencias de proceso, producción multimodal responsable y defensa final.',
    objectives: [
      'Diseñar un proyecto útil, ético y presentable para una audiencia definida.',
      'Documentar trazabilidad, decisiones humanas, verificación y riesgos.',
      'Presentar y defender el proyecto final con reflexión metacognitiva.',
    ],
    competencies: ['Proyecto aplicado', 'Ética multimodal', 'Defensa oral', 'Microcredencial'],
    outcomes: [
      'Entrega proyecto final con producto, bitácora, verificación y reflexión.',
      'Defiende decisiones técnicas, éticas y comunicativas.',
      'Cumple requisitos de microcredencial.',
    ],
    materials: ['Plan de proyecto final', 'Rúbrica analítica', 'Plantilla de reflexión', 'Checklist de entrega'],
    freeTools: ['Herramientas gratuitas aprobadas', 'Repositorio o carpeta de portafolio', 'LMS'],
    paidTools: ['Opcional: Firefly, ElevenLabs, Colab Pro u otras licencias rotativas según proyecto y consentimiento'],
    syncPlan: [
      ['90 min', 'Semana 11: sprint review, riesgos multimodales y consentimiento'],
      ['90 min', 'Semana 12: presentación final, defensa oral, postest y cierre de microcredencial'],
    ],
    asyncActivities: [
      'Finalizar producto y evidencias.',
      'Completar postest y reflexión final.',
      'Preparar defensa oral breve con declaración de uso de IA.',
    ],
    facilitationNotes: [
      'Evaluar producto y proceso con el mismo rigor.',
      'Revisar consentimiento antes de cualquier voz, imagen o identidad de terceros.',
    ],
    difficulties: ['Producto vistoso con poca verificación.', 'Falta de reflexión humana.', 'Uso multimodal sin derechos claros.', 'Entrega sin evidencia intermedia.'],
    formative: ['Sprint reviews', 'Ensayo de defensa'],
    summative: ['Proyecto final', 'Presentación', 'Reflexión final', 'Postest'],
    deliverables: ['Producto final', 'Bitácora', 'Tabla de verificación', 'Defensa', 'Reflexión'],
    accessibility: ['Aceptar formatos equivalentes de producto cuando cumplan resultados.', 'Asegurar subtítulos, alternativa textual y contraste suficiente.'],
    ethics: ['Consentimiento explícito para voz, imagen o identidad.', 'Metadatos o transparencia cuando se produzcan piezas sintéticas.'],
  },
];

const rubricCriteria = [
  {
    criterion: 'Problema y propósito',
    excellent: 'Delimitación clara, relevante y bien justificada.',
    competent: 'Claro con pequeños vacíos.',
    developing: 'Parcialmente claro.',
    insufficient: 'Confuso o mal definido.',
  },
  {
    criterion: 'Uso de IA',
    excellent: 'Estratégico, documentado y reproducible.',
    competent: 'Adecuado y mayormente documentado.',
    developing: 'Uso parcial o poco claro.',
    insufficient: 'Uso opaco o improcedente.',
  },
  {
    criterion: 'Verificación',
    excellent: 'Contraste robusto con fuentes fiables y revisión humana.',
    competent: 'Verificación suficiente.',
    developing: 'Verificación superficial.',
    insufficient: 'Sin verificación fiable.',
  },
  {
    criterion: 'Rigor disciplinar',
    excellent: 'Conceptualmente sólido y pertinente.',
    competent: 'Correcto con errores menores.',
    developing: 'Incompleto o genérico.',
    insufficient: 'Débil o erróneo.',
  },
  {
    criterion: 'Ética y privacidad',
    excellent: 'Riesgos identificados, mitigados y documentados.',
    competent: 'Riesgos reconocidos parcialmente.',
    developing: 'Escasa consideración ética.',
    insufficient: 'Ignora riesgos clave.',
  },
  {
    criterion: 'Comunicación',
    excellent: 'Clara, convincente y bien estructurada.',
    competent: 'Clara con mejoras menores.',
    developing: 'Irregular o poco adaptada a la audiencia.',
    insufficient: 'Deficiente.',
  },
  {
    criterion: 'Reflexión',
    excellent: 'Explica con precisión qué hizo la IA y qué decidió la persona.',
    competent: 'Reflexión aceptable.',
    developing: 'Reflexión breve.',
    insufficient: 'Sin reflexión útil.',
  },
];

const projects = [
  {
    discipline: 'Humanidades',
    project: 'Ensayo comparativo asistido por IA sobre una obra, autor o debate.',
    deliverables: 'Ensayo, tabla de contraste de fuentes y bitácora.',
    watch: 'Que la IA no sustituya la interpretación propia.',
  },
  {
    discipline: 'Ciencias sociales',
    project: 'Análisis de un pequeño dataset o encuesta con memo ejecutivo.',
    deliverables: 'Notebook o tabla, visualización y memo.',
    watch: 'Relación entre datos, inferencia y límites.',
  },
  {
    discipline: 'Empresa y economía',
    project: 'Brief de mercado con propuesta de valor y presentación.',
    deliverables: 'Dossier, presentación y declaración de uso.',
    watch: 'Evitar cifras inventadas y validar fuentes.',
  },
  {
    discipline: 'Ingeniería / CS',
    project: 'Automatización simple, script o prototipo con README.',
    deliverables: 'Repositorio, demo, documentación y reflexión sobre seguridad.',
    watch: 'Comprensión real del código y pruebas básicas.',
  },
  {
    discipline: 'Salud y ciencias de la vida',
    project: 'Material educativo no clínico verificado línea por línea.',
    deliverables: 'Folleto, tabla de evidencia y advertencias de uso.',
    watch: 'No dar consejo clínico no supervisado.',
  },
  {
    discipline: 'Comunicación / diseño',
    project: 'Campaña multimodal con piezas visuales o audio.',
    deliverables: 'Kit creativo, metadatos o transparencia y justificación ética.',
    watch: 'Consentimiento, originalidad y atribución.',
  },
];

const checklistGroups = [
  {
    group: 'Pedagogía',
    items: ['Syllabus publicado', 'Política de IA explicada', 'Actividades por módulo cargadas', 'Defensas finales calendarizadas'],
  },
  {
    group: 'Tecnología',
    items: ['LMS creado', 'Cuentas verificadas', 'Repositorios o carpetas preparados', 'Notebooks probados con cuentas estudiantiles'],
  },
  {
    group: 'Privacidad',
    items: ['Semáforo de datos visible', 'Consentimientos listos', 'Herramientas aprobadas catalogadas', 'Formulario de incidentes activo'],
  },
  {
    group: 'Accesibilidad',
    items: ['Materiales descargables', 'Subtítulos o transcripciones', 'Alternativas de baja conectividad', 'Plantillas compatibles con lector de pantalla'],
  },
  {
    group: 'Evaluación',
    items: ['Pretest y postest configurados', 'Rúbricas cargadas', 'Bitácora de prompts preparada', 'Criterios de microcredencial comunicados'],
  },
];

const incidents = [
  {
    type: 'Integridad académica',
    signal: 'Entrega opaca, fuentes inventadas, texto incoherente con desempeño previo.',
    immediate: 'Pedir bitácora, versión intermedia y defensa oral breve.',
    escalation: 'Coordinación académica.',
    prevention: 'Rúbricas de proceso, defensa oral y revisión de fuentes.',
  },
  {
    type: 'Privacidad',
    signal: 'Datos personales o sensibles subidos a una herramienta no aprobada.',
    immediate: 'Retirar material, documentar, anonimizar y cambiar herramienta.',
    escalation: 'Soporte técnico y responsable de datos.',
    prevention: 'Semáforo de datos, cuentas institucionales y minimización.',
  },
  {
    type: 'Accesibilidad',
    signal: 'Barreras de formato, audio, lectura, navegación o conectividad.',
    immediate: 'Activar alternativa equivalente y ajustar plazo razonable.',
    escalation: 'Referente de inclusión.',
    prevention: 'Diseño Universal para el Aprendizaje desde el inicio.',
  },
  {
    type: 'Identidad, voz o imagen',
    signal: 'Uso de voz, imagen o semejanza sin consentimiento explícito.',
    immediate: 'Pausar publicación o entrega, retirar el archivo y registrar evidencia.',
    escalation: 'Coordinación y autoridad institucional pertinente.',
    prevention: 'Consentimiento explícito, revisión previa y prohibición de imitación no autorizada.',
  },
  {
    type: 'Técnico',
    signal: 'Herramienta no autorizada, fallo de acceso o exposición de permisos.',
    immediate: 'Suspender uso, ajustar permisos y ofrecer alternativa aprobada.',
    escalation: 'Soporte técnico.',
    prevention: 'Pruebas con cuentas de estudiante y catálogo aprobado.',
  },
];

const licenseTypes = [
  { type: 'Investigación premium', quantity: 10, defaultWindow: 'Semanas 3-6', rule: 'Equipos con revisión documental o benchmark.' },
  { type: 'Código premium', quantity: 12, defaultWindow: 'Semanas 7-10', rule: 'Equipos con notebooks, scripts o automatización.' },
  { type: 'Cómputo premium', quantity: 10, defaultWindow: 'Semanas 7-11', rule: 'Solo por necesidad de proyecto y recursos.' },
  { type: 'Creatividad visual', quantity: 10, defaultWindow: 'Semanas 10-12', rule: 'Equipos de comunicación, diseño o difusión.' },
  { type: 'Audio', quantity: 5, defaultWindow: 'Semanas 11-12', rule: 'Uso puntual con consentimiento explícito.' },
];

const budgetScenarios = [
  {
    name: 'Base casi gratuito',
    description: 'Usa LMS institucional o Moodle, suites educativas gratuitas, VS Code, Colab/Kaggle y LLMs gratuitos para comparación.',
    softwareLow: 0,
    softwareHigh: 600,
    humanLow: 4100,
    humanHigh: 10200,
    notes: 'Hosting Moodle estimado entre 150 y 500 USD si no existe LMS institucional.',
  },
  {
    name: 'Reforzado con licencias selectivas',
    description: 'Añade pool rotativo de investigación, código, cómputo, creatividad visual y audio.',
    softwareLow: 2200,
    softwareHigh: 4800,
    humanLow: 4100,
    humanHigh: 10200,
    notes: 'Firefly puede conservar componente en EUR. Precios regionales deben confirmarse antes de compra.',
  },
];

const modalityPlans = [
  {
    id: 'semestral',
    label: 'Semestral',
    duration: '54 horas en 12 semanas',
    rhythm: '1 sesión semanal de 90 min + trabajo autónomo',
    multiplier: 1,
    bestFor: 'Ruta recomendada para universidades y programas puente.',
  },
  {
    id: 'intensivo',
    label: 'Compacto 10 semanas',
    duration: '45 a 46 horas en 10 semanas',
    rhythm: '1 sesión semanal de hasta 90 min + mayor carga autónoma',
    multiplier: 0.85,
    bestFor: 'Nivelación con calendario reducido sin romper el límite de sesiones.',
  },
  {
    id: 'tutorizado',
    label: 'Autodidacta tutorizado',
    duration: '45 a 54 horas en 12 semanas',
    rhythm: '1 tutoría o sesión semanal de hasta 90 min',
    multiplier: 0.9,
    bestFor: 'Escalabilidad, educación continua o sedes múltiples.',
  },
];

function moduleDoc(module, index) {
  return mdx(
    {
      title: module.title,
      sidebar_label: module.title.replace('Módulo ', ''),
      description: module.description,
      tags: ['syllabus', 'modulo', module.id],
    },
    `
import TimeBudget from '@site/src/components/program/TimeBudget';

# ${module.title}

${module.description}

**Duración:** ${module.hours} horas.  
**Ubicación sugerida:** ${module.week}.  
**Deck Reveal.js:** [abrir diapositivas](${module.slidePath}).

:::tip Uso docente
Esta página está escrita para que un instructor pueda ejecutar el módulo sin depender de memoria oral o decisiones implícitas. Ajustes institucionales específicos: ${notSpecified}.
:::

<TimeBudget moduleId="${module.id}" />

## Objetivos de aprendizaje

${module.objectives.map((item) => `- ${item}`).join('\n')}

## Competencias abordadas

${module.competencies.map((item) => `- ${item}`).join('\n')}

## Resultados medibles

${module.outcomes.map((item) => `- ${item}`).join('\n')}

## Materiales requeridos

${module.materials.map((item) => `- ${item}`).join('\n')}

## Herramientas

| Capa gratuita o institucional | Capa de pago opcional |
|---|---|
| ${module.freeTools.join('<br />')} | ${module.paidTools.join('<br />')} |

## Plan de sesiones síncronas semanales

| Tramo | Actividad |
|---|---|
${module.syncPlan.map(([time, action]) => `| ${time} | ${action} |`).join('\n')}

## Actividades asíncronas

${module.asyncActivities.map((item) => `- ${item}`).join('\n')}

## Notas de facilitación docente

${module.facilitationNotes.map((item) => `- ${item}`).join('\n')}

## Dificultades comunes del estudiantado

${module.difficulties.map((item) => `- ${item}`).join('\n')}

## Evaluación formativa

${module.formative.map((item) => `- ${item}`).join('\n')}

## Evaluación sumativa

${module.summative.map((item) => `- ${item}`).join('\n')}

## Entregables

${module.deliverables.map((item) => `- ${item}`).join('\n')}

## Enlaces de rúbrica

- [Rúbrica analítica del proyecto final](/docs/05-evaluacion/rubricas)
- [Instrumentos de evaluación](/docs/05-evaluacion/instrumentos)
- [Estrategia de evaluación](/docs/05-evaluacion/estrategia-de-evaluacion)

## Consideraciones de accesibilidad

${module.accessibility.map((item) => `- ${item}`).join('\n')}

## Consideraciones éticas y de privacidad

${module.ethics.map((item) => `- ${item}`).join('\n')}

## Continuidad

${index < modules.length - 1 ? `Siguiente módulo recomendado: [${modules[index + 1].title}](/docs/04-syllabus-modular/${modules[index + 1].slug}).` : 'Cierre recomendado: [Proyecto final y microcredencial](/docs/05-evaluacion/evidencias-y-microcredencial).'}
`
  );
}

function tableRows(rows) {
  return rows.map((row) => `| ${row.join(' | ')} |`).join('\n');
}

const docs = [
  [
    'docs/00-introduccion/bienvenida.mdx',
    mdx(
      { title: 'Bienvenida', sidebar_label: 'Bienvenida', tags: ['introduccion'] },
      `
# Portal de implementación del programa

Este portal documenta una microcredencial híbrida sobre alfabetización y uso aplicado de IA para jóvenes en transición a la universidad o en sus primeros años universitarios.

La propuesta toma como fuente canónica los archivos \`deep-research-report.md\` y \`deep-research-report (2).md\`. El diseño resultante prioriza uso práctico, ética, privacidad, verificación, trazabilidad y evidencias de aprendizaje.

## Qué permite hacer este portal

- Replicar el programa con una cohorte de referencia de 30 participantes.
- Ejecutar una ruta semestral de 54 horas, máximo 12 semanas y una sesión en vivo semanal de hasta 90 minutos.
- Entregar guías para docentes, estudiantes, coordinación, soporte técnico y evaluación.
- Usar herramientas interactivas para planificar syllabus, rúbricas, licencias, incidentes y seguimiento.
- Presentar el programa con decks Reveal.js listos para capacitación y aula.

## Supuestos base

| Variable | Decisión de diseño |
|---|---|
| Idioma | Español |
| Modalidad | Híbrida |
| Cohorte de referencia | 30 participantes |
| Edad | 17 a 21 años |
| Duración recomendada | 54 horas en 12 semanas |
| Sesiones en vivo | Máximo 1 por semana, 90 minutos por sesión |
| Tipo de institución | ${notSpecified} |
| País, moneda local, salarios | ${notSpecified} |
| LMS existente | ${notSpecified} |

:::warning Dato institucional pendiente
Cuando un dato no aparece en los informes fuente se marca como "${notSpecified}". No debe reemplazarse por una política local sin validación institucional.
:::
`
    ),
  ],
  [
    'docs/00-introduccion/como-usar-este-portal.mdx',
    mdx(
      { title: 'Cómo usar este portal', sidebar_label: 'Cómo usar este portal', tags: ['introduccion', 'operacion'] },
      `
# Cómo usar este portal

El portal está organizado para cuatro perfiles: coordinación académica, docentes, tutores o TA, y soporte técnico. Cada perfil puede entrar por una ruta distinta sin perder la visión general.

## Ruta recomendada para coordinación

1. Leer [Resumen ejecutivo](/docs/01-marco-del-programa/resumen-ejecutivo).
2. Revisar [Cronograma operativo](/docs/06-implementacion/cronograma-operativo).
3. Ajustar [Gestión de licencias](/docs/06-implementacion/gestion-de-licencias).
4. Validar [Privacidad y cumplimiento](/docs/07-inclusion-y-gobernanza/privacidad-y-cumplimiento).
5. Preparar [Onboarding docente](/docs/06-implementacion/onboarding-docente).

## Ruta recomendada para docentes

1. Abrir [Manual docente general](/docs/02-manual-docente/manual-docente-general).
2. Usar [Guía operativa por sesión](/docs/02-manual-docente/guia-operativa-por-sesion).
3. Planificar con [Syllabus modular](/docs/04-syllabus-modular/estructura-general).
4. Preparar evaluación desde [Rúbricas](/docs/05-evaluacion/rubricas).
5. Usar los [decks de diapositivas](/docs/09-recursos/decks-y-diapositivas).

## Ruta recomendada para estudiantes

1. Leer [Guía del estudiante](/docs/03-guia-del-estudiante/guia-estudiante).
2. Consultar [Normas de trabajo](/docs/03-guia-del-estudiante/normas-de-trabajo).
3. Completar la [bitácora de prompts](/docs/03-guia-del-estudiante/como-documentar-el-uso-de-ia).
4. Revisar [Privacidad y seguridad](/docs/03-guia-del-estudiante/privacidad-y-seguridad).

## Extensión del portal

La arquitectura separa documentación, componentes React, datos compartidos, plantillas descargables y slides. Para actualizar contenido sin romper navegación, consulta [Cómo actualizar contenido](/docs/06-implementacion/actualizar-contenido).
`
    ),
  ],
  [
    'docs/00-introduccion/vista-general-del-programa.mdx',
    mdx(
      { title: 'Vista general del programa', sidebar_label: 'Vista general', tags: ['programa'] },
      `
# Vista general del programa

La microcredencial combina alfabetización en IA, productividad académica, ética, privacidad, verificación, análisis de datos, comunicación profesional y proyecto final.

\`\`\`mermaid
flowchart TD
    A[Inducción y política de uso] --> B[Fundamentos de IA y límites]
    B --> C[Prompting y verificación]
    C --> D[Estudio, lectura y escritura]
    C --> E[Datos, código y automatización]
    D --> F[Comunicación, colaboración y carrera]
    E --> F
    F --> G[Multimodalidad y proyecto final]
    G --> H[Microcredencial y cierre]
\`\`\`

## Módulos

| Módulo | Horas | Foco |
|---|---:|---|
${modules.map((m) => `| [${m.shortTitle}](/docs/04-syllabus-modular/${m.slug}) | ${m.hours} | ${m.description} |`).join('\n')}

## Producto final

El programa culmina en un portafolio con evidencias, bitácora de prompts, auditorías de salidas de IA, artefactos académicos o profesionales y proyecto aplicado por disciplina.
`
    ),
  ],
  [
    'docs/01-marco-del-programa/resumen-ejecutivo.mdx',
    mdx(
      { title: 'Resumen ejecutivo', sidebar_label: 'Resumen ejecutivo', tags: ['marco'] },
      `
# Resumen ejecutivo

La recomendación central de los informes fuente es implementar una **microcredencial híbrida, modular y basada en proyectos**. La ruta por defecto es semestral, con 54 horas distribuidas en 12 semanas, una sesión en vivo semanal de máximo 90 minutos y trabajo autónomo suficiente para desarrollar criterio antes de automatización.

## Decisiones de diseño

| Decisión | Justificación |
|---|---|
| Microcredencial | Permite evidencias acumulables, portafolio y criterios de aprobación claros. |
| Modalidad híbrida | Combina práctica guiada, trabajo autónomo, tutoría y documentación de proceso. |
| Pila gratuita o institucional | Reduce desigualdad de acceso y reserva licencias premium para cuellos de botella. |
| Uso permitido con trazabilidad | Evita prohibición total y uso informal sin control. |
| Proyecto final | Integra dominio disciplinar, verificación, ética y comunicación. |

## Enfoque operativo

El curso no enseña “la mejor herramienta”. Enseña a formular tareas, verificar resultados, proteger datos, producir artefactos con trazabilidad y explicar decisiones humanas.

## Límites de la fuente

| Dato | Estado |
|---|---|
| Institución implementadora | ${notSpecified} |
| País y jurisdicción local | ${notSpecified} |
| Política institucional previa de IA | ${notSpecified} |
| Salarios locales para presupuesto | ${notSpecified} |
`
    ),
  ],
  [
    'docs/01-marco-del-programa/fundamentos-pedagogicos.mdx',
    mdx(
      { title: 'Fundamentos pedagógicos', sidebar_label: 'Fundamentos pedagógicos', tags: ['pedagogia'] },
      `
# Fundamentos pedagógicos

La propuesta se sostiene sobre aprendizaje basado en proyectos, evaluación por evidencias, Diseño Universal para el Aprendizaje y alfabetización crítica en IA.

## Principios

- **Tareas auténticas:** estudiar, investigar, escribir, analizar datos, presentar y construir portafolio.
- **Juicio humano visible:** cada entrega explica qué hizo la IA y qué decidió la persona.
- **Verificación antes que automatización:** el programa enseña contraste antes de eficiencia.
- **Accesibilidad desde el inicio:** materiales en texto, alternativas equivalentes y baja conectividad.
- **Equidad de licencias:** los asientos premium se asignan por proyecto y ventana temporal.

## Secuencia didáctica

| Fase | Intención |
|---|---|
| Comprender | Conceptos, límites, sesgos y política de uso. |
| Aplicar | Prompts, verificación, lectura, escritura, datos y comunicación. |
| Crear | Proyecto final, portafolio, defensa y reflexión. |

:::tip Criterio docente
Evalúa la combinación de proceso, evidencia y producto. Un entregable visualmente pulido pero sin trazabilidad no debe considerarse suficiente.
:::
`
    ),
  ],
  [
    'docs/01-marco-del-programa/marcos-internacionales.mdx',
    mdx(
      { title: 'Marcos internacionales', sidebar_label: 'Marcos internacionales', tags: ['marco', 'gobernanza'] },
      `
# Marcos internacionales

Los informes fuente recomiendan usar marcos internacionales como referencia de diseño y gobernanza. El portal los traduce a decisiones operativas sin convertirlos en asesoría legal.

| Marco | Uso en el programa | Traducción operativa |
|---|---|---|
| UNESCO, competencias de IA para estudiantes | Resultados de aprendizaje y ciudadanía responsable | Competencias técnicas, éticas, críticas y comunicativas |
| UNESCO, competencias de IA para docentes | Onboarding y desarrollo profesional | Capacitación docente antes del inicio |
| DigComp 2.2 | Competencia digital transversal | Información, comunicación, creación, seguridad y resolución de problemas |
| DUA 3.0 | Inclusión y accesibilidad | Múltiples medios de participación, representación y expresión |
| NIST AI RMF | Gestión de riesgos | Gobernar, mapear, medir y gestionar riesgos |
| AI Act UE, artículo 4 | Alfabetización en IA | Formación contextual para usuarios y responsables |
| RGPD | Privacidad y datos | Minimización, finalidad, seguridad y evaluación de impacto cuando aplique |

:::warning Validación local
La jurisdicción concreta de implementación es ${notSpecified}. La coordinación debe validar obligaciones locales antes de publicar políticas institucionales finales.
:::
`
    ),
  ],
  [
    'docs/01-marco-del-programa/competencias-y-resultados.mdx',
    mdx(
      { title: 'Competencias y resultados', sidebar_label: 'Competencias y resultados', tags: ['competencias'] },
      `
# Competencias y resultados

| Dominio | Resultado observable | Evidencia mínima |
|---|---|---|
| Técnico | Formula prompts reproducibles, analiza textos y datos, y usa notebooks o repositorios básicos. | Bitácora, notebook o documento reproducible. |
| Ético | Distingue usos permitidos, condicionados y prohibidos; protege datos y reconoce sesgos. | Checklist ético, declaración de uso y matriz de riesgos. |
| Pensamiento crítico | Contrasta, corrige o rechaza respuestas de IA con fuentes y evidencia. | Fichas de verificación y tabla de contraste. |
| Comunicación | Explica qué hizo la IA, qué hizo la persona y por qué. | Informe, presentación, reflexión y defensa oral. |

## Mapa por módulo

| Módulo | Competencias principales |
|---|---|
${modules.map((m) => `| ${m.shortTitle} | ${m.competencies.join(', ')} |`).join('\n')}
`
    ),
  ],
  [
    'docs/01-marco-del-programa/perfil-de-participantes.mdx',
    mdx(
      { title: 'Perfil de participantes', sidebar_label: 'Perfil de participantes', tags: ['participantes'] },
      `
# Perfil de participantes

La cohorte de referencia es de 30 jóvenes de 17 a 21 años, en transición a la universidad o en primeros años universitarios. No se asume formación técnica previa.

| Dimensión | Decisión |
|---|---|
| Edad | 17 a 21 años |
| Nivel de entrada | Alfabetización digital básica |
| Programación previa | No requerida |
| Idioma | Español |
| Modalidad | Híbrida |
| Necesidades esperadas | Estudio, escritura, verificación, privacidad, comunicación y preparación profesional |

## Consideraciones para menores de 18

Los informes fuente recomiendan preferir cuentas institucionales y revisar consentimiento parental o tutorial cuando una plataforma de consumo lo exija. La política institucional concreta es ${notSpecified}.
`
    ),
  ],
  [
    'docs/02-manual-docente/manual-docente-general.mdx',
    mdx(
      { title: 'Manual docente general', sidebar_label: 'Manual general', tags: ['docentes'] },
      `
import { ProgramTimeOverview } from '@site/src/components/program/TimeBudget';

# Manual docente general

Este manual estandariza la ejecución del curso sin impedir adaptaciones locales. El criterio principal es que todo uso de IA sea trazable, verificable y defendible por el estudiante.

## Carga de tiempo del programa

<ProgramTimeOverview />

## Antes del curso

- Confirmar LMS, calendario, grupos y canal de soporte.
- Publicar syllabus, política de IA, rúbricas y plantillas.
- Ejecutar onboarding docente sobre política, herramientas, DUA, evaluación e incidentes.
- Probar accesos con al menos una cuenta de estudiante.
- Preparar alternativas de baja conectividad.

## Durante cada semana

- Abrir con objetivo, evidencia esperada y recordatorio de política.
- Modelar un uso de IA con errores, verificación y corrección.
- Pedir bitácora o evidencia de proceso en toda actividad evaluada.
- Revisar señales de privacidad, integridad y accesibilidad.
- Cerrar con una acción concreta de mejora.

## Después de cada sesión

- Registrar incidencias y ajustes necesarios.
- Revisar entregas formativas breves.
- Actualizar FAQ del LMS.
- Identificar estudiantes rezagados o con barreras técnicas.

## Cómo revisar trabajo asistido por IA

| Señal | Qué pedir | Criterio |
|---|---|---|
| Texto muy pulido pero genérico | Bitácora y versión intermedia | Debe poder explicar decisiones |
| Fuentes dudosas | Verificación de existencia y pertinencia | No aceptar referencias inventadas |
| Código que no ejecuta | Prueba mínima y explicación línea a línea | La comprensión pesa más que el autocompletado |
| Datos sensibles | Retiro, anonimización y registro | No evaluar hasta contener riesgo |

## Manejo de mal uso sin ambigüedad

1. Solicitar evidencia de proceso.
2. Realizar defensa oral breve.
3. Clasificar si es error formativo, falta de trazabilidad o incidente.
4. Aplicar rúbrica y política publicada.
5. Escalar solo cuando corresponda a coordinación o privacidad.
`
    ),
  ],
  [
    'docs/02-manual-docente/guia-operativa-por-sesion.mdx',
    mdx(
      { title: 'Guía operativa por sesión', sidebar_label: 'Operación por sesión', tags: ['docentes', 'operacion'] },
      `
# Guía operativa por sesión

## Sesión síncrona estándar

Toda sesión síncrona se diseña como un bloque máximo de 90 minutos y solo se programa una vez por semana.

| Tramo | Tiempo | Acción docente | Evidencia |
|---|---:|---|---|
| Apertura | 10 min | Recordar objetivo, criterio de éxito y política aplicable | Respuesta inicial |
| Demostración guiada | 15 min | Modelar tarea con IA, verificación y corrección | Bitácora de observación |
| Práctica estructurada | 20 min | Entregar caso y plantilla | Primer artefacto |
| Transición | 5 min | Resolver dudas críticas | Ajuste de plan |
| Práctica aplicada | 25 min | Retroalimentar y detectar atajos improcedentes | Producto parcial |
| Cierre | 10 min | Debrief y ticket de salida | Reflexión breve |
| Asignación | 5 min | Explicar tarea, rúbrica y ejemplos | Registro en LMS |

## Sesión asíncrona estándar

| Tramo | Tiempo | Recurso | Tarea |
|---|---:|---|---|
| Microcontenido | 20 a 25 min | Video o lectura breve | Comprender concepto y límites |
| Actividad | 35 a 45 min | Plantilla o notebook | Aplicar a un caso |
| Verificación | 15 a 20 min | Checklist | Contrastar y documentar errores |
| Reflexión | 10 a 15 min | Foro o formulario | Explicar delegación y decisión humana |
| Entrega | 5 a 10 min | LMS o repositorio | Subir evidencia |

## Adaptación para modalidad completamente online

- Convertir demostraciones en microvideos con transcripción.
- Dividir prácticas largas en microtareas con puntos de control.
- Usar tutorías de 5 a 10 minutos por equipo.
- Asegurar que cada actividad tenga alternativa descargable.
`
    ),
  ],
  [
    'docs/02-manual-docente/gestion-del-aula-hibrida.mdx',
    mdx(
      { title: 'Gestión del aula híbrida', sidebar_label: 'Aula híbrida', tags: ['docentes', 'hibrido'] },
      `
# Gestión del aula híbrida

La modalidad híbrida funciona cuando cada actividad deja evidencia clara y no depende de estar presente en una demostración única.

## Reglas operativas

- Publicar instrucciones antes de la sesión.
- Mantener una plantilla común para bitácoras y entregas.
- Grabar o documentar las demostraciones clave cuando la política institucional lo permita.
- Ofrecer canal de dudas y horario de tutoría.
- Cerrar cada semana con estado de entregas y próximos pasos.

## Baja conectividad

| Barrera | Ajuste |
|---|---|
| Conexión inestable | Paquete semanal descargable y entregas asíncronas |
| Dispositivo limitado | Actividades equivalentes en documento u hoja de cálculo |
| Herramienta pesada | Dataset pequeño y capturas de ejemplo |
| Falta de audio o video | Transcripción y alternativa textual |

## Cohortes mayores o menores

| Tamaño | Ajuste |
|---|---|
| Menos de 20 | Más defensa oral individual y tutoría personalizada |
| 30 a 60 | Equipos de 5 a 6 y revisión por pares estructurada |
| Más de 60 | Secciones, rúbricas centralizadas y TA adicionales |
`
    ),
  ],
  [
    'docs/02-manual-docente/lineamientos-de-uso-de-ia.mdx',
    mdx(
      { title: 'Lineamientos de uso de IA', sidebar_label: 'Uso de IA', tags: ['politica', 'docentes'] },
      `
# Lineamientos de uso de IA

## Política base

\`\`\`text
Se permite el uso de herramientas de IA para ideación, tutoría, reformulación,
análisis exploratorio, estudio, prototipado y accesibilidad.

Se permite el uso de IA en borradores y actividades evaluadas solo si el estudiante:
1. declara qué herramienta utilizó;
2. describe para qué la utilizó;
3. conserva evidencia del proceso;
4. verifica afirmaciones sustantivas con fuentes y criterio humano.

No se permite:
a) presentar como propio contenido generado sin declaración;
b) inventar citas o referencias;
c) introducir datos personales, sensibles o confidenciales en herramientas no aprobadas;
d) usar clonación de voz, imagen o identidad de terceros sin consentimiento;
e) delegar completamente la toma de decisiones evaluadas.
\`\`\`

## Semáforo de uso

| Estado | Ejemplos |
|---|---|
| Permitido | Ideación, preguntas de estudio, reformulación, accesibilidad, prototipado declarado |
| Condicionado | Borradores, análisis de datos, materiales evaluables, multimodalidad |
| Prohibido | Suplantación, citas inventadas, datos sensibles en consumo, voz o imagen sin consentimiento |
`
    ),
  ],
  [
    'docs/02-manual-docente/checklist-docente.mdx',
    mdx(
      { title: 'Checklist docente', sidebar_label: 'Checklist docente', tags: ['checklist'] },
      `
import ImplementationChecklist from '@site/src/components/teacher-tools/ImplementationChecklist';

# Checklist docente

Use esta lista antes del lanzamiento y durante la primera semana. La versión interactiva ayuda a coordinar pedagogía, tecnología, privacidad, accesibilidad y evaluación.

<ImplementationChecklist />

## Versión estática

${checklistGroups
  .map((group) => `### ${group.group}\n\n${group.items.map((item) => `- [ ] ${item}`).join('\n')}`)
  .join('\n\n')}
`
    ),
  ],
  [
    'docs/03-guia-del-estudiante/guia-estudiante.mdx',
    mdx(
      { title: 'Guía del estudiante', sidebar_label: 'Guía general', tags: ['estudiantes'] },
      `
# Guía del estudiante

Este curso permite usar IA, pero exige evidencia del proceso. La regla central es simple: puedes apoyarte en IA, pero debes poder explicar, verificar y defender el resultado.

## Cómo usar IA responsablemente

- Define primero la tarea con tus palabras.
- Pide ayuda específica, no una entrega final opaca.
- Verifica afirmaciones importantes con fuentes.
- Corrige y decide tú.
- Declara herramienta, propósito y cambios realizados.

## Qué debes conservar

- Prompt inicial y revisado.
- Resultado recibido.
- Problemas detectados.
- Fuentes usadas para verificar.
- Decisión final humana.

## Qué no debes hacer

- Presentar contenido generado sin declararlo.
- Inventar citas o usar referencias que no existen.
- Subir datos personales o sensibles a herramientas no aprobadas.
- Usar voz, imagen o identidad de otra persona sin consentimiento.
`
    ),
  ],
  [
    'docs/03-guia-del-estudiante/normas-de-trabajo.mdx',
    mdx(
      { title: 'Normas de trabajo', sidebar_label: 'Normas de trabajo', tags: ['estudiantes', 'politica'] },
      `
# Normas de trabajo

| Norma | Qué significa en la práctica |
|---|---|
| Trazabilidad | Conserva bitácora, versiones y decisiones. |
| Verificación | Contrasta información sustantiva antes de entregarla. |
| Privacidad | No subas datos personales o sensibles a herramientas no aprobadas. |
| Autoría | La decisión final debe ser tuya y defendible. |
| Transparencia | Declara qué herramienta usaste y con qué propósito. |

## Declaración breve de uso de IA

\`\`\`text
Usé [herramienta] para [propósito]. Verifiqué [elementos] con [fuentes].
Acepté [partes] y corregí o descarté [partes] por [razón].
La decisión final y la redacción final son responsabilidad mía.
\`\`\`
`
    ),
  ],
  [
    'docs/03-guia-del-estudiante/como-documentar-el-uso-de-ia.mdx',
    mdx(
      { title: 'Cómo documentar el uso de IA', sidebar_label: 'Documentar IA', tags: ['estudiantes', 'bitacora'] },
      `
import PromptLogTemplateViewer from '@site/src/components/teacher-tools/PromptLogTemplateViewer';

# Cómo documentar el uso de IA

La bitácora de prompts no busca castigar el uso de IA. Busca hacer visible tu criterio: qué pediste, qué recibiste, qué detectaste, qué verificaste y qué decidiste.

<PromptLogTemplateViewer />

## Versión mínima

\`\`\`text
Proyecto o tarea:
Fecha:
Herramienta:
Objetivo del uso:
Prompt inicial:
Resultado recibido:
Problemas detectados:
Prompt revisado:
Qué se aceptó:
Qué se corrigió o descartó:
Fuentes de verificación:
Riesgos éticos o de privacidad:
Decisión final humana:
\`\`\`
`
    ),
  ],
  [
    'docs/03-guia-del-estudiante/buenas-practicas.mdx',
    mdx(
      { title: 'Buenas prácticas', sidebar_label: 'Buenas prácticas', tags: ['estudiantes'] },
      `
# Buenas prácticas

## Para preguntar mejor

- Incluye contexto, objetivo, audiencia y formato esperado.
- Pide criterios de calidad antes de pedir una respuesta final.
- Solicita límites, supuestos y dudas.
- Itera el prompt cuando detectes errores.

## Para verificar

- Revisa fechas, autores, datos numéricos y conceptos.
- Contrasta con fuentes primarias o materiales del curso.
- No aceptes citas que no puedas encontrar.
- Señala qué corregiste y por qué.

## Para construir portafolio

- Guarda productos finales y versiones intermedias.
- Documenta herramientas y aprendizajes.
- Convierte cada módulo en una evidencia: ficha, auditoría, notebook, CV, README o proyecto.
`
    ),
  ],
  [
    'docs/03-guia-del-estudiante/privacidad-y-seguridad.mdx',
    mdx(
      { title: 'Privacidad y seguridad', sidebar_label: 'Privacidad y seguridad', tags: ['privacidad'] },
      `
# Privacidad y seguridad

## Regla principal

No introduzcas datos personales, sensibles o confidenciales en herramientas de consumo no aprobadas. Si tienes duda, usa datos ficticios, anonimizados o pregunta al docente.

## Semáforo de datos

| Color | Datos | Acción |
|---|---|---|
| Verde | Datos públicos, ficticios o de práctica | Uso permitido con cita de fuente |
| Amarillo | Datos de clase, encuestas anónimas o materiales con licencia | Requiere revisión docente |
| Rojo | Salud, identidad, calificaciones, documentos personales, biometría | No usar en herramientas no aprobadas |

## Voz, imagen e identidad

La clonación, imitación o generación de voz o imagen de terceros requiere consentimiento explícito y revisión previa. Si no hay consentimiento, no se usa.
`
    ),
  ],
  [
    'docs/04-syllabus-modular/estructura-general.mdx',
    mdx(
      { title: 'Estructura general', sidebar_label: 'Estructura general', tags: ['syllabus'] },
      `
import TeacherDashboard from '@site/src/components/teacher-tools/TeacherDashboard';
import SyllabusPlanner from '@site/src/components/teacher-tools/SyllabusPlanner';
import { ProgramTimeOverview } from '@site/src/components/program/TimeBudget';

# Estructura general del syllabus

La ruta recomendada es semestral: 54 horas en 12 semanas, con una sesión en vivo semanal de máximo 90 minutos y el resto del tiempo como trabajo autónomo, prácticas, verificaciones, participación, revisión por pares y proyecto final.

<ProgramTimeOverview />

<TeacherDashboard />

## Planificador

<SyllabusPlanner />

## Distribución modular

| Módulo | Horas | Semana sugerida | Evidencia central |
|---|---:|---|---|
${modules.map((m) => `| [${m.shortTitle}](/docs/04-syllabus-modular/${m.slug}) | ${m.hours} | ${m.week} | ${m.deliverables[0]} |`).join('\n')}

## Evaluación de referencia

| Componente | Peso |
|---|---:|
| Prácticas modulares | 30% |
| Verificaciones y bitácora | 20% |
| Participación y revisión por pares | 20% |
| Proyecto final | 30% |
`
    ),
  ],
  ...modules.map((module, index) => [`docs/04-syllabus-modular/${module.slug}.mdx`, moduleDoc(module, index)]),
  [
    'docs/05-evaluacion/estrategia-de-evaluacion.mdx',
    mdx(
      { title: 'Estrategia de evaluación', sidebar_label: 'Estrategia', tags: ['evaluacion'] },
      `
import AssessmentMap from '@site/src/components/teacher-tools/AssessmentMap';

# Estrategia de evaluación

La evaluación mide resultado y proceso. No basta con una salida correcta: el estudiante debe conservar evidencia, verificar y defender decisiones.

## Reparto sugerido

| Componente | Peso |
|---|---:|
| Prácticas modulares | 30% |
| Verificaciones y bitácora | 20% |
| Participación y revisión por pares | 20% |
| Proyecto final | 30% |

## Mapa interactivo

<AssessmentMap />

## Principios de corrección

- Evaluar trazabilidad, verificación y decisión humana.
- Usar defensa oral breve cuando el proceso no sea claro.
- No aceptar fuentes inventadas.
- Diferenciar error formativo de falta académica deliberada.
`
    ),
  ],
  [
    'docs/05-evaluacion/rubricas.mdx',
    mdx(
      { title: 'Rúbricas', sidebar_label: 'Rúbricas', tags: ['rubricas'] },
      `
import RubricBuilder from '@site/src/components/teacher-tools/RubricBuilder';

# Rúbricas

La rúbrica analítica del proyecto final se usa para producto, proceso, ética, comunicación y reflexión. La herramienta permite visualizar y exportar una versión imprimible o Markdown.

<RubricBuilder />

## Rúbrica estática

| Criterio | Excelente | Competente | En desarrollo | Insuficiente |
|---|---|---|---|---|
${rubricCriteria
  .map((r) => `| ${r.criterion} | ${r.excellent} | ${r.competent} | ${r.developing} | ${r.insufficient} |`)
  .join('\n')}
`
    ),
  ],
  [
    'docs/05-evaluacion/instrumentos.mdx',
    mdx(
      { title: 'Instrumentos', sidebar_label: 'Instrumentos', tags: ['evaluacion', 'plantillas'] },
      `
import PromptLogTemplateViewer from '@site/src/components/teacher-tools/PromptLogTemplateViewer';

# Instrumentos de evaluación

## Checklist de verificación

\`\`\`text
[ ] La tarea estaba claramente definida.
[ ] La respuesta cita o remite a evidencia verificable.
[ ] Se contrastaron afirmaciones sustantivas con al menos 2 fuentes.
[ ] Se revisaron fechas, autores, conceptos y datos numéricos.
[ ] Se eliminaron generalizaciones, sesgos o afirmaciones especulativas.
[ ] No contiene datos personales o sensibles no autorizados.
[ ] La versión final indica qué parte fue asistida por IA.
[ ] La persona responsable puede defender el resultado.
\`\`\`

## Bitácora de prompts

<PromptLogTemplateViewer />

## Plantillas descargables

- [Bitácora de prompts](/templates/bitacora-prompts.md)
- [Rúbrica de proyecto final](/templates/rubrica-proyecto-final.md)
- [Plan de proyecto final](/templates/plan-proyecto-final.md)
- [Registro de incidente](/templates/registro-incidente.md)
`
    ),
  ],
  [
    'docs/05-evaluacion/pretest-postest.mdx',
    mdx(
      { title: 'Pretest y postest', sidebar_label: 'Pretest/postest', tags: ['evaluacion'] },
      `
# Pretest y postest

Use el mismo banco de ítems al inicio y al cierre para medir progreso en conceptos, verificación, privacidad y comunicación.

| Ítem | Competencia | Tipo |
|---|---|---|
| Explicar diferencia entre resumir, verificar y citar con IA | Conceptual | Respuesta corta |
| Detectar una alucinación en una respuesta convincente | Pensamiento crítico | Caso breve |
| Identificar si un dato puede subirse a una cuenta de consumo | Privacidad | Escenario |
| Reescribir un prompt vago en uno verificable | Técnico | Desempeño |
| Elegir estrategia para estudiar una lectura con IA | Académico | Opción múltiple |
| Detectar práctica de integridad improcedente | Ética | Opción múltiple |
| Identificar licencia o restricción de un dataset | Datos | Opción múltiple |
| Explicar cómo declarar el uso de IA | Comunicación | Respuesta corta |

## Meta orientativa

Los informes fuente sugieren una mejora de 25 a 35% como referencia de impacto. La meta institucional final es ${notSpecified}.
`
    ),
  ],
  [
    'docs/05-evaluacion/evidencias-y-microcredencial.mdx',
    mdx(
      { title: 'Evidencias y microcredencial', sidebar_label: 'Microcredencial', tags: ['microcredencial'] },
      `
# Evidencias y microcredencial

## Criterios de aprobación

| Requisito | Umbral |
|---|---|
| Asistencia o participación equivalente | 80% |
| Entregas modulares obligatorias | 100% |
| Cumplimiento de privacidad e integridad | Obligatorio |
| Puntuación global | 70/100 |
| Proyecto final | Mínimo “Competente” en 4 de 7 criterios |
| Reflexión final y defensa | Obligatorias |
| Postest | Completado |

## Evidencias requeridas

| Evidencia | Formato |
|---|---|
| Diagnóstico inicial y final | Formulario LMS |
| Bitácora de prompts | Documento compartido |
| Dos auditorías de salidas de IA | Plantilla |
| Artefacto académico | Ensayo, ficha o presentación |
| Artefacto técnico o de datos | Notebook, script o dashboard |
| Artefacto profesional | CV, README, portafolio o pitch |
| Proyecto final | Producto, defensa y reflexión |
`
    ),
  ],
  [
    'docs/06-implementacion/onboarding-docente.mdx',
    mdx(
      { title: 'Onboarding docente', sidebar_label: 'Onboarding docente', tags: ['implementacion'] },
      `
# Onboarding docente

| Fase | Horas | Contenido | Evidencia |
|---|---:|---|---|
| Marco y política | 2 | UNESCO, AI Act, RGPD y política del curso | Quiz de comprensión |
| Sandbox técnico | 3 | LMS, repositorios, notebooks y herramientas | Entorno de prueba funcional |
| Calibración evaluativa | 2 | Rúbricas, bitácora, defensa oral y detección de opacidad | Corrección calibrada |
| Accesibilidad y DUA | 2 | Alternativas equivalentes, subtítulos, baja conectividad | Plan de adaptación |
| Incidencias | 1 | Privacidad, integridad, voz/imagen y escalado | Simulación breve |

## Resultado esperado

Cada docente debe poder ejecutar una sesión estándar, revisar una bitácora, aplicar la rúbrica y activar el protocolo de incidentes.
`
    ),
  ],
  [
    'docs/06-implementacion/metricas-de-tiempo-y-carga.mdx',
    mdx(
      { title: 'Métricas de tiempo y carga', sidebar_label: 'Métricas de tiempo', tags: ['implementacion', 'tiempo', 'docentes'] },
      `
import { ProgramTimeOverview } from '@site/src/components/program/TimeBudget';

# Métricas de tiempo y carga

Esta página consolida el tiempo requerido para ejecutar la ruta semestral de 54 horas bajo una restricción operativa estricta: máximo 12 semanas, máximo una sesión en vivo por semana y máximo 90 minutos por sesión. Los tiempos están contabilizados por estudiante, por sesiones en vivo, por asignaciones autónomas y por carga docente estimada para una cohorte de 30 participantes.

<ProgramTimeOverview />

## Supuestos de cálculo

| Dimensión | Supuesto operativo |
|---|---|
| Cohorte | 30 participantes |
| Ruta base | Semestral, 12 semanas, 54 horas de trabajo estudiantil |
| Modalidad | Híbrida con 12 sesiones en vivo como máximo y trabajo autónomo |
| Sesión en vivo | Máximo 90 minutos, una vez por semana |
| Tiempo en vivo total | 18 horas |
| Trabajo autónomo total | 36 horas |
| Carga docente | Estimada por cohorte, no por estudiante individual |
| Revisión docente | Incluye lectura de evidencias, retroalimentación breve y registro de cumplimiento |
| Tutoría adicional | No incluida cuando depende de necesidades individuales no especificadas |

## Uso recomendado

- Coordinación usa esta página para estimar calendario, disponibilidad docente y necesidad de TA.
- Docentes usan las páginas de cada módulo para ver tiempo por sesión, segmento, tarea y asignación.
- Tutores usan la carga de revisión para anticipar semanas críticas, especialmente módulos 03, 05 y 07.

:::warning Dato institucional pendiente
Los tiempos se calculan desde la arquitectura curricular disponible. Costos laborales, número final de docentes, política de horas remuneradas y tamaño real de cohorte están marcados como "${notSpecified}" hasta validación local.
:::
`
    ),
  ],
  [
    'docs/06-implementacion/implementacion-tecnica.mdx',
    mdx(
      { title: 'Implementación técnica', sidebar_label: 'Implementación técnica', tags: ['tecnica'] },
      `
# Implementación técnica

## Pasos

| Paso | Acción | Resultado | Control de riesgo |
|---|---|---|---|
| LMS | Elegir Moodle, Classroom/Workspace o Microsoft 365 Educación | Curso y grupos creados | Preferir dominio institucional |
| Cuentas | Confirmar correo institucional, SSO y grupos | Alta automatizada o manual | Evitar cuentas personales para menores |
| Materiales | Crear carpeta raíz, repositorio y plantillas | Estructura común | Permisos por cohorte |
| Herramientas IA | Aprobar catálogo de herramientas | Lista visible | Separar consumo e institucional |
| Datos | Definir anonimización y semáforo | Política visible | Minimización y finalidad |
| QA | Probar con 3 cuentas | Incidencias detectadas | Check técnico y pedagógico |

## Estructura de archivos del curso

\`\`\`text
curso-ia/
  00-politica-y-syllabus/
  01-bitacoras/
  02-entregas-modulares/
  03-datasets-y-notebooks/
  04-proyecto-final/
  05-rubricas-y-feedback/
  06-incidentes-y-soporte/
\`\`\`
`
    ),
  ],
  [
    'docs/06-implementacion/gestion-de-licencias.mdx',
    mdx(
      { title: 'Gestión de licencias', sidebar_label: 'Licencias', tags: ['licencias'] },
      `
import LicenseRotationPlanner from '@site/src/components/teacher-tools/LicenseRotationPlanner';

# Gestión de licencias

La estrategia recomendada es usar capa gratuita o institucional por defecto y reservar licencias premium para necesidades concretas de proyecto.

<LicenseRotationPlanner />

## Regla operativa

Las licencias se asignan por proyecto y ventana temporal, no por prestigio ni desempeño. Cada asignación dura 2 a 3 semanas, se documenta y se revisa en hitos.

| Tipo | Cantidad sugerida | Regla |
|---|---:|---|
${licenseTypes.map((l) => `| ${l.type} | ${l.quantity} | ${l.rule} |`).join('\n')}
`
    ),
  ],
  [
    'docs/06-implementacion/cronograma-operativo.mdx',
    mdx(
      { title: 'Cronograma operativo', sidebar_label: 'Cronograma operativo', tags: ['cronograma'] },
      `
# Cronograma operativo

| Semana | Acción académica | Acción técnica | Acción de soporte |
|---|---|---|---|
| Previa | Cargar materiales, syllabus y rúbricas | Crear curso, grupos y repositorios | Verificar accesos |
| 1 | Inducción y pretest | Abrir formularios y bitácoras | Canal de dudas |
| 2 | Fundamentos de IA | Validar herramientas | FAQ inicial |
| 3 | Prompting | Revisar plantillas | Monitoreo de dificultades |
| 4 | Verificación y auditoría | Ajustar permisos | Seguimiento a rezago |
| 5 | Lectura y estudio | Cargar materiales disciplinares | Soporte de accesibilidad |
| 6 | Escritura | Revisión de entregas | Tutorías de recuperación |
| 7 | Datos y hojas de cálculo | Activar notebooks | Mesa técnica |
| 8 | Código y automatización | Asignar licencias si aplica | TA en laboratorio |
| 9 | Presentaciones y colaboración | Revisar almacenamiento | Control de archivos |
| 10 | Carrera y portafolio | QA de portafolios | Mentorías |
| 11 | Ensayo de proyecto | Congelar rúbricas finales | Revisión de incidencias |
| 12 | Presentaciones y postest | Exportar evidencias | Cierre y archivo |
`
    ),
  ],
  [
    'docs/06-implementacion/presupuesto-y-escenarios.mdx',
    mdx(
      { title: 'Presupuesto y escenarios', sidebar_label: 'Presupuesto', tags: ['presupuesto'] },
      `
import BudgetScenarioViewer from '@site/src/components/teacher-tools/BudgetScenarioViewer';

# Presupuesto y escenarios

Los costos humanos son estimaciones de diseño porque país, salarios y contratación están ${notSpecified}. El software debe confirmarse por región antes de compra.

<BudgetScenarioViewer />

## Escenario base

| Partida | Costo estimado |
|---|---:|
| LMS y colaboración | 0 USD si existe capa institucional; Moodle sin licencia con hosting aparte |
| VS Code, Kaggle, Colab free, Hugging Face free | 0 USD |
| LLMs gratuitos para comparación | 0 USD |
| Hosting Moodle | 150 a 500 USD por edición |
| RR. HH. | 4.100 a 10.200 USD según mercado local |
`
    ),
  ],
  [
    'docs/06-implementacion/desarrollo-local-y-despliegue.mdx',
    mdx(
      { title: 'Desarrollo local y despliegue', sidebar_label: 'Desarrollo local', tags: ['tecnica', 'docusaurus'] },
      `
# Desarrollo local y despliegue

## Comandos

\`\`\`bash
npm install
npm run dev
npm run slides:dev
npm run build
npm run serve
\`\`\`

## Arquitectura técnica

| Carpeta | Uso |
|---|---|
| \`docs/\` | Documentación MDX del programa |
| \`src/components/\` | Herramientas React para docentes y coordinación |
| \`src/data/program.ts\` | Datos compartidos de módulos, rúbricas, proyectos y escenarios |
| \`src/data/timeMetrics.ts\` | Tiempos por módulo, sesión, asignación y carga docente |
| \`slides/\` | Decks Reveal.js fuente |
| \`static/templates/\` | Plantillas descargables |
| \`static/slides/\` | Salida generada por \`npm run slides:build\` |

## Despliegue

1. Ejecutar \`npm install\`.
2. Ejecutar \`npm run build\`.
3. Publicar la carpeta \`build/\` en el hosting elegido.

El proveedor de hosting institucional está ${notSpecified}.
`
    ),
  ],
  [
    'docs/06-implementacion/actualizar-contenido.mdx',
    mdx(
      { title: 'Cómo actualizar contenido', sidebar_label: 'Actualizar contenido', tags: ['mantenimiento'] },
      `
# Cómo actualizar contenido

## Cambiar una página

Edita el archivo MDX correspondiente en \`docs/\`. Mantén frontmatter, título y enlaces internos.

## Cambiar datos de módulos o herramientas

Edita \`src/data/program.ts\`. Las herramientas React usan ese archivo para mantener consistencia entre dashboard, planificador, rúbrica, mapa de evaluación y presupuesto.

## Cambiar métricas de tiempo

Edita \`src/data/timeMetrics.ts\`. Mantén cuadrado el total de cada módulo: sesiones en vivo más trabajo autónomo debe coincidir con la duración del módulo, cada sesión debe sumar sus segmentos y ninguna sesión puede superar 90 minutos ni romper la regla de una sesión por semana.

## Cambiar slides

Edita el \`index.html\` del deck en \`slides/\` y ejecuta:

\`\`\`bash
npm run slides:build
\`\`\`

## Añadir una nueva página

1. Crear el archivo \`.mdx\`.
2. Agregarlo a \`sidebars.ts\`.
3. Verificar enlaces con \`npm run build\`.

## Control editorial

- No inventar políticas institucionales.
- Marcar ausencias como "${notSpecified}".
- Conservar tono académico, claro y operativo.
`
    ),
  ],
  [
    'docs/07-inclusion-y-gobernanza/accesibilidad-y-dua.mdx',
    mdx(
      { title: 'Accesibilidad y DUA', sidebar_label: 'Accesibilidad y DUA', tags: ['accesibilidad'] },
      `
# Accesibilidad y Diseño Universal para el Aprendizaje

## Acciones base

- Materiales clave en texto descargable.
- Videos con subtítulos o transcripción.
- Alternativas equivalentes para audio, video, código y baja conectividad.
- Plantillas compatibles con lector de pantalla.
- Rúbricas claras antes de entregar.

## Aplicación por módulo

| Módulo | Ajuste recomendado |
|---|---|
${modules.map((m) => `| ${m.shortTitle} | ${m.accessibility[0]} |`).join('\n')}
`
    ),
  ],
  [
    'docs/07-inclusion-y-gobernanza/inclusion-y-equidad.mdx',
    mdx(
      { title: 'Inclusión y equidad', sidebar_label: 'Inclusión y equidad', tags: ['equidad'] },
      `
# Inclusión y equidad

| Dimensión | Acción replicable |
|---|---|
| Acceso económico | Stack base gratuito o institucional |
| Diferentes perfiles | Ruta sin código y ruta con código desde semana 7 |
| Baja conectividad | Paquetes semanales y equivalentes offline |
| Equidad en licencias | Pool rotativo con reglas transparentes |
| Participación | Equipos heterogéneos y roles rotativos |
| Evaluación | Defensa oral, revisión por pares y múltiples formatos |

## Regla de licencias

Las licencias premium no se asignan a “mejores estudiantes”. Se asignan por necesidad de proyecto, ventana temporal y trazabilidad.
`
    ),
  ],
  [
    'docs/07-inclusion-y-gobernanza/matriz-de-riesgos.mdx',
    mdx(
      { title: 'Matriz de riesgos', sidebar_label: 'Matriz de riesgos', tags: ['riesgos'] },
      `
import IncidentProtocolViewer from '@site/src/components/teacher-tools/IncidentProtocolViewer';

# Matriz de riesgos

<IncidentProtocolViewer />

## Matriz estática

| Riesgo | Probabilidad | Impacto | Señal de alerta | Mitigación |
|---|---|---:|---|---|
| Datos personales en cuentas de consumo | Media | Alta | Archivos con nombres, notas o identificadores | Semáforo de datos y anonimización |
| Fuentes inventadas | Alta | Alta | Referencias inexistentes | Checklist de verificación y defensa oral |
| Dependencia cognitiva | Alta | Media | Entregas perfectas sin explicación | Borradores, reflexión y corrección humana |
| Clonación de voz sin consentimiento | Baja | Muy alta | Audio semejante a voz real sin autorización | Consentimiento expreso y revisión previa |
| Sesgos o discriminación | Media | Alta | Lenguaje estereotipado | Revisión de sesgos y contrastes |
| Software no autorizado | Media | Media | Uso fuera del catálogo | Catálogo aprobado y revisión de cuentas |
`
    ),
  ],
  [
    'docs/07-inclusion-y-gobernanza/protocolo-de-incidentes.mdx',
    mdx(
      { title: 'Protocolo de incidentes', sidebar_label: 'Protocolo de incidentes', tags: ['incidentes'] },
      `
import IncidentProtocolViewer from '@site/src/components/teacher-tools/IncidentProtocolViewer';

# Protocolo de incidentes

<IncidentProtocolViewer />

## Protocolo base

\`\`\`text
1. Detectar y congelar la situación.
2. Clasificar: académico, privacidad, accesibilidad, identidad/voz/imagen o técnico.
3. Registrar fecha, herramienta, personas implicadas y evidencia disponible.
4. Contener: retirar archivo, suspender uso, anonimizar, sustituir herramienta o bloquear acceso.
5. Escalar según tipo.
6. Resolver y documentar cambios preventivos.
7. Cerrar con aprendizaje institucional breve.
\`\`\`

[Descargar plantilla de registro](/templates/registro-incidente.md).
`
    ),
  ],
  [
    'docs/07-inclusion-y-gobernanza/privacidad-y-cumplimiento.mdx',
    mdx(
      { title: 'Privacidad y cumplimiento', sidebar_label: 'Privacidad y cumplimiento', tags: ['privacidad', 'cumplimiento'] },
      `
# Privacidad y cumplimiento

## Controles mínimos

| Control | Acción |
|---|---|
| Minimización | Usar solo los datos necesarios para la tarea |
| Finalidad | No reutilizar datos fuera del propósito educativo declarado |
| Seguridad | Preferir cuentas institucionales y permisos por cohorte |
| Transparencia | Informar uso de herramientas, riesgos y alternativas |
| Consentimiento | Requerido para voz, imagen, identidad o actividades no obligatorias con datos adicionales |
| Evaluación de impacto | Activar si se prevén datos sensibles, biométricos o decisiones de alto impacto |

La política institucional final, responsable de datos y ruta legal local están ${notSpecified}.
`
    ),
  ],
  [
    'docs/08-proyectos-y-actividades/actividades-por-modulo.mdx',
    mdx(
      { title: 'Actividades por módulo', sidebar_label: 'Actividades por módulo', tags: ['actividades'] },
      `
# Actividades por módulo

| Módulo | Actividad núcleo | Criterio de corrección |
|---|---|---|
| Fundamentos | Comparar dos respuestas de IA y verificar tres afirmaciones | Calidad del contraste y verificación |
| Prompting | Reescribir un prompt débil y documentar iteraciones | Claridad, reproducibilidad y mejora observable |
| Estudio y escritura | Ficha de lectura con IA y síntesis propia | Fidelidad al texto y voz propia |
| Datos | Minianálisis en notebook u hoja de cálculo | Reproducibilidad e interpretación |
| Comunicación | CV, README o pitch revisado | Pertinencia, honestidad y claridad |
| Multimodalidad | Pieza visual o audio responsable | Calidad, trazabilidad y ética |

## Uso

Cada actividad debe cerrar con evidencia: bitácora, producto parcial, verificación, reflexión o revisión por pares.
`
    ),
  ],
  [
    'docs/08-proyectos-y-actividades/proyectos-por-disciplina.mdx',
    mdx(
      { title: 'Proyectos por disciplina', sidebar_label: 'Proyectos por disciplina', tags: ['proyectos'] },
      `
import ProjectCatalog from '@site/src/components/teacher-tools/ProjectCatalog';

# Proyectos por disciplina

<ProjectCatalog />

## Tabla base

| Disciplina | Proyecto | Entregables | Qué vigilar |
|---|---|---|---|
${projects.map((p) => `| ${p.discipline} | ${p.project} | ${p.deliverables} | ${p.watch} |`).join('\n')}
`
    ),
  ],
  [
    'docs/08-proyectos-y-actividades/plantillas.mdx',
    mdx(
      { title: 'Plantillas', sidebar_label: 'Plantillas', tags: ['plantillas'] },
      `
# Plantillas

- [Bitácora de prompts](/templates/bitacora-prompts.md)
- [Checklist de verificación](/templates/checklist-verificacion.md)
- [Plan de proyecto final](/templates/plan-proyecto-final.md)
- [Rúbrica de proyecto final](/templates/rubrica-proyecto-final.md)
- [Feedback docente](/templates/feedback-docente.md)
- [Consentimiento informado](/templates/consentimiento-informado.md)
- [Registro de incidente](/templates/registro-incidente.md)

## Recomendación de uso

Publicar las plantillas en el LMS antes de abrir cada módulo y mantener una copia editable por estudiante o equipo.
`
    ),
  ],
  [
    'docs/08-proyectos-y-actividades/ejemplos-de-entregables.mdx',
    mdx(
      { title: 'Ejemplos de entregables', sidebar_label: 'Ejemplos de entregables', tags: ['entregables'] },
      `
# Ejemplos de entregables

| Entregable | Debe incluir |
|---|---|
| Ficha de lectura | Pregunta, síntesis propia, apoyo de IA, verificación y fuente |
| Auditoría de salida de IA | Prompt, respuesta, afirmaciones verificadas, errores y corrección |
| Notebook o script | Datos, pasos, visualización, limitaciones y README |
| CV o portafolio | Evidencias reales, lenguaje honesto y declaración de apoyo de IA |
| Proyecto final | Producto, bitácora, matriz de riesgos, reflexión y defensa |

## Señal de calidad

Un buen entregable permite reconstruir el proceso. Una entrega que solo muestra el resultado final es insuficiente para este programa.
`
    ),
  ],
  [
    'docs/09-recursos/herramientas-gratuitas-y-de-paga.mdx',
    mdx(
      { title: 'Herramientas gratuitas y de paga', sidebar_label: 'Herramientas', tags: ['herramientas'] },
      `
# Herramientas gratuitas y de paga

## Capa base recomendada

- LMS institucional o Moodle.
- Google Workspace for Education o Microsoft 365 Educación cuando exista elegibilidad.
- VS Code, GitHub, Colab, Kaggle y Hugging Face.
- Dos LLMs en capa gratuita para comparación crítica.

## Pago selectivo

| Necesidad | Tipo de licencia |
|---|---|
| Investigación avanzada | Perplexity Education Pro, Le Chat Pro o equivalente |
| Código | Copilot Pro o licencia institucional equivalente |
| Cómputo | Colab Pro o recursos institucionales |
| Creatividad visual | Firefly u otra herramienta aprobada |
| Audio | ElevenLabs u otra herramienta con consentimiento explícito |

:::warning Confirmar precios
Los precios cambian por región y fecha. Antes de compra, coordinación debe confirmar condiciones oficiales y restricciones de edad o privacidad.
:::
`
    ),
  ],
  [
    'docs/09-recursos/comparativa-de-plataformas.mdx',
    mdx(
      { title: 'Comparativa de plataformas', sidebar_label: 'Comparativa', tags: ['herramientas'] },
      `
# Comparativa de plataformas

| Herramienta | Uso ideal | Capa gratuita | Riesgo o límite |
|---|---|---|---|
| ChatGPT | Tutoría, escritura, análisis y documentos | Sí | Revisar controles de datos y menores |
| Claude | Lectura larga y razonamiento | Sí | Plan educativo o privacidad según cuenta |
| Gemini / NotebookLM | Estudio con fuentes y ecosistema Google | Sí en contextos educativos elegibles | Restricciones en cuentas personales |
| Le Chat | Alternativa europea, research y proyectos | Sí | Menos estandarización educativa |
| Perplexity | Búsqueda con citas | Sí | Mejor para verificación que para producción larga |
| VS Code | Editor y notebooks | Sí | Requiere configuración |
| Colab / Kaggle | Notebooks y datasets | Sí | Recursos variables, no datos sensibles |
| Firefly | Producción visual | Sí o prueba | Créditos y derechos deben revisarse |
| ElevenLabs | Audio y narración | Sí | Voz exige consentimiento estricto |
`
    ),
  ],
  [
    'docs/09-recursos/bibliografia-y-fuentes.mdx',
    mdx(
      { title: 'Bibliografía y fuentes', sidebar_label: 'Bibliografía', tags: ['fuentes'] },
      `
# Bibliografía y fuentes

Este portal se deriva de los informes locales:

- \`deep-research-report.md\`
- \`deep-research-report (2).md\`

## Marcos citados por los informes

- UNESCO: competencias de IA para estudiantes y docentes.
- DigComp 2.2 y DigCompEdu.
- NIST AI Risk Management Framework.
- Reglamento de IA de la Unión Europea, especialmente artículo 4.
- RGPD para privacidad, minimización y evaluación de impacto.
- CAST DUA 3.0.
- Documentación oficial de herramientas educativas y de IA mencionadas.

## Nota editorial

Los marcadores de citación originales de los informes fuente se conservaron como referencia de investigación, pero este portal presenta contenido operativo para implementación. Cuando se actualicen precios, políticas o restricciones, debe consultarse documentación oficial vigente.
`
    ),
  ],
  [
    'docs/09-recursos/descargas.mdx',
    mdx(
      { title: 'Descargas', sidebar_label: 'Descargas', tags: ['descargas'] },
      `
# Descargas

## Plantillas

- [Bitácora de prompts](/templates/bitacora-prompts.md)
- [Checklist de verificación](/templates/checklist-verificacion.md)
- [Plan de proyecto final](/templates/plan-proyecto-final.md)
- [Rúbrica de proyecto final](/templates/rubrica-proyecto-final.md)
- [Feedback docente](/templates/feedback-docente.md)
- [Consentimiento informado](/templates/consentimiento-informado.md)
- [Registro de incidente](/templates/registro-incidente.md)

## Slides

Los decks se construyen desde \`slides/\` y se publican en \`/slides/\` al ejecutar \`npm run slides:build\`.
`
    ),
  ],
  [
    'docs/09-recursos/decks-y-diapositivas.mdx',
    mdx(
      { title: 'Decks y diapositivas', sidebar_label: 'Decks Reveal.js', tags: ['slides'] },
      `
# Decks y diapositivas

Los decks están diseñados para entrega docente, capacitación y aula. Para desarrollo local:

\`\`\`bash
npm run slides:dev
\`\`\`

Para publicar dentro del sitio:

\`\`\`bash
npm run slides:build
npm run build
\`\`\`

## Índice de decks

| Deck | Uso | Enlace |
|---|---|---|
| Bienvenida y vista general | Presentación inicial del programa | [Abrir](/slides/bienvenida/) |
| Capacitación docente | Onboarding de docentes y tutores | [Abrir](/slides/capacitacion-docente/) |
${modules.map((m) => `| ${m.title} | Aula y facilitación del módulo | [Abrir](${m.slidePath}) |`).join('\n')}
| Cierre y certificación | Proyecto final, defensa y microcredencial | [Abrir](/slides/cierre-y-certificacion/) |
`
    ),
  ],
];

for (const [file, content] of docs) write(file, content);

const categories = [
  ['docs/00-introduccion/_category_.json', { label: '00. Introducción', position: 1 }],
  ['docs/01-marco-del-programa/_category_.json', { label: '01. Marco del programa', position: 2 }],
  ['docs/02-manual-docente/_category_.json', { label: '02. Manual docente', position: 3 }],
  ['docs/03-guia-del-estudiante/_category_.json', { label: '03. Guía del estudiante', position: 4 }],
  ['docs/04-syllabus-modular/_category_.json', { label: '04. Syllabus modular', position: 5 }],
  ['docs/05-evaluacion/_category_.json', { label: '05. Evaluación', position: 6 }],
  ['docs/06-implementacion/_category_.json', { label: '06. Implementación', position: 7 }],
  ['docs/07-inclusion-y-gobernanza/_category_.json', { label: '07. Inclusión y gobernanza', position: 8 }],
  ['docs/08-proyectos-y-actividades/_category_.json', { label: '08. Proyectos y actividades', position: 9 }],
  ['docs/09-recursos/_category_.json', { label: '09. Recursos', position: 10 }],
];
for (const [file, content] of categories) write(file, json(content));

write(
  'package.json',
  json({
    name: 'portal-ia-universitaria',
    version: '0.1.0',
    private: true,
    description: 'Portal Docusaurus para implementar una microcredencial de alfabetización y uso aplicado de IA.',
    scripts: {
      dev: 'npm run slides:build && docusaurus start --host 0.0.0.0',
      start: 'npm run dev',
      build: 'npm run slides:build && docusaurus build',
      serve: 'docusaurus serve --host 0.0.0.0',
      'slides:dev': 'vite --config vite.slides.config.ts --host 0.0.0.0',
      'slides:build': 'vite build --config vite.slides.config.ts',
      typecheck: 'tsc --noEmit',
      lint: 'npm run typecheck',
    },
    dependencies: {
      '@docusaurus/core': '^3.6.3',
      '@docusaurus/preset-classic': '^3.6.3',
      '@docusaurus/theme-mermaid': '^3.6.3',
      '@mdx-js/react': '^3.0.1',
      clsx: '^2.1.1',
      'prism-react-renderer': '^2.4.1',
      react: '^18.3.1',
      'react-dom': '^18.3.1',
      'reveal.js': '^5.1.0',
      vite: '^5.4.11',
    },
    devDependencies: {
      '@docusaurus/module-type-aliases': '^3.6.3',
      '@docusaurus/tsconfig': '^3.6.3',
      typescript: '^5.6.3',
    },
    overrides: {
      webpack: '5.95.0',
    },
    browserslist: {
      production: ['>0.5%', 'not dead', 'not op_mini all'],
      development: ['last 3 chrome version', 'last 3 firefox version', 'last 5 safari version'],
    },
  })
);

write(
  'docusaurus.config.ts',
  `
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
  title: 'Programa IA Universitaria',
  tagline: 'Portal de implementación para alfabetización y uso aplicado de IA',
  favicon: 'img/favicon.svg',
  url: 'https://example.edu',
  baseUrl: '/',
  organizationName: 'programa-ia',
  projectName: 'portal-ia-universitaria',
  onBrokenLinks: 'ignore',
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'ignore',
    },
  },
  themes: ['@docusaurus/theme-mermaid'],
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
          numberPrefixParser: false,
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],
  themeConfig: {
    image: 'img/program-card.svg',
    navbar: {
      title: 'Programa IA',
      logo: {
        alt: 'Programa IA',
        src: 'img/favicon.svg',
      },
      items: [
        { type: 'docSidebar', sidebarId: 'programSidebar', position: 'left', label: 'Documentación' },
        { to: '/docs/04-syllabus-modular/estructura-general', label: 'Syllabus', position: 'left' },
        { to: '/docs/05-evaluacion/rubricas', label: 'Evaluación', position: 'left' },
        { to: '/docs/09-recursos/decks-y-diapositivas', label: 'Slides', position: 'left' },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Programa',
          items: [
            { label: 'Vista general', to: '/docs/00-introduccion/vista-general-del-programa' },
            { label: 'Manual docente', to: '/docs/02-manual-docente/manual-docente-general' },
            { label: 'Guía del estudiante', to: '/docs/03-guia-del-estudiante/guia-estudiante' },
          ],
        },
        {
          title: 'Operación',
          items: [
            { label: 'Implementación', to: '/docs/06-implementacion/implementacion-tecnica' },
            { label: 'Gobernanza', to: '/docs/07-inclusion-y-gobernanza/matriz-de-riesgos' },
            { label: 'Descargas', to: '/docs/09-recursos/descargas' },
          ],
        },
      ],
      copyright: 'Portal académico de implementación. Adaptar políticas locales antes de publicación institucional.',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
`
);

write(
  'sidebars.ts',
  `
import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  programSidebar: [
    {
      type: 'category',
      label: '00. Introducción',
      items: [
        '00-introduccion/bienvenida',
        '00-introduccion/como-usar-este-portal',
        '00-introduccion/vista-general-del-programa',
      ],
    },
    {
      type: 'category',
      label: '01. Marco del programa',
      items: [
        '01-marco-del-programa/resumen-ejecutivo',
        '01-marco-del-programa/fundamentos-pedagogicos',
        '01-marco-del-programa/marcos-internacionales',
        '01-marco-del-programa/competencias-y-resultados',
        '01-marco-del-programa/perfil-de-participantes',
      ],
    },
    {
      type: 'category',
      label: '02. Manual docente',
      items: [
        '02-manual-docente/manual-docente-general',
        '02-manual-docente/guia-operativa-por-sesion',
        '02-manual-docente/gestion-del-aula-hibrida',
        '02-manual-docente/lineamientos-de-uso-de-ia',
        '02-manual-docente/checklist-docente',
      ],
    },
    {
      type: 'category',
      label: '03. Guía del estudiante',
      items: [
        '03-guia-del-estudiante/guia-estudiante',
        '03-guia-del-estudiante/normas-de-trabajo',
        '03-guia-del-estudiante/como-documentar-el-uso-de-ia',
        '03-guia-del-estudiante/buenas-practicas',
        '03-guia-del-estudiante/privacidad-y-seguridad',
      ],
    },
    {
      type: 'category',
      label: '04. Syllabus modular',
      items: [
        '04-syllabus-modular/estructura-general',
        ${modules.map((m) => `'04-syllabus-modular/${m.slug}'`).join(',\n        ')},
      ],
    },
    {
      type: 'category',
      label: '05. Evaluación',
      items: [
        '05-evaluacion/estrategia-de-evaluacion',
        '05-evaluacion/rubricas',
        '05-evaluacion/instrumentos',
        '05-evaluacion/pretest-postest',
        '05-evaluacion/evidencias-y-microcredencial',
      ],
    },
    {
      type: 'category',
      label: '06. Implementación',
      items: [
        '06-implementacion/onboarding-docente',
        '06-implementacion/metricas-de-tiempo-y-carga',
        '06-implementacion/implementacion-tecnica',
        '06-implementacion/gestion-de-licencias',
        '06-implementacion/cronograma-operativo',
        '06-implementacion/presupuesto-y-escenarios',
        '06-implementacion/desarrollo-local-y-despliegue',
        '06-implementacion/actualizar-contenido',
      ],
    },
    {
      type: 'category',
      label: '07. Inclusión y gobernanza',
      items: [
        '07-inclusion-y-gobernanza/accesibilidad-y-dua',
        '07-inclusion-y-gobernanza/inclusion-y-equidad',
        '07-inclusion-y-gobernanza/matriz-de-riesgos',
        '07-inclusion-y-gobernanza/protocolo-de-incidentes',
        '07-inclusion-y-gobernanza/privacidad-y-cumplimiento',
      ],
    },
    {
      type: 'category',
      label: '08. Proyectos y actividades',
      items: [
        '08-proyectos-y-actividades/actividades-por-modulo',
        '08-proyectos-y-actividades/proyectos-por-disciplina',
        '08-proyectos-y-actividades/plantillas',
        '08-proyectos-y-actividades/ejemplos-de-entregables',
      ],
    },
    {
      type: 'category',
      label: '09. Recursos',
      items: [
        '09-recursos/herramientas-gratuitas-y-de-paga',
        '09-recursos/comparativa-de-plataformas',
        '09-recursos/bibliografia-y-fuentes',
        '09-recursos/descargas',
        '09-recursos/decks-y-diapositivas',
      ],
    },
  ],
};

export default sidebars;
`
);

write(
  'tsconfig.json',
  json({
    extends: '@docusaurus/tsconfig',
    compilerOptions: {
      baseUrl: '.',
      jsx: 'react-jsx',
      strict: true,
      noEmit: true,
    },
    include: ['src', 'docusaurus.config.ts', 'sidebars.ts', 'vite.slides.config.ts'],
  })
);

write(
  'vite.slides.config.ts',
  `
import { defineConfig } from 'vite';
import path from 'node:path';

const decks = [
  'index',
  'bienvenida',
  'capacitacion-docente',
  ${modules.map((m) => `'${m.id}'`).join(',\n  ')},
  'cierre-y-certificacion',
];

const input = Object.fromEntries(
  decks.map((deck) => [
    deck === 'index' ? 'index' : \`\${deck}/index\`,
    path.resolve(__dirname, deck === 'index' ? 'slides/index.html' : \`slides/\${deck}/index.html\`),
  ]),
);

export default defineConfig({
  root: 'slides',
  base: '/slides/',
  build: {
    outDir: '../static/slides',
    emptyOutDir: true,
    rollupOptions: { input },
  },
});
`
);

write(
  'src/data/program.ts',
  `
export type ProgramModule = {
  id: string;
  slug: string;
  shortTitle: string;
  title: string;
  hours: number;
  week: string;
  slidePath: string;
  description: string;
  objectives: string[];
  competencies: string[];
  outcomes: string[];
  materials: string[];
  freeTools: string[];
  paidTools: string[];
  syncPlan: [string, string][];
  asyncActivities: string[];
  facilitationNotes: string[];
  difficulties: string[];
  formative: string[];
  summative: string[];
  deliverables: string[];
  accessibility: string[];
  ethics: string[];
};

export type RubricCriterion = {
  criterion: string;
  excellent: string;
  competent: string;
  developing: string;
  insufficient: string;
};

export const notSpecified = ${JSON.stringify(notSpecified)};
export const modules: ProgramModule[] = ${json(modules)};
export const rubricCriteria: RubricCriterion[] = ${json(rubricCriteria)};
export const projects = ${json(projects)};
export const checklistGroups = ${json(checklistGroups)};
export const incidents = ${json(incidents)};
export const licenseTypes = ${json(licenseTypes)};
export const budgetScenarios = ${json(budgetScenarios)};
export const modalityPlans = ${json(modalityPlans)};

export const assessmentRows = modules.map((module) => ({
  moduleId: module.id,
  module: module.shortTitle,
  objective: module.objectives[0],
  competencies: module.competencies.join(', '),
  activity: module.asyncActivities[0],
  evidence: module.deliverables.join(', '),
  rubric: module.id === 'modulo-07' ? 'Rúbrica analítica final' : 'Lista de cotejo y rúbrica parcial',
}));
`
);

write(
  'src/components/teacher-tools/TeacherTools.module.css',
  `
.tool {
  border: 1px solid var(--ifm-color-emphasis-200);
  border-radius: 8px;
  padding: 1rem;
  margin: 1.25rem 0;
  background: var(--ifm-background-surface-color);
  box-shadow: 0 8px 24px rgba(31, 45, 61, 0.08);
}

.toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  align-items: center;
  margin: 0.75rem 0 1rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 0.85rem;
}

.card {
  border: 1px solid var(--ifm-color-emphasis-200);
  border-radius: 8px;
  padding: 0.9rem;
  background: #ffffff;
}

[data-theme='dark'] .card {
  background: #20272c;
}

.card h3,
.card h4 {
  margin-top: 0;
}

.meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin: 0.5rem 0;
}

.pill {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  background: #e9f7f4;
  color: #0b5d53;
  font-size: 0.78rem;
  font-weight: 700;
  padding: 0.2rem 0.55rem;
}

.accent {
  background: #fff3d7;
  color: #785600;
}

.danger {
  background: #ffe9e2;
  color: #8a2d12;
}

.button {
  border: 1px solid #12756a;
  border-radius: 8px;
  background: #12756a;
  color: #ffffff;
  cursor: pointer;
  font-weight: 700;
  padding: 0.55rem 0.8rem;
}

.buttonSecondary {
  border: 1px solid #12756a;
  border-radius: 8px;
  background: transparent;
  color: #12756a;
  cursor: pointer;
  font-weight: 700;
  padding: 0.55rem 0.8rem;
}

.button:focus,
.buttonSecondary:focus,
.input:focus,
.select:focus,
.textarea:focus {
  outline: 3px solid #f2c94c;
  outline-offset: 2px;
}

.select,
.input,
.textarea {
  border: 1px solid var(--ifm-color-emphasis-300);
  border-radius: 8px;
  padding: 0.5rem;
  width: 100%;
}

.textarea {
  min-height: 96px;
  resize: vertical;
}

.tableWrap {
  overflow-x: auto;
}

.progress {
  height: 10px;
  width: 100%;
  background: var(--ifm-color-emphasis-200);
  border-radius: 999px;
  overflow: hidden;
  margin: 0.75rem 0;
}

.progressBar {
  height: 100%;
  background: linear-gradient(90deg, #12756a, #d9633f);
}

.checkItem {
  display: flex;
  gap: 0.55rem;
  align-items: flex-start;
  margin: 0.45rem 0;
}

.printArea {
  border: 1px dashed var(--ifm-color-emphasis-300);
  border-radius: 8px;
  padding: 1rem;
  background: #fffaf0;
}

[data-theme='dark'] .printArea {
  background: #2a2921;
}
`
);

write(
  'src/components/teacher-tools/TeacherDashboard.tsx',
  `
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
                {budget ? <span className={styles.pill + ' ' + styles.accent}>{formatMinutes(budget.liveMinutes)} en vivo</span> : null}
                {budget ? <span className={styles.pill}>{formatMinutes(budget.asyncMinutes)} autónomo</span> : null}
                {budget ? <span className={styles.pill + ' ' + styles.danger}>{formatMinutes(teacherMinutes)} docente</span> : null}
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
`
);

write(
  'src/components/teacher-tools/SyllabusPlanner.tsx',
  `
import { useMemo, useState } from 'react';
import { modalityPlans, modules } from '@site/src/data/program';
import { formatMinutes, timeBudgets } from '@site/src/data/timeMetrics';
import styles from './TeacherTools.module.css';

function roundMinutes(minutes: number) {
  return Math.round(minutes / 5) * 5;
}

export default function SyllabusPlanner() {
  const [modeId, setModeId] = useState(modalityPlans[0].id);
  const plan = modalityPlans.find((item) => item.id === modeId) ?? modalityPlans[0];
  const rows = useMemo(
    () =>
      modules.map((module, index) => {
        const budget = timeBudgets.find((item) => item.moduleId === module.id);
        const plannedHours = Math.max(2, Math.round(module.hours * plan.multiplier * 10) / 10);
        const planScale = plannedHours / module.hours;
        const teacherBaseMinutes = budget?.teacherTasks.reduce((sum, task) => sum + task.minutes, 0) ?? 0;

        return {
          ...module,
          plannedHours,
          sequence: index + 1,
          plannedLiveMinutes: budget ? roundMinutes(budget.liveMinutes * planScale) : 0,
          plannedAsyncMinutes: budget ? roundMinutes(budget.asyncMinutes * planScale) : 0,
          plannedTeacherMinutes: roundMinutes(teacherBaseMinutes * planScale),
        };
      }),
    [plan],
  );

  return (
    <section className={styles.tool} aria-labelledby="syllabus-planner-title">
      <h2 id="syllabus-planner-title">Planificador de syllabus</h2>
      <label>
        Modalidad
        <select className={styles.select} value={modeId} onChange={(event) => setModeId(event.target.value)}>
          {modalityPlans.map((item) => (
            <option key={item.id} value={item.id}>
              {item.label}
            </option>
          ))}
        </select>
      </label>
      <div className={styles.meta}>
        <span className={styles.pill}>{plan.duration}</span>
        <span className={styles.pill + ' ' + styles.accent}>{plan.rhythm}</span>
      </div>
      <p>{plan.bestFor}</p>
      <div className={styles.tableWrap}>
        <table>
          <thead>
            <tr>
              <th>Secuencia</th>
              <th>Módulo</th>
              <th>Horas planificadas</th>
              <th>En vivo</th>
              <th>Estudiante autónomo</th>
              <th>Carga docente</th>
              <th>Evidencia</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td>{row.sequence}</td>
                <td>{row.shortTitle}</td>
                <td>{row.plannedHours}</td>
                <td>{formatMinutes(row.plannedLiveMinutes)}</td>
                <td>{formatMinutes(row.plannedAsyncMinutes)}</td>
                <td>{formatMinutes(row.plannedTeacherMinutes)}</td>
                <td>{row.deliverables[0]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
`
);

write(
  'src/components/teacher-tools/RubricBuilder.tsx',
  `
import { useMemo, useState } from 'react';
import { rubricCriteria } from '@site/src/data/program';
import styles from './TeacherTools.module.css';

type Criterion = (typeof rubricCriteria)[number];

function toMarkdown(criteria: Criterion[]) {
  const header = '| Criterio | Excelente | Competente | En desarrollo | Insuficiente |\\n|---|---|---|---|---|';
  const rows = criteria
    .map((item) => '| ' + item.criterion + ' | ' + item.excellent + ' | ' + item.competent + ' | ' + item.developing + ' | ' + item.insufficient + ' |')
    .join('\\n');
  return header + '\\n' + rows;
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
`
);

write(
  'src/components/teacher-tools/AssessmentMap.tsx',
  `
import { useMemo, useState } from 'react';
import { assessmentRows, modules } from '@site/src/data/program';
import styles from './TeacherTools.module.css';

export default function AssessmentMap() {
  const [moduleId, setModuleId] = useState('todos');
  const rows = useMemo(
    () => (moduleId === 'todos' ? assessmentRows : assessmentRows.filter((row) => row.moduleId === moduleId)),
    [moduleId],
  );

  return (
    <section className={styles.tool} aria-labelledby="assessment-map-title">
      <h2 id="assessment-map-title">Mapa de evaluación</h2>
      <label>
        Filtrar por módulo
        <select className={styles.select} value={moduleId} onChange={(event) => setModuleId(event.target.value)}>
          <option value="todos">Todos los módulos</option>
          {modules.map((module) => (
            <option key={module.id} value={module.id}>
              {module.shortTitle}
            </option>
          ))}
        </select>
      </label>
      <div className={styles.tableWrap}>
        <table>
          <thead>
            <tr>
              <th>Módulo</th>
              <th>Objetivo</th>
              <th>Competencias</th>
              <th>Actividad</th>
              <th>Evidencia</th>
              <th>Rúbrica</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.moduleId}>
                <td>{row.module}</td>
                <td>{row.objective}</td>
                <td>{row.competencies}</td>
                <td>{row.activity}</td>
                <td>{row.evidence}</td>
                <td>{row.rubric}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
`
);

write(
  'src/components/teacher-tools/LicenseRotationPlanner.tsx',
  `
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
`
);

write(
  'src/components/teacher-tools/ImplementationChecklist.tsx',
  `
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
`
);

write(
  'src/components/teacher-tools/IncidentProtocolViewer.tsx',
  `
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
`
);

write(
  'src/components/teacher-tools/PromptLogTemplateViewer.tsx',
  `
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
  ].join('\\n'),
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
  ].join('\\n'),
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
`
);

write(
  'src/components/teacher-tools/ProjectCatalog.tsx',
  `
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
`
);

write(
  'src/components/teacher-tools/BudgetScenarioViewer.tsx',
  `
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
`
);

write(
  'src/pages/index.tsx',
  `
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
`
);

write(
  'src/pages/index.module.css',
  `
.hero {
  min-height: 64vh;
  display: flex;
  align-items: center;
  background:
    linear-gradient(90deg, rgba(12, 91, 82, 0.92), rgba(217, 99, 63, 0.62)),
    url('/img/program-card.svg');
  background-size: cover;
  background-position: center;
  color: #ffffff;
}

.heroInner {
  width: min(1120px, calc(100% - 2rem));
  margin: 0 auto;
  padding: 4rem 0;
}

.eyebrow {
  font-weight: 800;
  letter-spacing: 0;
  text-transform: uppercase;
  color: #f2c94c;
}

.hero h1 {
  font-size: clamp(2.8rem, 7vw, 5.2rem);
  line-height: 0.96;
  margin: 0 0 1rem;
}

.lede {
  max-width: 760px;
  font-size: 1.25rem;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.5rem;
}

.stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: #d7e5e0;
}

.stats div {
  background: #ffffff;
  padding: 1.2rem;
  text-align: center;
}

.stats strong {
  display: block;
  color: #0c5b52;
  font-size: 2rem;
}

.stats span {
  color: #3b3f42;
}

.band {
  width: min(1120px, calc(100% - 2rem));
  margin: 0 auto;
  padding: 3rem 0;
}

.sectionHeader {
  max-width: 720px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
}

.card {
  border: 1px solid #d7e5e0;
  border-radius: 8px;
  color: inherit;
  padding: 1rem;
  text-decoration: none;
  transition: border-color 160ms ease, transform 160ms ease;
}

.card:hover {
  border-color: #d9633f;
  transform: translateY(-2px);
  text-decoration: none;
}

.card h3 {
  margin-top: 0;
  color: #0c5b52;
}

@media (max-width: 720px) {
  .stats {
    grid-template-columns: repeat(2, 1fr);
  }
}
`
);

write(
  'src/css/custom.css',
  `
:root {
  --ifm-color-primary: #12756a;
  --ifm-color-primary-dark: #0f6a60;
  --ifm-color-primary-darker: #0d5d55;
  --ifm-color-primary-darkest: #0a4d46;
  --ifm-color-primary-light: #18877a;
  --ifm-color-primary-lighter: #239789;
  --ifm-color-primary-lightest: #43b2a6;
  --ifm-font-family-base: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --ifm-heading-font-weight: 800;
  --ifm-link-color: #0f6a60;
  --ifm-code-font-size: 95%;
}

html[data-theme='dark'] {
  --ifm-color-primary: #43b2a6;
  --ifm-background-color: #171b1f;
  --ifm-background-surface-color: #20272c;
}

.theme-doc-markdown table {
  display: table;
  width: 100%;
}

.theme-doc-markdown th {
  background: #edf7f4;
}

[data-theme='dark'] .theme-doc-markdown th {
  background: #263330;
}

.button--primary {
  --ifm-button-background-color: #12756a;
  --ifm-button-border-color: #12756a;
}

.button--secondary {
  --ifm-button-background-color: #ffffff;
  --ifm-button-border-color: #ffffff;
  --ifm-button-color: #0c5b52;
}

@media print {
  .navbar,
  .theme-doc-toc-desktop,
  .pagination-nav,
  footer {
    display: none !important;
  }
}
`
);

write(
  'static/img/favicon.svg',
  `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Programa IA">
  <rect width="64" height="64" rx="12" fill="#12756a"/>
  <path d="M17 41V17h9c7 0 12 5 12 12s-5 12-12 12h-9zm7-6h2c3.6 0 5.8-2.4 5.8-6S29.6 23 26 23h-2v12z" fill="#fff"/>
  <path d="M43 17h7v24h-7z" fill="#f2c94c"/>
</svg>
`
);

write(
  'static/img/program-card.svg',
  `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 800" role="img" aria-label="Mapa visual del programa de IA">
  <rect width="1400" height="800" fill="#f7fbfa"/>
  <path d="M0 560 C220 480 370 620 560 540 C780 448 970 520 1400 350 L1400 800 L0 800 Z" fill="#d7e5e0"/>
  <g opacity="0.95">
    <rect x="130" y="135" width="320" height="210" rx="8" fill="#ffffff" stroke="#12756a" stroke-width="6"/>
    <rect x="170" y="180" width="240" height="18" rx="4" fill="#12756a"/>
    <rect x="170" y="225" width="180" height="18" rx="4" fill="#d9633f"/>
    <rect x="170" y="270" width="210" height="18" rx="4" fill="#f2c94c"/>
    <circle cx="540" cy="245" r="58" fill="#12756a"/>
    <path d="M508 246h64M540 214v64" stroke="#fff" stroke-width="12" stroke-linecap="round"/>
    <rect x="680" y="125" width="450" height="245" rx="8" fill="#ffffff" stroke="#d9633f" stroke-width="6"/>
    <path d="M740 310h330" stroke="#12756a" stroke-width="12" stroke-linecap="round"/>
    <path d="M740 260h260" stroke="#d9633f" stroke-width="12" stroke-linecap="round"/>
    <path d="M740 210h310" stroke="#f2c94c" stroke-width="12" stroke-linecap="round"/>
    <circle cx="320" cy="510" r="58" fill="#d9633f"/>
    <circle cx="505" cy="565" r="58" fill="#f2c94c"/>
    <circle cx="690" cy="510" r="58" fill="#12756a"/>
    <path d="M378 524c38 24 70 34 112 42M563 550c44-16 78-26 112-34" stroke="#3b3f42" stroke-width="8" stroke-linecap="round" fill="none"/>
  </g>
</svg>
`
);

const templateFiles = {
  'static/templates/bitacora-prompts.md': `# Bitácora de prompts

Proyecto o tarea:
Fecha:
Herramienta:
Versión o plan de la herramienta:
Objetivo del uso:

## Prompt inicial

## Resultado recibido

## Problemas detectados

## Prompt revisado

## Qué se aceptó del resultado

## Qué se corrigió o descartó

## Fuentes o evidencias usadas para verificar

## Riesgos éticos o de privacidad identificados

## Decisión final humana
`,
  'static/templates/checklist-verificacion.md': `# Checklist de verificación de salidas de IA

- [ ] La tarea estaba claramente definida.
- [ ] La respuesta cita o remite a evidencia verificable.
- [ ] Se contrastaron afirmaciones sustantivas con al menos 2 fuentes.
- [ ] Se revisaron fechas, autores, conceptos y datos numéricos.
- [ ] Se eliminaron generalizaciones, sesgos o afirmaciones especulativas.
- [ ] No contiene datos personales o sensibles no autorizados.
- [ ] La versión final indica qué parte fue asistida por IA.
- [ ] La persona responsable puede explicar y defender el resultado.
`,
  'static/templates/plan-proyecto-final.md': `# Plan de proyecto final

Título:
Disciplina:
Problema a resolver:
Usuario o audiencia:
Producto final:
Herramientas previstas:
Datos o materiales que se usarán:
Riesgos de privacidad:
Riesgos éticos:
Cómo se verificará la calidad:
Cronograma de hitos:
Evidencias para portafolio:
`,
  'static/templates/rubrica-proyecto-final.md': `# Rúbrica analítica del proyecto final

| Criterio | Excelente | Competente | En desarrollo | Insuficiente |
|---|---|---|---|---|
${rubricCriteria
  .map((r) => `| ${r.criterion} | ${r.excellent} | ${r.competent} | ${r.developing} | ${r.insufficient} |`)
  .join('\n')}
`,
  'static/templates/feedback-docente.md': `# Feedback docente breve

Fortaleza principal:
Riesgo principal:
Corrección prioritaria:
Siguiente acción observable:
Fecha de revisión:
`,
  'static/templates/consentimiento-informado.md': `# Consentimiento informado para actividades con IA

Yo, ________________________, entiendo que en este curso se utilizarán herramientas de inteligencia artificial con fines educativos.

He sido informado/a de que:

1. no debo introducir datos personales o sensibles de terceros en herramientas no aprobadas;
2. debo declarar el uso de IA cuando corresponda;
3. puedo solicitar alternativas por accesibilidad, privacidad o conectividad;
4. las actividades podrán requerir verificación humana, defensa oral y revisión del proceso.

Acepto participar bajo estas condiciones y entiendo que puedo retirar mi consentimiento para actividades no obligatorias que impliquen exposición de mi voz, imagen o datos personales adicionales.

Firma:
Fecha:
`,
  'static/templates/registro-incidente.md': `# Registro de incidente

Fecha:
Curso:
Tipo de incidente:
Herramienta implicada:
Descripción objetiva:
Datos o evidencias afectados:
Acción inmediata tomada:
Nivel de severidad:
A quién se escaló:
Resolución:
Medida preventiva futura:
`,
};

for (const [file, content] of Object.entries(templateFiles)) write(file, content);
write('static/downloads/README.md', '# Descargas\n\nUse `static/templates/` para plantillas editables y `static/slides/` para decks compilados.\n');

write(
  'README.md',
  `
# Programa IA Universitaria

Portal Docusaurus para implementar una microcredencial híbrida de alfabetización y uso aplicado de IA para jóvenes en transición a la universidad y primeros años universitarios.

## Qué incluye

- Documentación MDX completa para coordinación, docentes, estudiantes y soporte.
- Syllabus modular de 54 horas y 12 semanas.
- Herramientas React para planificación, rúbricas, evaluación, licencias, checklist, incidentes, bitácoras, proyectos y presupuesto.
- Decks Reveal.js para bienvenida, capacitación docente, módulos y cierre.
- Plantillas descargables para bitácoras, rúbricas, verificación, consentimiento e incidentes.

## Instalación

\`\`\`bash
npm install
npm run dev
\`\`\`

El sitio Docusaurus abre normalmente en \`http://localhost:3000\`.

## Slides

Para trabajar solo con decks Reveal.js:

\`\`\`bash
npm run slides:dev
\`\`\`

Para compilar decks dentro de \`static/slides/\` y publicarlos con el sitio:

\`\`\`bash
npm run slides:build
 npm run build
\`\`\`

## Scripts

| Script | Uso |
|---|---|
| \`npm run dev\` | Construye slides y levanta Docusaurus |
| \`npm run build\` | Construye slides y sitio de producción |
| \`npm run serve\` | Sirve la carpeta \`build/\` |
| \`npm run slides:dev\` | Levanta servidor Vite para decks |
| \`npm run slides:build\` | Compila decks Reveal.js en \`static/slides/\` |
| \`npm run lint\` | Ejecuta typecheck |

## Arquitectura

\`\`\`text
docs/                  Documentación MDX
src/components/        Herramientas React
src/data/program.ts    Datos compartidos del programa
slides/                Decks Reveal.js fuente
static/templates/      Plantillas descargables
static/slides/         Salida generada de slides
\`\`\`

## Mantenimiento editorial

- No inventar políticas institucionales ausentes.
- Marcar ausencias con "Not specified in source documentation".
- Actualizar precios, restricciones de edad y privacidad contra documentación oficial antes de compra o despliegue.
- Mantener la evaluación centrada en trazabilidad, verificación, autoría humana y protección de datos.
`
);

write(
  '.gitignore',
  `
node_modules/
.docusaurus/
build/
.DS_Store
npm-debug.log*
yarn-debug.log*
yarn-error.log*
`
);

function deckSection(title, items) {
  return `<section>
  <h2>${title}</h2>
  <ul>${items.map((item) => `<li>${item}</li>`).join('')}</ul>
</section>`;
}

function createDeck({ dir, title, subtitle, sections, notes }) {
  write(
    `slides/${dir}/index.html`,
    `
<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <link rel="stylesheet" href="../shared/theme.css" />
  </head>
  <body>
    <div class="reveal">
      <div class="slides">
        <section class="title-slide">
          <p class="eyebrow">Programa IA Universitaria</p>
          <h1>${title}</h1>
          <p>${subtitle}</p>
          <aside class="notes">${notes}</aside>
        </section>
        ${sections.join('\n')}
        <section>
          <h2>Cierre</h2>
          <p>Registrar evidencias, dudas abiertas y siguiente acción antes de salir de la sesión.</p>
          <aside class="notes">Cerrar con una tarea observable y recordar la política de trazabilidad.</aside>
        </section>
      </div>
    </div>
    <script type="module" src="../shared/reveal-init.js"></script>
  </body>
</html>
`
  );
}

write(
  'slides/shared/reveal-init.js',
  `
import Reveal from 'reveal.js';
import Notes from 'reveal.js/plugin/notes/notes.esm.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import 'reveal.js/dist/reveal.css';

Reveal.initialize({
  hash: true,
  slideNumber: true,
  controls: true,
  progress: true,
  center: true,
  width: 1280,
  height: 720,
  margin: 0.06,
  plugins: [Markdown, Notes],
});
`
);

write(
  'slides/shared/theme.css',
  `
:root {
  --r-background-color: #fbfcfa;
  --r-main-color: #263238;
  --r-heading-color: #0c5b52;
  --r-link-color: #12756a;
  --r-selection-background-color: #f2c94c;
  --r-main-font: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --r-heading-font: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --r-heading-letter-spacing: 0;
  --r-heading-text-transform: none;
}

.reveal {
  font-size: 34px;
}

.reveal h1,
.reveal h2,
.reveal h3 {
  font-weight: 800;
}

.reveal .title-slide {
  text-align: left;
}

.reveal .title-slide h1 {
  font-size: 2.5em;
  max-width: 980px;
}

.reveal .eyebrow {
  color: #d9633f;
  font-weight: 800;
  text-transform: uppercase;
}

.reveal section {
  text-align: left;
}

.reveal ul {
  line-height: 1.25;
}

.reveal table {
  font-size: 0.62em;
}

.reveal .callout {
  border-left: 10px solid #d9633f;
  background: #fff3d7;
  padding: 0.8em;
}
`
);

write(
  'slides/index.html',
  `
<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Decks del Programa IA</title>
    <link rel="stylesheet" href="shared/theme.css" />
  </head>
  <body>
    <main style="max-width: 980px; margin: 4rem auto; font-family: Inter, system-ui, sans-serif; padding: 0 1rem;">
      <h1>Decks Reveal.js del Programa IA</h1>
      <p>Índice de presentaciones para capacitación y aula.</p>
      <ul>
        <li><a href="/slides/bienvenida/">Bienvenida y vista general</a></li>
        <li><a href="/slides/capacitacion-docente/">Capacitación docente</a></li>
        ${modules.map((m) => `<li><a href="/slides/${m.id}/">${m.title}</a></li>`).join('\n        ')}
        <li><a href="/slides/cierre-y-certificacion/">Cierre y certificación</a></li>
      </ul>
    </main>
  </body>
</html>
`
);

createDeck({
  dir: 'bienvenida',
  title: 'Bienvenida y vista general',
  subtitle: 'Propósito, estructura, evidencias y reglas de uso responsable de IA.',
  notes: 'Presentar el programa como una experiencia práctica con reglas claras y portafolio.',
  sections: [
    deckSection('Propósito del programa', [
      'Usar IA para estudiar, investigar, escribir, analizar y comunicar con criterio.',
      'Aprender verificación antes que automatización.',
      'Construir evidencias para portafolio y microcredencial.',
    ]),
    deckSection('Estructura', ['54 h en 12 semanas.', 'Máximo 1 sesión en vivo por semana.', 'Cada sesión dura hasta 90 min.', '18 h en vivo y 36 h de trabajo autónomo.']),
    deckSection('Reglas de trabajo', ['Declarar uso de IA.', 'Conservar bitácora.', 'Verificar afirmaciones.', 'Proteger datos personales.']),
    deckSection('Actividad inicial', ['Completar diagnóstico.', 'Clasificar escenarios de uso.', 'Redactar una política personal de IA.']),
  ],
});

createDeck({
  dir: 'capacitacion-docente',
  title: 'Capacitación docente',
  subtitle: 'Política, evaluación, accesibilidad, herramientas y respuesta a incidentes.',
  notes: 'Usar este deck antes de abrir la cohorte. Enfatizar decisiones operativas y práctica de corrección.',
  sections: [
    deckSection('Resultados del onboarding', ['Ejecutar sesión estándar.', 'Aplicar rúbrica.', 'Revisar bitácora.', 'Activar protocolo de incidentes.']),
    deckSection('Evaluar trabajo con IA', ['Pedir proceso, no solo producto.', 'Verificar fuentes.', 'Usar defensa oral breve.', 'Registrar retroalimentación accionable.']),
    deckSection('Aula híbrida', ['Plantillas comunes.', 'Alternativas de baja conectividad.', 'Tutoría por hitos.', 'Canal de soporte visible.']),
    deckSection('Incidentes', incidents.map((incident) => `${incident.type}: ${incident.immediate}`)),
  ],
});

modules.forEach((module) => {
  createDeck({
    dir: module.id,
    title: module.title,
    subtitle: module.description,
    notes: `Abrir con el propósito del módulo y conectar con la evidencia esperada: ${module.deliverables.join(', ')}.`,
    sections: [
      deckSection('Propósito del módulo', [module.description]),
      deckSection('Objetivos de aprendizaje', module.objectives),
      deckSection('Competencias abordadas', module.competencies),
      deckSection('Conceptos clave', module.outcomes),
      deckSection('Flujo docente paso a paso', module.syncPlan.map(([time, action]) => `${time}: ${action}`)),
      deckSection('Actividad principal', module.asyncActivities),
      deckSection('Evidencia esperada', module.deliverables),
      deckSection('Ética, privacidad e integridad', module.ethics),
      deckSection('Reflexión de cierre', ['Qué delegaste a la IA.', 'Qué verificaste.', 'Qué decisión final tomaste tú.']),
    ],
  });
});

createDeck({
  dir: 'cierre-y-certificacion',
  title: 'Cierre, proyecto final y certificación',
  subtitle: 'Defensa final, portafolio, reflexión y criterios de microcredencial.',
  notes: 'Este deck se usa en la última sesión o feria de proyectos.',
  sections: [
    deckSection('Entregables finales', ['Producto final.', 'Bitácora de prompts.', 'Tabla de verificación.', 'Reflexión metacognitiva.', 'Defensa oral.']),
    deckSection('Criterios de aprobación', ['70/100 global.', 'Proyecto mínimo competente en 4 de 7 criterios.', 'Privacidad e integridad obligatorias.', 'Postest completado.']),
    deckSection('Defensa oral breve', ['Qué problema resolviste.', 'Cómo usaste IA.', 'Qué verificaste.', 'Qué corregiste.', 'Qué harías distinto.']),
    deckSection('Cierre de portafolio', ['Selecciona mejores evidencias.', 'Añade contexto y declaración de uso.', 'Prepara una versión compartible.']),
  ],
});

console.log('Proyecto Docusaurus generado.');
