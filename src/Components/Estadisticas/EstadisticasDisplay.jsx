import { React, useState } from "react";
import Instrucciones from "./Instrucciones";
import ChartComponent from "./ChartComponent";
import "../../Assets/Styles/estadisticas.scss";
import chartData from "./data/chart_data.json";
import questionsData from "./data/questions.json";

let areas = ["Selecciona una reserva", "Reserva Ecológica Cuxtal"];
let chartsTypes = [
  "Selecciona un tipo de grafica",
  "doughnut",
  "bar",
  "pie",
  "line",
];

const EstadisticasDisplay = () => {
  const [areaSelected, setAreaSelected] = useState(0);
  const [questionSelected, setQuestionSelected] = useState(0);
  const [chartSelected, setChartSelected] = useState(0);

  return (
    <div className="section-container">
      <div className="container-title">
        <h1>Estadisticas</h1>
      </div>
      <div className="container-content">
        <div className="options-container">
          {areaSelected === 0 ? (
            <Instrucciones />
          ) : (
            <div className="options">
              <p className="section-label">
                Selecciona la pregunta a graficar:
              </p>
              <select
                onChange={(e) => setQuestionSelected(e.target.value)}
                value={questionSelected}
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
                value={chartSelected}
                className="form-select form-select-lg mb-3"
              >
                {chartsTypes.map((text, id) => (
                  <option value={id} key={id}>
                    {text}
                  </option>
                ))}
              </select>
              <div className="btn-container">
                <button type="button" className="btn chart-btn">
                  Seleccionar otra reserva
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="chart-container">
          {areaSelected === 0 ? (
            <div className="options">
              <p className="section-label">
                Selecciona la reserva de la cual quieres ver graficas:
              </p>
              <select
                onChange={(e) => setAreaSelected(e.target.value)}
                value={areaSelected}
                className="form-select form-select-lg mb-3"
              >
                {areas.map((text, id) => (
                  <option value={id} key={id}>
                    {text}
                  </option>
                ))}
              </select>
            </div>
          ) : questionSelected !== 0 && chartSelected !== 0 ? (
            <ChartComponent
              area={areas[areaSelected]}
              title={chartData[questionSelected - 1]["title"]}
              description={chartData[questionSelected - 1]["description"]}
              type={chartsTypes[chartSelected]}
              data={chartData[questionSelected - 1]["data"]}
            />
          ) : (
            <h2>Seleccione la pregunta a graficar y el tipo de grafica.</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default EstadisticasDisplay;
