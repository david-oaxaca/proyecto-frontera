import React from "react";
import Slideshow from "../Components/Slideshow";
import CardDisplay from "../Components/InfoDisplay/CardDisplay";
import "../Assets/Styles/homepage.scss";

export default function Home() {
  return (
    <main>
      <section>
        <Slideshow />
      </section>
      <section>
        <div className="wrapper">
          <div className="info-display">
            <h1>Investigadores</h1>
            <p>
              Los investigadores que contribuyeron a la creaci&oacute;n de este
              proyecto, incluyendo la recopilaci&oacute;n de datos, el
              desarrollo de la aplicaci&oacute; y la pagina web fueron:
            </p>
            <CardDisplay />
          </div>
        </div>
      </section>
    </main>
  );
}
