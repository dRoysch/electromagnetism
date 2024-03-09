export const explanation =
  "Esta ecuación establece que un campo eléctrico variable en el tiempo induce un campo magnético. Es una versión modificada de la ley de Ampère, que incluye un término adicional que tiene en cuenta la variación temporal del campo eléctrico. Esta corrección de Maxwell es necesaria para mantener la consistencia entre las ecuaciones de Maxwell y la teoría de la relatividad.";

export const diffLaTex = String.raw`Esta ecuación establece que el rotacional del campo magnético (\( \nabla \times \mathbf{B} \)) en cualquier punto del espacio es igual a la densidad de corriente eléctrica (\( \mu_0 \mathbf{J} \)) más un término adicional que tiene en cuenta la variación temporal del campo eléctrico (\( \mu_0\varepsilon_0 \frac{\partial \mathbf{E}}{\partial t} \)).`;

export const inteLaTex = String.raw`Esta ecuación establece que la circulación del campo magnético a lo largo de una curva cerrada (\( \oint_{C} \mathbf{B} \cdot d\mathbf{l} \)) es igual a la corriente neta que atraviesa la superficie encerrada por esa curva (\( \mu_0 I_{\text{int}} \)) más un término adicional que tiene en cuenta la variación temporal del campo eléctrico (\( \mu_0\varepsilon_0 \frac{d}{dt} \int_{S} \mathbf{E} \cdot d\mathbf{A} \)).`;

export const myDiffLaTex = String.raw`Las líneas de campo se curvan en torno a corrientes eléctricas y a campos eléctricos cambiantes`;

export const myInteLaTex = String.raw`Un campo magnético B puede ser producido por una corriente o por un campo eléctrico variable`;

export default {
  explanation,
  diffLaTex,
  inteLaTex,
  myDiffLaTex,
  myInteLaTex,
};
