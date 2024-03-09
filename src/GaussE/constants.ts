export const explanation =
  "Esta ecuación establece que el flujo eléctrico a través de una superficie cerrada es proporcional a la carga eléctrica encerrada en el interior de esa superficie. En otras palabras, la cantidad de líneas de campo eléctrico que atraviesan una superficie cerrada es directamente proporcional a la carga eléctrica total dentro de esa superficie.";

export const diffLaTex = String.raw`Esta ecuación establece que la divergencia del campo eléctrico (\( \nabla \cdot \mathbf{E} \)) en cualquier punto del espacio es igual a la densidad de carga eléctrica en ese punto dividida por la permitividad eléctrica del vacío (\( \frac{\rho}{\varepsilon_0} \)).`;

export const inteLaTex = String.raw`Esta ecuación establece que el flujo eléctrico a través de una superficie cerrada (\( \oint_{S} \mathbf{E} \cdot d\mathbf{A} \)) es igual a la carga eléctrica encerrada dentro de esa superficie (\( \frac{Q_{\text{int}}}{\varepsilon_0} \)) dividida por la permitividad eléctrica del vacío.`;

export const myDiffLaTex = String.raw`Las líneas de campo E convergen en cargas negativas y divergen en cargas positivas`;

export const myInteLaTex = String.raw`El flujo E que emerge de un volumen atravesando una superficie S es igual a la carga dividida por e_0`;

export default {
  explanation,
  diffLaTex,
  inteLaTex,
  myDiffLaTex,
  myInteLaTex,
};
