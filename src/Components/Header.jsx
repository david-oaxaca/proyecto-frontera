import React, { useState, useEffect } from 'react';
import IPN from '../Assets/Icons/ipn_logo.svg';
import '../Assets/Styles/header.scss';

export default function Header() {
    const [value, setValue] = useState();
    useEffect(() => {
        let pathPure = window.location.pathname;
        let path = pathPure.substring(1, pathPure.length);
        if (path === "") {
            setValue("Home")
        } else if (path === "Galeria") {
            setValue("Galeria");
        } else if (path === "Analisis") {
            setValue("Analisis");
        } else if (path === "Rutas") {
            setValue("Rutas");
        }
    }, []);

    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark custom-bg-color">
            <div className="container-fluid">
                <a className="navbar-brand font-brand"  href="/">
                    
                    <img src={IPN} alt="IPN" className='filter-white' width='35px' height='35px'/>
                    Proyecto Frontera
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className={`nav-link ${value === 'Home' ? "active" : ''}`} onClick={(e, value) => setValue(value)} href="/">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${value === 'Analisis' ? "active" : ''}`} onClick={(e, value) => setValue(value)} href="/Analisis">Analisis</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${value === 'Galeria' ? "active" : ''}`} onClick={(e, value) => setValue(value)} href="/Galeria">Galeria</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${value === 'Rutas' ? "active" : ''}`} onClick={(e, value) => setValue(value)} href="/Rutas">Rutas</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
