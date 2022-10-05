import React, { useState, useEffect } from 'react';
import IPN from '../Assets/Icons/ipn_logo.svg';
import CIC from '../Assets/Images/cic.png';
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
        } else if (path === "Documentos") {
            setValue("Documentos");
        } else if (path === "SubirFoto") {
            setValue("Subir Foto");
        }
    }, []);

    return (
        <header className='sticky-top'>
            <nav className="navbar navbar-expand-lg navbar-dark custom-bg-color nav-shadow">
                <div className="container-fluid">
                    <a className="navbar-brand font-brand"  href="https://www.ipn.mx/">
                        <img src={IPN} alt="IPN" className='filter-white' width='70px' height='70px'/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
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
                                <a className={`nav-link ${value === 'Documentos' ? "active" : ''}`} onClick={(e, value) => setValue(value)} href="/Documentos">Documentos</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${value === 'Subir Foto' ? "active" : ''}`} onClick={(e, value) => setValue(value)} href="/SubirFoto">Subir Foto</a>
                            </li>
                        </ul>
                    </div>
                    <a className="navbar-brand font-brand"  href="https://www.cic.ipn.mx/">
                        <img src={CIC} alt="IPN" width='70px' height='70px'/>
                    </a>
                </div>
            </nav>
        </header>
        
    )
}
