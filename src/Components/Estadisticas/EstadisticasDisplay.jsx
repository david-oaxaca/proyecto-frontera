import { React, useState } from "react";
import axios from "axios";
import Instrucciones from "./Instrucciones";
import ChartComponent from "./ChartComponent";
import "../../Assets/Styles/estadisticas.scss";

let areas = ["Selecciona una reserva", "Reserva Ecológica Cuxtal"];
let chartTypes = [
  "Selecciona un tipo de grafica",
  "doughnut",
  "bar",
  "pie",
  "line",
];
let endpoints = [
  "https://proyectofronteraestadisticas.azurewebsites.net/api/ConsultaCuxtal",
  "",
  "",
];

const EstadisticasDisplay = () => {
  const [areaSelected, setAreaSelected] = useState(0);
  const [questionSelected, setQuestionSelected] = useState(0);
  const [chartSelected, setChartSelected] = useState(0);
  const [requestPerformed, setRequestPerformed] = useState(false);
  const [chartData, setChartData] = useState([]);
  const [questionsData, setQuestionsData] = useState([
    "Selecciona una pregunta",
  ]);

  const handleSelectArea = () => {
    axios
      .get(endpoints[areaSelected - 1])
      .then((response) => {
        setChartData(response["data"]);
        let questions = response["data"].map((obj) => obj.title);
        setQuestionsData((currentArray) => [...currentArray, ...questions]);
        setRequestPerformed(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDeselectArea = () => {
    setAreaSelected(0);
    setQuestionSelected(0);
    setChartSelected(0);
    setRequestPerformed(false);
  };

  return (
    <div className="section-container">
      <div className="container-title">
        <h1>Estadisticas</h1>
      </div>
      <div className="container-content">
        <div className="options-container">
          {areaSelected === 0 || !requestPerformed ? (
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
                {chartTypes.map((text, id) => (
                  <option value={id} key={id}>
                    {text}
                  </option>
                ))}
              </select>
              <div className="btn-container">
                <button
                  type="button"
                  onClick={handleDeselectArea}
                  className="btn chart-btn"
                >
                  Seleccionar otra reserva
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="chart-container">
          {areaSelected === 0 || !requestPerformed ? (
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
              <div className="btn-container">
                <button
                  type="button"
                  onClick={handleSelectArea}
                  className="btn chart-btn"
                >
                  Seleccionar esta reserva
                </button>
              </div>
            </div>
          ) : questionSelected !== 0 && chartSelected !== 0 ? (
            <ChartComponent
              area={areas[areaSelected]}
              title={chartData[questionSelected - 1]["title"]}
              description={chartData[questionSelected - 1]["description"]}
              type={chartTypes[chartSelected]}
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
