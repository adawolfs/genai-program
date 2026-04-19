# Programa IA Universitaria

Portal Docusaurus para implementar una microcredencial híbrida de alfabetización y uso aplicado de IA para jóvenes en transición a la universidad y primeros años universitarios.

## Qué incluye

- Documentación MDX completa para coordinación, docentes, estudiantes y soporte.
- Syllabus modular de 54 horas y 12 semanas.
- Herramientas React para planificación, rúbricas, evaluación, licencias, checklist, incidentes, bitácoras, proyectos y presupuesto.
- Decks Reveal.js para bienvenida, capacitación docente, módulos y cierre.
- Plantillas descargables para bitácoras, rúbricas, verificación, consentimiento e incidentes.

## Instalación

```bash
npm install
npm run dev
```

El sitio Docusaurus abre normalmente en `http://localhost:3000`.

## Slides

Para trabajar solo con decks Reveal.js:

```bash
npm run slides:dev
```

Para compilar decks dentro de `static/slides/` y publicarlos con el sitio:

```bash
npm run slides:build
 npm run build
```

## Scripts

| Script | Uso |
|---|---|
| `npm run dev` | Construye slides y levanta Docusaurus |
| `npm run build` | Construye slides y sitio de producción |
| `npm run serve` | Sirve la carpeta `build/` |
| `npm run slides:dev` | Levanta servidor Vite para decks |
| `npm run slides:build` | Compila decks Reveal.js en `static/slides/` |
| `npm run lint` | Ejecuta typecheck |

## Arquitectura

```text
docs/                  Documentación MDX
src/components/        Herramientas React
src/data/program.ts    Datos compartidos del programa
slides/                Decks Reveal.js fuente
static/templates/      Plantillas descargables
static/slides/         Salida generada de slides
```

## Mantenimiento editorial

- No inventar políticas institucionales ausentes.
- Marcar ausencias con "Not specified in source documentation".
- Actualizar precios, restricciones de edad y privacidad contra documentación oficial antes de compra o despliegue.
- Mantener la evaluación centrada en trazabilidad, verificación, autoría humana y protección de datos.

