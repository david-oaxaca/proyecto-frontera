import { React, useState } from "react";
import axios from "axios";
import Instrucciones from "./Instrucciones";
import ChartComponent from "./ChartComponent";
import "../../Assets/Styles/estadisticas.scss";

let areaOptions = [
  "Selecciona una reserva",
  "Reserva Ecológica Cuxtal",
  "Reserva de la Biosfera Tehuacán-Cuicatlán",
  "Reserva de la Biosfera Sierra Gorda",
];
let chartTypes = [
  "Selecciona un tipo de gráfica",
  "doughnut",
  "bar",
  "pie",
  "line",
];
let areaQueries = ["Cuxtal", "Tehuacan", "Sierra"];

const MappedSelect = (props) => {
  return (
    <select
      onChange={(e) => props.handleSelection(e.target.value)}
      value={props.value}
      className="form-select form-select-lg mb-3"
    >
      {props.data.map((text, id) => (
        <option value={id} key={id}>
          {text}
        </option>
      ))}
    </select>
  );
};

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
      .get(
        "https://proyectofronteraestadisticas.azurewebsites.net/api/ConsultaEstadisticas",
        { params: { zona: areaQueries[areaSelected - 1] } }
      )
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
        <h1>Estadísticas</h1>
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
              <MappedSelect
                data={questionsData}
                value={questionSelected}
                handleSelection={setQuestionSelected}
              />
              <p className="section-label">
                Selecciona el tipo de gr&aacute;fica:
              </p>
              <MappedSelect
                data={chartTypes}
                value={chartSelected}
                handleSelection={setChartSelected}
              />
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
                Selecciona la reserva de la cual quieres ver gráficas:
              </p>
              <MappedSelect
                data={areaOptions}
                value={areaSelected}
                handleSelection={setAreaSelected}
              />
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
              area={areaOptions[areaSelected]}
              title={chartData[questionSelected - 1]["title"]}
              description={chartData[questionSelected - 1]["description"]}
              type={chartTypes[chartSelected]}
              data={chartData[questionSelected - 1]["data"]}
            />
          ) : (
            <h2>Seleccione la pregunta a graficar y el tipo de gráfica.</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default EstadisticasDisplay;
