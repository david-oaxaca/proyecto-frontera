import React from "react";
import CONACYT from "../Assets/Images/CONACYT_logo.png";
import IPN from "../Assets/Images/IPN_logo.png";
import UASLP from "../Assets/Images/UASLP_logo.png";
import UNAM from "../Assets/Images/UNAM_logo.png";
import "../Assets/Styles/footer.scss";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="cell-container">
        <div className="footer-brand-section">
          <a className="footer-brand" href="https://conacyt.mx/">
            <img src={CONACYT} alt="CONACYT" width="auto" height="70px" />
          </a>
        </div>
        <div className="footer-brand-section">
          <a className="footer-brand" href="https://www.uaslp.mx/">
            <img src={UASLP} alt="UASLP" width="auto" height="70px" />
          </a>
          <a className="footer-brand" href="https://www.unam.mx/">
            <img src={UNAM} alt="UNAM" width="auto" height="70px" />
          </a>
          <a className="footer-brand" href="https://www.ipn.mx/">
            <img src={IPN} alt="IPN" width="auto" height="70px" />
          </a>
        </div>
      </div>

      <div className="cell-container">
        <h4>Informaci&oacute;n de contacto</h4>
        <p>
          <strong>DIRECCI&Oacute;N:</strong> Av. Juan de Dios B&aacute;tiz, esq.
          Miguel Oth&oacute;n de Mendiz&aacute;bal, Col. Nueva Industrial
          Vallejo, Alcald&iacute;a Gutsavo A. Madero, C.P. 07733, CDMX
        </p>
      </div>

      <div className="cell-container">
        <h4>Acerca del proyecto</h4>
        <p>Proyecto de ciencia de frontera</p>
        <p>
          Modelo de geointeligencia territorial como instrumento de gestion
          turística en áreas naturales protegidas de México
        </p>
        <p>&Uacute;ltima Actualizaci&oacute;n: 24/02/2022</p>
        <p>Made with ❤ at Instituto Politecnico Nacional</p>
      </div>
    </footer>
  );
};

export default Footer;
