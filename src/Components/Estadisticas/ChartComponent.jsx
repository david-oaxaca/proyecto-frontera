import React from "react";
import { Chart } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"; // eslint-disable-line no-unused-vars
import "../../Assets/Styles/estadisticas.scss";

const ChartComponent = (props) => {
  const showLegend = !(props.type === "bar" || props.type === "line");
  return (
    <div className="chart">
      <h2>{props.area}</h2>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <Chart
        type={props.type}
        data={props.data}
        options={{
          title: {
            display: false,
          },
          plugins: {
            legend: {
              display: showLegend,
            },
          },
        }}
      />
    </div>
  );
};

export default ChartComponent;
