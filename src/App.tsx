import { useState, useEffect } from "react";
import "./App.css";
import Ampere from "./Ampere/Ampere";
import GaussB from "./GaussB/GaussB";
import GaussE from "./GaussE/GaussE";
import Faraday from "./Faraday/Faraday";
import Slide from "./Components/Slide";
import AMPERE from "./Ampere/constants";
import GAUSSE from "./GaussE/constants";
import GAUSSB from "./GaussB/constants";
import FARADAY from "./Faraday/constants";
import Wave from "./Wave/Wave";
import SlideIndex from "./Components/SlideIndex";
// https://www.researchgate.net/figure/Figura-15-Generacion-de-una-Onda-Electromagnetica_fig5_313823162
// https://www.pngfind.com/mpng/hoThboh_estas-ondas-electromagnticas-son-sinusoidales-con-que-es/
const titlesArr = [
  "Teoría electromagnética ⚡",
  "Ley de Ampere",
  "Ley de Guass (campo magnético)",
  "Ley de Gauss (campo eléctrico)",
  "Ley de Faraday",
  "Cierre",
];
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > titlesArr.length - 1) setCount(() => 0);
  }, [count]);
  const handleClick = (text) => {
    setCount(() => titlesArr.indexOf(text));
  };
  return (
    <>
      <h1>{titlesArr[count]}️</h1>
      <div className="card">
        <button
          disabled={count === 0}
          onClick={() => setCount((count) => count - 1)}
          className={`${count === 0 && "disabled"} `}
        >
          Lámina anterior
        </button>
        <button onClick={() => setCount((count) => count + 1)}>
          Siguiente lámina
        </button>
      </div>
      <div className="presentation">
        <div className="wave" />
        {count === 0 && (
          <SlideIndex handleClick={handleClick} titles={titlesArr} />
        )}
        {count === 1 && (
          <Slide
            diffLaTex={AMPERE.diffLaTex}
            explanation={AMPERE.explanation}
            inteLaTex={AMPERE.inteLaTex}
            myDiffLaTex={AMPERE.myDiffLaTex}
            myInteLaTex={AMPERE.myInteLaTex}
            imgs={["/src/assets/ampere.png"]}
          >
            <Ampere />
          </Slide>
        )}
        {count === 2 && (
          <Slide
            diffLaTex={GAUSSB.diffLaTex}
            explanation={GAUSSB.explanation}
            inteLaTex={GAUSSB.inteLaTex}
            myDiffLaTex={GAUSSB.myDiffLaTex}
            myInteLaTex={GAUSSB.myInteLaTex}
            imgs={["/src/assets/gauss-b.png"]}
          >
            <GaussB />
          </Slide>
        )}
        {count === 3 && (
          <Slide
            diffLaTex={GAUSSE.diffLaTex}
            explanation={GAUSSE.explanation}
            inteLaTex={GAUSSE.inteLaTex}
            myDiffLaTex={GAUSSE.myDiffLaTex}
            myInteLaTex={GAUSSE.myInteLaTex}
            imgs={["/src/assets/gauss-e.jpeg"]}
          >
            <GaussE />
          </Slide>
        )}
        {count === 4 && (
          <Slide
            diffLaTex={FARADAY.diffLaTex}
            explanation={FARADAY.explanation}
            inteLaTex={FARADAY.inteLaTex}
            myDiffLaTex={FARADAY.myDiffLaTex}
            myInteLaTex={FARADAY.myInteLaTex}
            imgs={["/src/assets/faraday.png"]}
          >
            <Faraday />
          </Slide>
        )}

        {count === 5 && <Wave />}
      </div>
      <footer>Hecho por David Arroyo Schneiderman 09/03/2024</footer>
    </>
  );
}

export default App;
