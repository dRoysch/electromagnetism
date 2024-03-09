import "katex/dist/katex.min.css";
import Latex from "react-latex-next";

type FaradayProps = {
  esh?: boolean;
  delta?: boolean;
  capEsh?: boolean;
  capDelta?: boolean;
};

function Faraday({ esh, delta, capEsh, capDelta }: FaradayProps) {
  const diff = String.raw`
  \[
  \nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}
  \]
  `;
  const inte = String.raw`
  \[
  \oint_{C} \mathbf{E} \cdot d\mathbf{l} = -\frac{d}{dt} \int_{S} \mathbf{B} \cdot d\mathbf{A}
  \]
  `;
  const captionDiff = String.raw`
  Donde:\( \newline \)
  
  - \( \mathbf{E} \) es el campo eléctrico.\( \newline \)
  - \( \mathbf{B} \) es el campo magnético.\( \newline \)
  - \( d\mathbf{t} \) es un tiempo infinitesimal.\( \newline \)
  `;

  const captionInte = String.raw`
  Donde:\( \newline \)

  - \( \mathbf{E} \) es el campo eléctrico.\( \newline \)
  - \( \mathbf{B} \) es el campo magnético.\( \newline \)
  - \( d\mathbf{A} \) es un vector de área infinitesimal.\( \newline \)
  - \( d\mathbf{l} \) es un elemento de longitud de la curva \( C \).
  `;

  const str = String.raw`
  ${delta ? diff : ""} ${delta && capDelta ? captionDiff : ""}
  ${esh ? inte : ""} ${esh && capEsh ? captionInte : ""}
  `;
  return <Latex>{str}</Latex>;
}
export default Faraday;
