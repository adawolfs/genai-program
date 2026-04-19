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

export const notSpecified = "Not specified in source documentation";
export const modules: ProgramModule[] = [
  {
    "id": "modulo-01",
    "slug": "modulo-01-induccion",
    "shortTitle": "Inducción",
    "title": "Módulo 01. Inducción y política de uso",
    "hours": 4,
    "week": "Semana 1",
    "slidePath": "/slides/modulo-01/",
    "description": "Introduce el propósito de la microcredencial, la política de uso de IA, las reglas de privacidad, la trazabilidad obligatoria y el diagnóstico inicial.",
    "objectives": [
      "Reconocer qué usos de IA están permitidos, condicionados y prohibidos en el curso.",
      "Aplicar la política base de trazabilidad, verificación y protección de datos.",
      "Completar el diagnóstico inicial y firmar el acuerdo de uso responsable."
    ],
    "competencies": [
      "Ética y privacidad",
      "Comunicación responsable",
      "Pensamiento crítico inicial"
    ],
    "outcomes": [
      "Distingue escenarios aceptables y no aceptables de uso de IA.",
      "Explica por qué no se deben subir datos personales o sensibles a herramientas no aprobadas.",
      "Entrega una política personal de uso de IA alineada con la política del curso."
    ],
    "materials": [
      "Syllabus",
      "Política base de IA",
      "Consentimiento informado",
      "Pretest",
      "Checklist de privacidad"
    ],
    "freeTools": [
      "LMS institucional",
      "Formulario de diagnóstico",
      "Documento compartido para bitácora"
    ],
    "paidTools": [
      "No se requieren herramientas de pago para este módulo"
    ],
    "syncPlan": [
      [
        "90 min",
        "Semana 1: inducción, política de IA, privacidad, acuerdo y ticket de salida"
      ]
    ],
    "asyncActivities": [
      "Completar pretest y encuesta de acceso tecnológico.",
      "Leer la política base de uso de IA y marcar dudas.",
      "Redactar una política personal breve de uso responsable."
    ],
    "facilitationNotes": [
      "Evitar que la conversación se reduzca a prohibiciones. El tono debe ser práctico: se permite usar IA con evidencia y responsabilidad.",
      "Pedir ejemplos concretos de riesgos de privacidad cercanos a la vida estudiantil."
    ],
    "difficulties": [
      "Confundir uso asistido con delegar autoría.",
      "Creer que una herramienta gratuita es automáticamente apropiada para datos personales."
    ],
    "formative": [
      "Quiz de política de IA",
      "Discusión de escenarios",
      "Ticket de salida"
    ],
    "summative": [
      "Acuerdo de uso firmado",
      "Política personal de uso de IA"
    ],
    "deliverables": [
      "Pretest completado",
      "Acuerdo de uso",
      "Política personal"
    ],
    "accessibility": [
      "Ofrecer política en formato texto descargable y lectura guiada.",
      "Permitir respuesta oral o escrita en el ticket de salida."
    ],
    "ethics": [
      "No introducir datos personales de terceros en demostraciones.",
      "Usar ejemplos ficticios o anonimizados."
    ]
  },
  {
    "id": "modulo-02",
    "slug": "modulo-02-fundamentos-ia",
    "shortTitle": "Fundamentos",
    "title": "Módulo 02. Fundamentos de IA y límites",
    "hours": 6,
    "week": "Semana 2",
    "slidePath": "/slides/modulo-02/",
    "description": "Presenta capacidades, límites y riesgos de los sistemas de IA generativa, incluyendo contexto, memoria, sesgos, alucinaciones y seguridad.",
    "objectives": [
      "Diferenciar capacidades reales, límites y errores frecuentes de modelos generativos.",
      "Comparar respuestas de dos o más sistemas sin asumir que una salida convincente es correcta.",
      "Describir riesgos de sesgo, opacidad, dependencia y alucinación."
    ],
    "competencies": [
      "Alfabetización técnica",
      "Pensamiento crítico",
      "Gestión de riesgos"
    ],
    "outcomes": [
      "Explica con lenguaje accesible qué puede y qué no puede hacer una herramienta de IA generativa.",
      "Identifica señales de respuesta especulativa o no verificable.",
      "Produce un informe breve de comparación entre herramientas."
    ],
    "materials": [
      "Guía de comparación",
      "Plantilla de informe breve",
      "Checklist de errores frecuentes"
    ],
    "freeTools": [
      "Dos LLMs con capa gratuita",
      "LMS o documento compartido",
      "Buscador web y fuentes primarias"
    ],
    "paidTools": [
      "Opcional: licencia premium de razonamiento para demostración docente"
    ],
    "syncPlan": [
      [
        "90 min",
        "Semana 2: capacidades, límites, comparación inicial y verificación de afirmaciones"
      ]
    ],
    "asyncActivities": [
      "Comparar dos respuestas de IA sobre una pregunta académica.",
      "Verificar tres afirmaciones con fuentes externas.",
      "Redactar un informe corto de contraste."
    ],
    "facilitationNotes": [
      "Modelar incertidumbre docente: mostrar cuándo una respuesta parece útil pero requiere verificación.",
      "Usar preguntas de distintas disciplinas para no centrar todo en programación."
    ],
    "difficulties": [
      "Aceptar la primera respuesta por fluidez.",
      "No separar estilo de exactitud.",
      "No registrar versión o herramienta utilizada."
    ],
    "formative": [
      "Bitácora de pruebas",
      "Lista de errores detectados"
    ],
    "summative": [
      "Informe breve de comparación"
    ],
    "deliverables": [
      "Tabla de comparación",
      "Informe corto con fuentes"
    ],
    "accessibility": [
      "Ofrecer ejemplos textuales además de demostración en vivo.",
      "Permitir trabajar con lectura, audio transcrito o dataset simple."
    ],
    "ethics": [
      "No evaluar personas reales ni grupos protegidos con herramientas no auditadas.",
      "Discutir sesgo sin exponer casos personales."
    ]
  },
  {
    "id": "modulo-03",
    "slug": "modulo-03-prompting-y-verificacion",
    "shortTitle": "Prompting y verificación",
    "title": "Módulo 03. Prompting y verificación",
    "hours": 10,
    "week": "Semanas 3 y 4",
    "slidePath": "/slides/modulo-03/",
    "description": "Desarrolla solicitudes reproducibles, criterios de evaluación, verificación con fuentes y corrección humana de salidas de IA.",
    "objectives": [
      "Diseñar prompts con contexto, tarea, formato, criterios y límites.",
      "Auditar una salida de IA con fuentes, revisión humana y documentación del proceso.",
      "Rechazar o corregir resultados cuando la evidencia sea insuficiente."
    ],
    "competencies": [
      "Prompting reproducible",
      "Verificación",
      "Trazabilidad"
    ],
    "outcomes": [
      "Reescribe un prompt débil y demuestra mejora observable.",
      "Documenta un ciclo de prompt, resultado, problema, revisión y decisión final.",
      "Entrega una auditoría de salida de IA con evidencias."
    ],
    "materials": [
      "Bitácora de prompts",
      "Checklist de verificación",
      "Ejemplos de prompts débiles",
      "Rúbrica de auditoría"
    ],
    "freeTools": [
      "LLMs gratuitos para comparación",
      "Fuentes primarias abiertas",
      "Documento de bitácora"
    ],
    "paidTools": [
      "Opcional: Perplexity Education Pro, Le Chat Pro o plan premium similar para investigación avanzada"
    ],
    "syncPlan": [
      [
        "90 min",
        "Semana 3: anatomía de un prompt verificable y taller de reescritura"
      ],
      [
        "90 min",
        "Semana 4: verificación con fuentes, auditoría de salida y decisión humana"
      ]
    ],
    "asyncActivities": [
      "Completar una bitácora de prompts con dos iteraciones.",
      "Auditar una respuesta con al menos dos evidencias externas.",
      "Publicar una reflexión sobre qué decisión final fue humana."
    ],
    "facilitationNotes": [
      "Insistir en que pedir citas no garantiza que existan.",
      "Evaluar la trazabilidad del proceso, no solo la calidad de la respuesta final."
    ],
    "difficulties": [
      "Prompts demasiado amplios.",
      "Citas fabricadas.",
      "Mezclar fuentes no comparables.",
      "No explicar la decisión humana final."
    ],
    "formative": [
      "Lista de cotejo por pares",
      "Revisión de bitácora"
    ],
    "summative": [
      "Auditoría de una salida de IA"
    ],
    "deliverables": [
      "Prompt inicial y revisado",
      "Tabla de verificación",
      "Auditoría final"
    ],
    "accessibility": [
      "Permitir bitácora en formato tabla, audio transcrito o documento narrativo.",
      "Separar pasos para estudiantes con baja conectividad."
    ],
    "ethics": [
      "Verificar afirmaciones sobre personas, salud, finanzas o decisiones de alto impacto con extremo cuidado.",
      "No simular fuentes."
    ]
  },
  {
    "id": "modulo-04",
    "slug": "modulo-04-estudio-y-escritura",
    "shortTitle": "Estudio y escritura",
    "title": "Módulo 04. Estudio, lectura y escritura",
    "hours": 8,
    "week": "Semanas 5 y 6",
    "slidePath": "/slides/modulo-04/",
    "description": "Integra IA en lectura, toma de notas, estudio y escritura académica sin perder autoría, voz propia ni rigor de citación.",
    "objectives": [
      "Usar IA para preparar preguntas, mapas conceptuales y fichas de lectura verificables.",
      "Revisar borradores sin delegar autoría ni inventar referencias.",
      "Declarar el uso de IA en un ensayo o artefacto académico."
    ],
    "competencies": [
      "Comunicación académica",
      "Autoría humana",
      "Verificación de fuentes"
    ],
    "outcomes": [
      "Construye una ficha de lectura con soporte de IA y contraste con el texto original.",
      "Redacta un miniensayo con declaración de uso de IA.",
      "Distingue mejora de estilo, síntesis y generación no atribuida."
    ],
    "materials": [
      "Texto de lectura",
      "Plantilla de ficha",
      "Modelo de declaración de uso de IA",
      "Rúbrica de escritura"
    ],
    "freeTools": [
      "NotebookLM o herramienta equivalente cuando esté disponible institucionalmente",
      "Procesador de texto",
      "LMS"
    ],
    "paidTools": [
      "Opcional: ChatGPT Plus, Claude Pro o Gemini AI Pro si la institución los aprueba"
    ],
    "syncPlan": [
      [
        "90 min",
        "Semana 5: lectura asistida, ficha verificable y límites de autoría"
      ],
      [
        "90 min",
        "Semana 6: revisión de borrador, declaración de uso y revisión por pares"
      ]
    ],
    "asyncActivities": [
      "Preparar una ficha de lectura con preguntas y objeciones.",
      "Redactar un miniensayo o síntesis propia.",
      "Adjuntar declaración de uso de IA y evidencia de verificación."
    ],
    "facilitationNotes": [
      "Pedir que el estudiantado señale qué cambió después de leer directamente la fuente.",
      "Corregir de inmediato la confusión entre “mejorar estilo” y “reemplazar pensamiento”."
    ],
    "difficulties": [
      "Resúmenes genéricos.",
      "Citas imprecisas.",
      "Voz demasiado homogénea.",
      "Falta de conexión con la lectura original."
    ],
    "formative": [
      "Tutoría de borrador",
      "Revisión de ficha de lectura"
    ],
    "summative": [
      "Miniensayo trazable"
    ],
    "deliverables": [
      "Ficha de lectura",
      "Borrador revisado",
      "Miniensayo con declaración"
    ],
    "accessibility": [
      "Permitir lectura con audio, resumen docente o versión de lectura fácil cuando corresponda.",
      "Aceptar formatos equivalentes de ficha."
    ],
    "ethics": [
      "No cargar textos con restricciones de licencia cuando no esté permitido.",
      "No fabricar referencias ni citas."
    ]
  },
  {
    "id": "modulo-05",
    "slug": "modulo-05-datos-codigo-y-automatizacion",
    "shortTitle": "Datos y código",
    "title": "Módulo 05. Datos, código y automatización",
    "hours": 10,
    "week": "Semanas 7 y 8",
    "slidePath": "/slides/modulo-05/",
    "description": "Trabaja con CSV, hojas de cálculo, notebooks, scripts simples y asistentes de código para producir análisis reproducibles con licencias claras.",
    "objectives": [
      "Limpiar y analizar un dataset simple con herramientas accesibles.",
      "Usar IA para explicar, revisar o prototipar código sin dejar de probarlo.",
      "Documentar datos, licencias, pasos de análisis y límites."
    ],
    "competencies": [
      "Datos básicos",
      "Reproducibilidad",
      "Automatización responsable"
    ],
    "outcomes": [
      "Entrega un notebook, hoja de cálculo o script comentado.",
      "Explica qué parte del flujo fue asistida por IA y qué pruebas realizó.",
      "Identifica licencia y restricciones de un dataset."
    ],
    "materials": [
      "Dataset público",
      "Notebook base",
      "README de análisis",
      "Checklist de licencias"
    ],
    "freeTools": [
      "VS Code",
      "Google Colab",
      "Kaggle",
      "Hugging Face datasets",
      "GitHub"
    ],
    "paidTools": [
      "Opcional: Copilot Pro, Colab Pro o pool de cómputo premium por proyecto"
    ],
    "syncPlan": [
      [
        "90 min",
        "Semana 7: pregunta, dataset, licencia, carga y limpieza inicial"
      ],
      [
        "90 min",
        "Semana 8: análisis reproducible, pruebas, visualización y README"
      ]
    ],
    "asyncActivities": [
      "Completar notebook o hoja de cálculo con dos preguntas de análisis.",
      "Generar una visualización y explicar su límite.",
      "Documentar licencia, fuente y uso de IA."
    ],
    "facilitationNotes": [
      "Ofrecer ruta sin código en hoja de cálculo y ruta con código en notebook.",
      "Enfatizar que código generado debe ejecutarse, probarse y explicarse."
    ],
    "difficulties": [
      "Copiar código que no se entiende.",
      "No documentar origen del dataset.",
      "Sobreinterpretar visualizaciones.",
      "Errores por datos faltantes."
    ],
    "formative": [
      "Notebook comentado",
      "Revisión por pares de pasos reproducibles"
    ],
    "summative": [
      "Entrega reproducible con datos y licencia explicitados"
    ],
    "deliverables": [
      "Notebook, script o hoja",
      "README",
      "Visualización comentada"
    ],
    "accessibility": [
      "Ruta alternativa con hoja de cálculo.",
      "Dataset pequeño para baja conectividad.",
      "Instrucciones paso a paso descargables."
    ],
    "ethics": [
      "Usar datos públicos o anonimizados.",
      "No inferir atributos sensibles ni perfilar personas reales."
    ]
  },
  {
    "id": "modulo-06",
    "slug": "modulo-06-comunicacion-y-carrera",
    "shortTitle": "Comunicación y carrera",
    "title": "Módulo 06. Comunicación, colaboración y carrera",
    "hours": 8,
    "week": "Semanas 9 y 10",
    "slidePath": "/slides/modulo-06/",
    "description": "Aplica IA a presentaciones, documentación, colaboración, CV, entrevistas y portafolio profesional inicial.",
    "objectives": [
      "Crear materiales de comunicación académica y profesional con revisión humana.",
      "Construir un CV, README, presentación o pitch con honestidad y evidencia.",
      "Usar IA para ensayar entrevistas sin exagerar competencias."
    ],
    "competencies": [
      "Comunicación profesional",
      "Colaboración",
      "Portafolio"
    ],
    "outcomes": [
      "Entrega un artefacto profesional inicial revisado.",
      "Presenta un pitch breve y claro.",
      "Documenta proceso y límites de uso de IA en materiales de carrera."
    ],
    "materials": [
      "Plantilla de CV",
      "Plantilla de README",
      "Guía de pitch",
      "Rúbrica de comunicación"
    ],
    "freeTools": [
      "Google Docs o Microsoft Word web",
      "Slides o PowerPoint web",
      "GitHub o carpeta de portafolio"
    ],
    "paidTools": [
      "Opcional: licencia premium de escritura o diseño si está aprobada"
    ],
    "syncPlan": [
      [
        "90 min",
        "Semana 9: comunicación honesta, CV asistido y feedback por pares"
      ],
      [
        "90 min",
        "Semana 10: portafolio, README, pitch y preparación de entrevista"
      ]
    ],
    "asyncActivities": [
      "Crear o revisar CV, README o página de portafolio.",
      "Grabar o presentar un pitch breve.",
      "Declarar uso de IA y cambios humanos realizados."
    ],
    "facilitationNotes": [
      "Pedir evidencia para cada afirmación de competencia.",
      "Conectar materiales de carrera con entregables reales del curso."
    ],
    "difficulties": [
      "CV inflado.",
      "Presentaciones con demasiado texto.",
      "README sin instrucciones reproducibles.",
      "Pitch genérico."
    ],
    "formative": [
      "Feedback en vivo",
      "Revisión por pares del pitch"
    ],
    "summative": [
      "Portafolio profesional inicial"
    ],
    "deliverables": [
      "CV o perfil",
      "README o portafolio",
      "Pitch"
    ],
    "accessibility": [
      "Permitir pitch oral, escrito o grabado con subtítulos.",
      "Plantillas compatibles con lector de pantalla."
    ],
    "ethics": [
      "No inventar experiencia.",
      "No subir datos personales innecesarios a herramientas de consumo."
    ]
  },
  {
    "id": "modulo-07",
    "slug": "modulo-07-multimodalidad-y-proyecto-final",
    "shortTitle": "Multimodalidad y proyecto",
    "title": "Módulo 07. Multimodalidad y proyecto final",
    "hours": 8,
    "week": "Semanas 11 y 12",
    "slidePath": "/slides/modulo-07/",
    "description": "Cierra el programa con un proyecto aplicado por disciplina, evidencias de proceso, producción multimodal responsable y defensa final.",
    "objectives": [
      "Diseñar un proyecto útil, ético y presentable para una audiencia definida.",
      "Documentar trazabilidad, decisiones humanas, verificación y riesgos.",
      "Presentar y defender el proyecto final con reflexión metacognitiva."
    ],
    "competencies": [
      "Proyecto aplicado",
      "Ética multimodal",
      "Defensa oral",
      "Microcredencial"
    ],
    "outcomes": [
      "Entrega proyecto final con producto, bitácora, verificación y reflexión.",
      "Defiende decisiones técnicas, éticas y comunicativas.",
      "Cumple requisitos de microcredencial."
    ],
    "materials": [
      "Plan de proyecto final",
      "Rúbrica analítica",
      "Plantilla de reflexión",
      "Checklist de entrega"
    ],
    "freeTools": [
      "Herramientas gratuitas aprobadas",
      "Repositorio o carpeta de portafolio",
      "LMS"
    ],
    "paidTools": [
      "Opcional: Firefly, ElevenLabs, Colab Pro u otras licencias rotativas según proyecto y consentimiento"
    ],
    "syncPlan": [
      [
        "90 min",
        "Semana 11: sprint review, riesgos multimodales y consentimiento"
      ],
      [
        "90 min",
        "Semana 12: presentación final, defensa oral, postest y cierre de microcredencial"
      ]
    ],
    "asyncActivities": [
      "Finalizar producto y evidencias.",
      "Completar postest y reflexión final.",
      "Preparar defensa oral breve con declaración de uso de IA."
    ],
    "facilitationNotes": [
      "Evaluar producto y proceso con el mismo rigor.",
      "Revisar consentimiento antes de cualquier voz, imagen o identidad de terceros."
    ],
    "difficulties": [
      "Producto vistoso con poca verificación.",
      "Falta de reflexión humana.",
      "Uso multimodal sin derechos claros.",
      "Entrega sin evidencia intermedia."
    ],
    "formative": [
      "Sprint reviews",
      "Ensayo de defensa"
    ],
    "summative": [
      "Proyecto final",
      "Presentación",
      "Reflexión final",
      "Postest"
    ],
    "deliverables": [
      "Producto final",
      "Bitácora",
      "Tabla de verificación",
      "Defensa",
      "Reflexión"
    ],
    "accessibility": [
      "Aceptar formatos equivalentes de producto cuando cumplan resultados.",
      "Asegurar subtítulos, alternativa textual y contraste suficiente."
    ],
    "ethics": [
      "Consentimiento explícito para voz, imagen o identidad.",
      "Metadatos o transparencia cuando se produzcan piezas sintéticas."
    ]
  }
];
export const rubricCriteria: RubricCriterion[] = [
  {
    "criterion": "Problema y propósito",
    "excellent": "Delimitación clara, relevante y bien justificada.",
    "competent": "Claro con pequeños vacíos.",
    "developing": "Parcialmente claro.",
    "insufficient": "Confuso o mal definido."
  },
  {
    "criterion": "Uso de IA",
    "excellent": "Estratégico, documentado y reproducible.",
    "competent": "Adecuado y mayormente documentado.",
    "developing": "Uso parcial o poco claro.",
    "insufficient": "Uso opaco o improcedente."
  },
  {
    "criterion": "Verificación",
    "excellent": "Contraste robusto con fuentes fiables y revisión humana.",
    "competent": "Verificación suficiente.",
    "developing": "Verificación superficial.",
    "insufficient": "Sin verificación fiable."
  },
  {
    "criterion": "Rigor disciplinar",
    "excellent": "Conceptualmente sólido y pertinente.",
    "competent": "Correcto con errores menores.",
    "developing": "Incompleto o genérico.",
    "insufficient": "Débil o erróneo."
  },
  {
    "criterion": "Ética y privacidad",
    "excellent": "Riesgos identificados, mitigados y documentados.",
    "competent": "Riesgos reconocidos parcialmente.",
    "developing": "Escasa consideración ética.",
    "insufficient": "Ignora riesgos clave."
  },
  {
    "criterion": "Comunicación",
    "excellent": "Clara, convincente y bien estructurada.",
    "competent": "Clara con mejoras menores.",
    "developing": "Irregular o poco adaptada a la audiencia.",
    "insufficient": "Deficiente."
  },
  {
    "criterion": "Reflexión",
    "excellent": "Explica con precisión qué hizo la IA y qué decidió la persona.",
    "competent": "Reflexión aceptable.",
    "developing": "Reflexión breve.",
    "insufficient": "Sin reflexión útil."
  }
];
export const projects = [
  {
    "discipline": "Humanidades",
    "project": "Ensayo comparativo asistido por IA sobre una obra, autor o debate.",
    "deliverables": "Ensayo, tabla de contraste de fuentes y bitácora.",
    "watch": "Que la IA no sustituya la interpretación propia."
  },
  {
    "discipline": "Ciencias sociales",
    "project": "Análisis de un pequeño dataset o encuesta con memo ejecutivo.",
    "deliverables": "Notebook o tabla, visualización y memo.",
    "watch": "Relación entre datos, inferencia y límites."
  },
  {
    "discipline": "Empresa y economía",
    "project": "Brief de mercado con propuesta de valor y presentación.",
    "deliverables": "Dossier, presentación y declaración de uso.",
    "watch": "Evitar cifras inventadas y validar fuentes."
  },
  {
    "discipline": "Ingeniería / CS",
    "project": "Automatización simple, script o prototipo con README.",
    "deliverables": "Repositorio, demo, documentación y reflexión sobre seguridad.",
    "watch": "Comprensión real del código y pruebas básicas."
  },
  {
    "discipline": "Salud y ciencias de la vida",
    "project": "Material educativo no clínico verificado línea por línea.",
    "deliverables": "Folleto, tabla de evidencia y advertencias de uso.",
    "watch": "No dar consejo clínico no supervisado."
  },
  {
    "discipline": "Comunicación / diseño",
    "project": "Campaña multimodal con piezas visuales o audio.",
    "deliverables": "Kit creativo, metadatos o transparencia y justificación ética.",
    "watch": "Consentimiento, originalidad y atribución."
  }
];
export const checklistGroups = [
  {
    "group": "Pedagogía",
    "items": [
      "Syllabus publicado",
      "Política de IA explicada",
      "Actividades por módulo cargadas",
      "Defensas finales calendarizadas"
    ]
  },
  {
    "group": "Tecnología",
    "items": [
      "LMS creado",
      "Cuentas verificadas",
      "Repositorios o carpetas preparados",
      "Notebooks probados con cuentas estudiantiles"
    ]
  },
  {
    "group": "Privacidad",
    "items": [
      "Semáforo de datos visible",
      "Consentimientos listos",
      "Herramientas aprobadas catalogadas",
      "Formulario de incidentes activo"
    ]
  },
  {
    "group": "Accesibilidad",
    "items": [
      "Materiales descargables",
      "Subtítulos o transcripciones",
      "Alternativas de baja conectividad",
      "Plantillas compatibles con lector de pantalla"
    ]
  },
  {
    "group": "Evaluación",
    "items": [
      "Pretest y postest configurados",
      "Rúbricas cargadas",
      "Bitácora de prompts preparada",
      "Criterios de microcredencial comunicados"
    ]
  }
];
export const incidents = [
  {
    "type": "Integridad académica",
    "signal": "Entrega opaca, fuentes inventadas, texto incoherente con desempeño previo.",
    "immediate": "Pedir bitácora, versión intermedia y defensa oral breve.",
    "escalation": "Coordinación académica.",
    "prevention": "Rúbricas de proceso, defensa oral y revisión de fuentes."
  },
  {
    "type": "Privacidad",
    "signal": "Datos personales o sensibles subidos a una herramienta no aprobada.",
    "immediate": "Retirar material, documentar, anonimizar y cambiar herramienta.",
    "escalation": "Soporte técnico y responsable de datos.",
    "prevention": "Semáforo de datos, cuentas institucionales y minimización."
  },
  {
    "type": "Accesibilidad",
    "signal": "Barreras de formato, audio, lectura, navegación o conectividad.",
    "immediate": "Activar alternativa equivalente y ajustar plazo razonable.",
    "escalation": "Referente de inclusión.",
    "prevention": "Diseño Universal para el Aprendizaje desde el inicio."
  },
  {
    "type": "Identidad, voz o imagen",
    "signal": "Uso de voz, imagen o semejanza sin consentimiento explícito.",
    "immediate": "Pausar publicación o entrega, retirar el archivo y registrar evidencia.",
    "escalation": "Coordinación y autoridad institucional pertinente.",
    "prevention": "Consentimiento explícito, revisión previa y prohibición de imitación no autorizada."
  },
  {
    "type": "Técnico",
    "signal": "Herramienta no autorizada, fallo de acceso o exposición de permisos.",
    "immediate": "Suspender uso, ajustar permisos y ofrecer alternativa aprobada.",
    "escalation": "Soporte técnico.",
    "prevention": "Pruebas con cuentas de estudiante y catálogo aprobado."
  }
];
export const licenseTypes = [
  {
    "type": "Investigación premium",
    "quantity": 10,
    "defaultWindow": "Semanas 3-6",
    "rule": "Equipos con revisión documental o benchmark."
  },
  {
    "type": "Código premium",
    "quantity": 12,
    "defaultWindow": "Semanas 7-10",
    "rule": "Equipos con notebooks, scripts o automatización."
  },
  {
    "type": "Cómputo premium",
    "quantity": 10,
    "defaultWindow": "Semanas 7-11",
    "rule": "Solo por necesidad de proyecto y recursos."
  },
  {
    "type": "Creatividad visual",
    "quantity": 10,
    "defaultWindow": "Semanas 10-12",
    "rule": "Equipos de comunicación, diseño o difusión."
  },
  {
    "type": "Audio",
    "quantity": 5,
    "defaultWindow": "Semanas 11-12",
    "rule": "Uso puntual con consentimiento explícito."
  }
];
export const budgetScenarios = [
  {
    "name": "Base casi gratuito",
    "description": "Usa LMS institucional o Moodle, suites educativas gratuitas, VS Code, Colab/Kaggle y LLMs gratuitos para comparación.",
    "softwareLow": 0,
    "softwareHigh": 600,
    "humanLow": 4100,
    "humanHigh": 10200,
    "notes": "Hosting Moodle estimado entre 150 y 500 USD si no existe LMS institucional."
  },
  {
    "name": "Reforzado con licencias selectivas",
    "description": "Añade pool rotativo de investigación, código, cómputo, creatividad visual y audio.",
    "softwareLow": 2200,
    "softwareHigh": 4800,
    "humanLow": 4100,
    "humanHigh": 10200,
    "notes": "Firefly puede conservar componente en EUR. Precios regionales deben confirmarse antes de compra."
  }
];
export const modalityPlans = [
  {
    "id": "semestral",
    "label": "Semestral",
    "duration": "54 horas en 12 semanas",
    "rhythm": "1 sesión semanal de 90 min + trabajo autónomo",
    "multiplier": 1,
    "bestFor": "Ruta recomendada para universidades y programas puente."
  },
  {
    "id": "intensivo",
    "label": "Compacto 10 semanas",
    "duration": "45 a 46 horas en 10 semanas",
    "rhythm": "1 sesión semanal de hasta 90 min + mayor carga autónoma",
    "multiplier": 0.85,
    "bestFor": "Nivelación con calendario reducido sin romper el límite de sesiones."
  },
  {
    "id": "tutorizado",
    "label": "Autodidacta tutorizado",
    "duration": "45 a 54 horas en 12 semanas",
    "rhythm": "1 tutoría o sesión semanal de hasta 90 min",
    "multiplier": 0.9,
    "bestFor": "Escalabilidad, educación continua o sedes múltiples."
  }
];

export const assessmentRows = modules.map((module) => ({
  moduleId: module.id,
  module: module.shortTitle,
  objective: module.objectives[0],
  competencies: module.competencies.join(', '),
  activity: module.asyncActivities[0],
  evidence: module.deliverables.join(', '),
  rubric: module.id === 'modulo-07' ? 'Rúbrica analítica final' : 'Lista de cotejo y rúbrica parcial',
}));
