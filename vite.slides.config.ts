import { defineConfig } from 'vite';
import path from 'node:path';

const decks = [
  'index',
  'bienvenida',
  'capacitacion-docente',
  'modulo-01',
  'modulo-02',
  'modulo-03',
  'modulo-04',
  'modulo-05',
  'modulo-06',
  'modulo-07',
  'cierre-y-certificacion',
];

const input = Object.fromEntries(
  decks.map((deck) => [
    deck === 'index' ? 'index' : `${deck}/index`,
    path.resolve(__dirname, deck === 'index' ? 'slides/index.html' : `slides/${deck}/index.html`),
  ]),
);

export default defineConfig({
  root: 'slides',
  base: '/genai-program/slides/',
  build: {
    outDir: '../static/slides',
    emptyOutDir: true,
    rollupOptions: { input },
  },
});

