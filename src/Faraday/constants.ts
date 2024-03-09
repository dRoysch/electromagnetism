export const explanation =
  "Esta ecuación establece que un campo magnético variable en el tiempo induce un campo eléctrico. En otras palabras, un cambio en el flujo magnético a través de una superficie cerrada induce una corriente eléctrica a lo largo de la frontera de esa superficie cerrada.";

export const diffLaTex = String.raw`Esta ecuación establece que el rotacional del campo eléctrico (\( \nabla \times \mathbf{E} \)) en cualquier punto del espacio es igual a la tasa de cambio temporal del campo magnético (\( -\frac{\partial \mathbf{B}}{\partial t} \)).`;

export const inteLaTex = String.raw`Esta ecuación establece que la circulación del campo eléctrico a lo largo de una curva cerrada (\( \oint_{C} \mathbf{E} \cdot d\mathbf{l} \)) es igual al cambio en el flujo magnético a través de la superficie encerrada por esa curva (\( -\frac{d}{dt} \int_{S} \mathbf{B} \cdot d\mathbf{A} \)).`;

export const myDiffLaTex = String.raw`Las líneas de campo E se curvan entorno a los camposs B cambiantes`;

export const myInteLaTex = String.raw`La fuerza electromotriz inducida alrededor de cualquier trayectoria cerrada es igual a la rapidez de cambio de flujo magnético que atraviesa la superficie`;

export default {
  explanation,
  diffLaTex,
  inteLaTex,
  myDiffLaTex,
  myInteLaTex,
};
