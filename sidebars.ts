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
        '04-syllabus-modular/modulo-01-induccion',
        '04-syllabus-modular/modulo-02-fundamentos-ia',
        '04-syllabus-modular/modulo-03-prompting-y-verificacion',
        '04-syllabus-modular/modulo-04-estudio-y-escritura',
        '04-syllabus-modular/modulo-05-datos-codigo-y-automatizacion',
        '04-syllabus-modular/modulo-06-comunicacion-y-carrera',
        '04-syllabus-modular/modulo-07-multimodalidad-y-proyecto-final',
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
