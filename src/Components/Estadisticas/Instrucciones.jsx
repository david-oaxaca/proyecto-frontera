import React from "react";
import "../../Assets/Styles/estadisticas.scss";

const Instrucciones = () => {
  return (
    <div className="instructions">
      <h2>Instrucciones</h2>
      <ol type="1">
        <li>
          <p>
            Selecci&oacute;na la reserva de la cual quieres consultar datos y
            presiona en "Seleccionar reserva".
          </p>
        </li>
        <li>
          <p>
            Selecci&oacute;na la pregunta que deseas consultar de acuerdo a la
            reserva previamente seleccionada.
          </p>
        </li>
        <li>
          <p>
            Selecci&oacute;na el tipo de grafica que deseas desplegar de acuerdo
            a la pregunta seleccionada. La grafica puede cambiar simplemente con
            esta selecci&oacute;n.
          </p>
        </li>
        <li>
          <p>
            Si deseas consultar los datos de una reserva distinta, presiona en
            "Seleccionar otra reserva" para realizar el proceso nuevamente.
          </p>
        </li>
      </ol>
    </div>
  );
};

export default Instrucciones;
