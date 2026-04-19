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

