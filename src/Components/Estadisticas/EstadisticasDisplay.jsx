import { React, useState } from "react";
import Instrucciones from "./Instrucciones";
import ChartComponent from "./ChartComponent";
import "../../Assets/Styles/estadisticas.scss";
import areasData from "./data/areas.json";
import chartsTypes from "./data/chart_types.json";
import chartData from "./data/chart_data.json";

const EstadisticasDisplay = () => {
  const [areaSelected, setAreaSelected] = useState("");
  const [chartSelected, setChartSelected] = useState("");
  const [callState, setCallState] = useState(false);
  const [chartCallState, setChartCallState] = useState(false);

  // Functions used for the buttons inside this component
  const handleArea = () => {
    setCallState(true);
  };

  const handleChart = () => {
    setChartCallState(true);
    console.log(chartCallState);
    console.log(areaSelected);
    console.log(chartSelected);
  };

  const handleBack = () => {
    setAreaSelected("");
    setCallState(false);
    setChartCallState(false);
  };

  return (
    <div className="section-container">
      <div className="container-title">
        <h1>Estadisticas</h1>
      </div>
      <div className="container-content">
        <div className="options-container">
          {areaSelected === "" ||
          areaSelected === "Selecciona una reserva" ||
          callState === false ? (
            <div className="options">
              <p className="section-label">Selecciona el area protegida:</p>
              <select
                onChange={(e) => setAreaSelected(e.target.value)}
                className="form-select form-select-lg mb-3"
              >
                {areasData.map((text, id) => (
                  <option value={text} key={id}>
                    {text}
                  </option>
                ))}
              </select>
            </div>
          ) : null}

          {areaSelected !== "" && callState === true ? (
            <div className="options">
              <p className="section-label">
                Selecciona la pregunta a graficar:
              </p>
              <select className="form-select form-select-lg mb-3">
                <option value={""}>Selecciona una opción</option>
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
              <div className="btn-container">
                <button
                  onClick={handleBack}
                  type="button"
                  className="btn chart-btn"
                >
                  Seleccionar otra reserva
                </button>
                <button
                  onClick={handleChart}
                  type="button"
                  className="btn chart-btn"
                >
                  Mostrar grafica
                </button>
              </div>
            </div>
          ) : (
            <div className="btn-container">
              <button
                onClick={handleArea}
                type="button"
                className="btn chart-btn"
              >
                Seleccionar reserva
              </button>
            </div>
          )}
        </div>
        <div className="chart-container">
          {chartCallState === true &&
          chartSelected !== "" &&
          chartSelected !== "Selecciona un tipo de grafica" ? (
            <ChartComponent
              area={areaSelected}
              title={"Titulo"}
              description={"Descripcion"}
              type={chartSelected}
              data={chartData}
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
