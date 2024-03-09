import "katex/dist/katex.min.css";
import Latex from "react-latex-next";

type GaussBProps = {
  esh?: boolean;
  delta?: boolean;
  capEsh?: boolean;
  capDelta?: boolean;
};

function GaussB({ esh, delta, capEsh, capDelta }: GaussBProps) {
  const diff = String.raw`
  \[
  \nabla \cdot \mathbf{B} = 0
  \]
  `;
  const inte = String.raw`
  \[
  \oint_{S} \mathbf{B} \cdot d\mathbf{A} = 0
  \]
  `;
  const captionDiff = String.raw`
  Donde:\( \newline \)
  
  - \( \mathbf{B} \) es el campo magnético.\( \newline \)
  `;

  const captionInte = String.raw`
  Donde:\( \newline \)
  
  - \( \mathbf{B} \) es el campo magnético.\( \newline \)
  - \( S \) es una superficie cerrada .\( \newline \)
  - \( d\mathbf{A} \) es un vector de área infinitesimal.\( \newline \)
  `;

  const str = String.raw`
  ${delta ? diff : ""} ${delta && capDelta ? captionDiff : ""}
  ${esh ? inte : ""} ${esh && capEsh ? captionInte : ""}
  `;
  return <Latex>{str}</Latex>;
}
export default GaussB;
