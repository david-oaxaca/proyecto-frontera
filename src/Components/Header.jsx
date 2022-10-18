import React from 'react';
import { NavLink } from 'react-router-dom';
import IPN from '../Assets/Icons/ipn_logo.svg';
import CIC from '../Assets/Images/cic.png';
import '../Assets/Styles/header.scss';

const Header = () => {

    return (
        <header className="sticky-top">
            <nav className="navbar navbar-expand-lg navbar-dark custom-bg-color nav-shadow">
                <div className="container-fluid ">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-center justify-content-center" id="navbarNav">
                        <a className="navbar-brand"  href="https://www.ipn.mx/">
                            <img src={IPN} alt="IPN" className='filter-white' width='70px' height='70px'/>
                        </a>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className={"nav-link"}  to="/">Inicio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={"nav-link"}  to="/Explorar">Explorar</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={"nav-link"} to="/SubirFoto">Subir Foto</NavLink>
                            </li>
                        </ul>
                        <a className="navbar-brand"  href="https://www.cic.ipn.mx/">
                            <img src={CIC} alt="IPN" width='70px' height='70px'/>
                        </a>
                    </div>
                </div>
            </nav>
        </header>
        
    )
}

export default Header;