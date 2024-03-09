import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
type AmpereProps = {
  esh?: boolean;
  delta?: boolean;
  capEsh?: boolean;
  capDelta?: boolean;
};

function Ampere({ esh, delta, capEsh, capDelta }: AmpereProps) {
  const diff = String.raw`
  \[
  \nabla \times \mathbf{B} = \mu_0 \mathbf{J} + \mu_0\varepsilon_0 \frac{\partial \mathbf{E}}{\partial t}
  \]
  `;
  const inte = String.raw`
  \[
  \oint_{C} \mathbf{B} \cdot d\mathbf{l} = \mu_0 I_{\text{int}} + \mu_0\varepsilon_0 \frac{d}{dt} \int_{S} \mathbf{E} \cdot d\mathbf{A}
  \]
  `;
  const captionDiff = String.raw`
  Donde:\( \newline \)
  
  - \( \mathbf{E} \) es el campo eléctrico.\( \newline \)
  - \( \mathbf{B} \) es el campo magnético.\( \newline \)
  - \( \mathbf{J} \) es la densidad de corriente.\( \newline \)
  - \( \varepsilon_0 \) es la permitividad eléctrica del vacío.\( \newline \)
  - \( \mu_0 \) es la permeabilidad magnética del vacío.\( \newline \)
  `;

  const captionInte = String.raw`
  Donde:\( \newline \)
  
  - \( \mathbf{E} \) es el campo eléctrico.\( \newline \)
  - \( \mathbf{B} \) es el campo magnético.\( \newline \)
  - \( \varepsilon_0 \) es la permitividad eléctrica del vacío.\( \newline \)
  - \( \mu_0 \) es la permeabilidad magnética del vacío.\( \newline \)
  - \( I_{\text{int}} \) es la corriente neta que atraviesa una curva cerrada \( C \).\( \newline \)
  - \( d\mathbf{A} \) es un vector de área infinitesimal.\( \newline \)
  - \( d\mathbf{l} \) es un elemento de longitud de la curva \( C \).
  `;

  const str = String.raw`
  ${delta ? diff : ""} ${delta && capDelta ? captionDiff : ""}
  ${esh ? inte : ""} ${esh && capEsh ? captionInte : ""}
  `;
  return <Latex>{str}</Latex>;
}
export default Ampere;
