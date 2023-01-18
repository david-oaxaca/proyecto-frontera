import React from "react";
import "../../Assets/Styles/estadisticas.scss";

const Instrucciones = () => {
  return (
    <div className="instructions">
      <h2>Instrucciones</h2>
      <ol type="1">
        <li>
          <p>
            Selecci&oacute;na la pregunta que deseas consultar. Si m&aacute;s
            adelante deseas consultar una pregunta distinta, seleccionara y la
            grafica cambiara para mostrar los datos.
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
            Una vez que hayas seleccionado ambos parametros, se desplegara la
            grafica, esta cambiara de forma dinamica conforme cambies los
            parametros seleccionados.
          </p>
        </li>
      </ol>
    </div>
  );
};

export default Instrucciones;
