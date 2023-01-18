import { React, useState } from "react";
import Instrucciones from "./Instrucciones";
import ChartComponent from "./ChartComponent";
import "../../Assets/Styles/estadisticas.scss";
import chartsTypes from "./data/chart_types.json";
import chartData from "./data/chart_data.json";
import questionsData from "./data/questions.json";

const EstadisticasDisplay = () => {
  const [questionSelected, setQuestionSelected] = useState("");
  const [chartSelected, setChartSelected] = useState("");

  return (
    <div className="section-container">
      <div className="container-title">
        <h1>Estadisticas</h1>
      </div>
      <div className="container-content">
        <div className="options-container">
          <div className="options">
            <p className="section-label">Selecciona la pregunta a graficar:</p>
            <select
              onChange={(e) => setQuestionSelected(e.target.value)}
              className="form-select form-select-lg mb-3"
            >
              {questionsData.map((text, id) => (
                <option value={id} key={id}>
                  {text}
                </option>
              ))}
            </select>
            <p className="section-label">Selecciona el tipo de grafica:</p>
            <select
              onChange={(e) => setChartSelected(e.target.value)}
              className="form-select form-select-lg mb-3"
            >
              {chartsTypes.map((text, id) => (
                <option value={text} key={id}>
                  {text}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="chart-container">
          {questionSelected !== "" &&
          questionSelected !== "Selecciona una pregunta" &&
          chartSelected !== "" &&
          chartSelected !== "Selecciona un tipo de grafica" ? (
            <ChartComponent
              title={chartData[questionSelected]["title"]}
              description={chartData[questionSelected]["description"]}
              type={chartSelected}
              data={chartData[questionSelected]["data"]}
            />
          ) : (
            <Instrucciones />
          )}
        </div>
      </div>
    </div>
  );
};

export default EstadisticasDisplay;
