export const explanation =
  "Esta ecuación establece que el flujo magnético a través de una superficie cerrada es siempre cero. En otras palabras, no existen polos magnéticos aislados, por lo que el campo magnético siempre forma bucles cerrados, y no puede empezar ni terminar en un punto.";

export const diffLaTex = String.raw`Esta ecuación establece que la divergencia del campo magnético (\( \nabla \cdot \mathbf{B} \)) en cualquier punto del espacio es siempre cero.`;

export const inteLaTex = String.raw`Esta ecuación establece que el flujo magnético a través de una superficie cerrada (\( \oint_{S} \mathbf{B} \cdot d\mathbf{A} \)) es siempre cero.`;

export const myDiffLaTex = String.raw`Las líneas de B son cerradas`;

export const myInteLaTex = String.raw`El flujo de campo B que emerge de cualquier volumen es cero`;

export default {
  explanation,
  diffLaTex,
  inteLaTex,
  myDiffLaTex,
  myInteLaTex,
};
