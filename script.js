const canTrig = CSS.supports('(top: calc(sin(1) * 1px))');
const HEADING = document.querySelector('h1');

const OPTIONS = {
  SPACING: 1,
  SIZE: 1,
  TEXT: 'Texto circular entreunosyceros.net • ' };


const onUpdate = () => {
  // Crear el texto para el círculo
  const text = OPTIONS.TEXT;
  // 1. Tomar el texto y dividirlo en spans...
  const chars = text.split('');
  HEADING.innerHTML = '';
  HEADING.style.setProperty('--char-count', chars.length);

  for (let c = 0; c < chars.length; c++) {
    HEADING.innerHTML += `<span aria-hidden="true" class="char" style="--char-index: ${c};">${chars[c]}</span>`;
  }
  HEADING.innerHTML += `<span class="sr-only">${OPTIONS.TEXT}</span>`;
  // Añadir estilos
  HEADING.style.setProperty('--font-size', OPTIONS.SIZE);
  HEADING.style.setProperty('--character-width', OPTIONS.SPACING);
  HEADING.style.setProperty(
  '--radius',
  canTrig ?
  'calc((var(--character-width) / sin(var(--inner-angle))) * -1ch' :
  `calc(
      (${OPTIONS.SPACING} / ${Math.sin(
  360 / HEADING.children.length / (180 / Math.PI))
  })
      * -1ch
    )`);

};

onUpdate();