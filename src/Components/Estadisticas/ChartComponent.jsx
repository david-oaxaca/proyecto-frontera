import React from "react";
import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
} from "chart.js";
import "../../Assets/Styles/estadisticas.scss";

const ChartComponent = (props) => {
  // We register components needed to plot the chart (Necessary since Chart.js v3)
  ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement
  );

  return (
    <div className="chart">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <Chart
        type={props.type}
        data={props.data}
        options={{
          title: {
            display: false,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
};

export default ChartComponent;
