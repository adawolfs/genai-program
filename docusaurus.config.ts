import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
  title: 'Programa IA Universitaria',
  tagline: 'Portal de implementación para alfabetización y uso aplicado de IA',
  favicon: 'img/favicon.svg',
  url: 'https://adawolfs.github.io',
  baseUrl: '/genai-program/',
  organizationName: 'adawolfs',
  projectName: 'genai-program',
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
