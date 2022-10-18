import React from 'react';
import CONACYT from '../Assets/Images/Footer/CONACYT_logo.png';
import IPN from '../Assets/Images/Footer/IPN_logo.png';
import UASLP from '../Assets/Images/Footer/UASLP_logo.png';
import UNAM from '../Assets/Images/Footer/UNAM_logo.png';
import '../Assets/Styles/footer.scss';

const Footer = () => {
    return (
        <footer className='footer-wrapper'>
            <div>
                <p><strong>Instituto Politecnico Nacional</strong></p>
                <p><strong>DIRECCI&Oacute;N: Av. Juan de Dios B&aacute;tiz, esq. Miguel Oth&oacute;n de Mendiz&aacute;bal, 
                    Col. Nueva Industrial Vallejo, Alcald&iacute;a Gutsavo A. Madero, C.P. 07733, CDMX</strong></p>
                <p><strong>&Uacute;ltima Actualizaci&oacute;n: Octubre 2022</strong></p>
            </div>
            <div>
                <div className='footer-brand-section'>
                    <a className="footer-brand"  href="https://conacyt.mx/">
                        <img src={CONACYT} alt="CONACYT" width='auto' height='70px'/>
                    </a>
                </div>
                <div className='footer-brand-section'>
                    <a className="footer-brand"  href="https://www.uaslp.mx/">
                        <img src={UASLP} alt="UASLP" width='auto' height='70px'/>
                    </a>
                    <a className="footer-brand"  href="https://www.unam.mx/">
                        <img src={UNAM} alt="UNAM" width='auto' height='70px'/>
                    </a>
                    <a className="footer-brand"  href="https://www.ipn.mx/">
                        <img src={IPN} alt="IPN" width='auto' height='70px'/>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;