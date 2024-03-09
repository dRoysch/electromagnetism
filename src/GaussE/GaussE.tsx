import "katex/dist/katex.min.css";
import Latex from "react-latex-next";

type GaussEProps = {
  esh?: boolean;
  delta?: boolean;
  capEsh?: boolean;
  capDelta?: boolean;
};

function GaussE({ esh, delta, capEsh, capDelta }: GaussEProps) {
  const diff = String.raw`
  \[
  \nabla \cdot \mathbf{E} = \frac{\rho}{\varepsilon_0}
  \]
  `;
  const inte = String.raw`
  \[
  \oint_{S} \mathbf{E} \cdot d\mathbf{A} = \frac{Q_{\text{int}}}{\varepsilon_0}
  \]
  `;
  const captionDiff = String.raw`
  Donde:\( \newline \)
  
  - \( \mathbf{E} \) es el campo eléctrico.\( \newline \)
  - \( \rho \) es la densidad de carga eléctrica.\( \newline \)
  - \( \varepsilon_0 \) es la permitividad eléctrica del vacío.\( \newline \)
  `;

  const captionInte = String.raw`
  Donde:\( \newline \)
  
  - \( \mathbf{E} \) es el campo eléctrico.\( \newline \)
  - \( \varepsilon_0 \) es la permitividad eléctrica del vacío.\( \newline \)
  - \( Q_{\text{int}} \) es la carga encerrada en una superficie cerrada \( S \).\( \newline \)
  - \( d\mathbf{A} \) es un vector de área infinitesimal.\( \newline \)
  `;

  const str = String.raw`
  ${delta ? diff : ""} ${delta && capDelta ? captionDiff : ""}
  ${esh ? inte : ""} ${esh && capEsh ? captionInte : ""}
  `;
  return <Latex>{str}</Latex>;
}
export default GaussE;
