// Ampere.png https://steemit.com/stem-espanol/@lorenzor/la-corriente-electrica-de-maxwell-aplicaciones

import { useState } from "react";
import Ampere from "./Ampere";
import {
  diffLaTex,
  explanation,
  inteLaTex,
  myDiffLaTex,
  myInteLaTex,
} from "./constants";
import Latex from "react-latex-next";

function Container() {
  const [esh, setEsh] = useState(true);
  const [delta, setDelta] = useState(false);
  const [simpleExplanation, setSimpleExplanation] = useState(true);

  const eshText = (esh && (simpleExplanation ? myInteLaTex : inteLaTex)) || "";
  const deltaText =
    (delta && (simpleExplanation ? myDiffLaTex : diffLaTex)) || "";

  return (
    <div className="slide-container">
      <button
        onClick={() => {
          if (esh && delta) setDelta(() => false);
          if (!esh && !delta) setEsh(() => true);
          setEsh((st) => !st);
          setDelta((st) => !st);
        }}
      >
        {esh && "Integral"}
        {esh && delta && "/"}
        {delta && "Diferencial"}
        {!esh && !delta && "Información"}
      </button>
      <div className="slide">
        <div className="slide-content">
          {!simpleExplanation && !delta && !esh && <Latex>{explanation}</Latex>}
          {delta && (
            <>
              <Ampere
                esh={false}
                delta={delta}
                capEsh={false}
                capDelta={delta}
              />
              <span className="text">
                <Latex>{deltaText}</Latex>
              </span>
            </>
          )}

          {esh && (
            <>
              <Ampere esh={esh} delta={false} capEsh={esh} capDelta={false} />
              <span className="text">
                <Latex>{eshText}</Latex>
              </span>
            </>
          )}
        </div>
        <img src="/src/assets/ampere.png" />
      </div>
    </div>
  );
}

export default Container;
