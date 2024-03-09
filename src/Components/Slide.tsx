// Ampere.png https://steemit.com/stem-espanol/@lorenzor/la-corriente-electrica-de-maxwell-aplicaciones

import { cloneElement, useState } from "react";
import {
  diffLaTex,
  explanation,
  inteLaTex,
  myDiffLaTex,
  myInteLaTex,
} from "./constants";
import Latex from "react-latex-next";
import Faraday from "../Faraday/Faraday";
import GaussB from "../GaussB/GaussB";
import Ampere from "../Ampere/Ampere";
import GaussE from "../GaussE/GaussE";

type SlideSimpleProps = {
  explanation: string;
  diffLaTex: string;
  inteLaTex: string;
  myDiffLaTex: string;
  myInteLaTex: string;
  imgs: string[];
};
type SlideProps = SlideSimpleProps & {
  children: React.DetailedReactHTMLElement<
    typeof Ampere | typeof GaussE | typeof GaussB | typeof Faraday,
    Partial<SlideSimpleProps>
  >;
};
function Slide({
  explanation,
  diffLaTex,
  inteLaTex,
  myDiffLaTex,
  myInteLaTex,
  imgs,
  children,
}: SlideProps) {
  const [esh, setEsh] = useState(true);
  const [delta, setDelta] = useState(false);
  const [simpleExplanation, setSimpleExplanation] = useState(true);
  const [img, setImg] = useState(0);

  const handleImg = () => {
    if (img >= imgs.length - 1) return setImg(0);
    setImg((st) => st + 1);
  };

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
              {cloneElement(children, {
                esh: false,
                delta: delta,
                capEsh: false,
                capDelta: delta,
              })}
              {/* <Ampere
                esh={false}
                delta={delta}
                capEsh={false}
                capDelta={delta}
              /> */}
              <span className="text">
                <Latex>{deltaText}</Latex>
              </span>
            </>
          )}

          {esh && (
            <>
              {cloneElement(children, {
                esh: esh,
                delta: false,
                capEsh: esh,
                capDelta: false,
              })}
              {/* <Ampere esh={esh} delta={false} capEsh={esh} capDelta={false} /> */}
              <span className="text">
                <Latex>{eshText}</Latex>
              </span>
            </>
          )}
        </div>

        {imgs[0] && (
          <img className="Slide__img" src={imgs[img]} onClick={handleImg} />
        )}
      </div>
    </div>
  );
}

export default Slide;
