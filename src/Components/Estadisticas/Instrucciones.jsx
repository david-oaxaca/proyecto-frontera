import React from "react";
import "../../Assets/Styles/estadisticas.scss";

const Instrucciones = () => {
  return (
    <div className="instructions">
      <h2>Instrucciones</h2>
      <ol type="1">
        <li>
          <p>
            Selecciona la pregunta que deseas consultar. Si m&aacute;s adelante
            deseas consultar una pregunta distinta, selecci&oacute;nala y la
            gr&aacute;fica cambiar&aacute; para mostrar los datos.
          </p>
        </li>
        <li>
          <p>
            Selecciona el tipo de gr&aacute;fica que deseas desplegar de acuerdo
            a la pregunta seleccionada. La grafica puede cambiar simplemente con
            esta selecci&oacute;n.
          </p>
        </li>
        <li>
          <p>
            Una vez que hayas seleccionado ambos p&aacute;rametros, se
            desplegar&aacute; la gr&aacute;fica, esta cambiara de forma
            din&aacute;mica conforme cambies los par&aacute;metros
            seleccionados.
          </p>
        </li>
      </ol>
    </div>
  );
};

export default Instrucciones;
