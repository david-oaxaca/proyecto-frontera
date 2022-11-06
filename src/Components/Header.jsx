import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import IPN from '../Assets/Icons/ipn_logo.svg';
import CONACYT from '../Assets/Icons/conacyt_logo.svg';
import UNAM from '../Assets/Icons/unam_logo.svg';
import UASLP from '../Assets/Icons/uaslp_logo.svg';
import '../Assets/Styles/header.scss';

const Header = () => {
    const [sidebar, setSidebar] = useState(-1);

    function showSidebar(){
        setSidebar(-1 * sidebar);
    }

    return (
        <>
            <header className="sticky-top">
                <nav className="navbar navbar-expand-lg navbar-dark custom-bg-color nav-shadow">
                    <div className="container-fluid ">
                        <div className='collapsed-navbar'>
                            <button className="navbar-toggler" type="button" onClick={showSidebar} aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className='text-center justify-content-center'>
                                <h1 className='drawer-title'>Proyecto Frontera</h1>
                            </div>
                        </div>
                        
                        
                        <div className="collapse navbar-collapse text-center justify-content-center" id="navbarNav">
                            <a className="navbar-brand"  href="https://www.conacyt.mx/">
                                <img src={CONACYT} alt="CONACYT" className='filter-white' width='auto' height='70px'/>
                            </a>
                            <a className="navbar-brand"  href="https://www.ipn.mx/">
                                <img src={IPN} alt="IPN" className='filter-white' width='auto' height='70px'/>
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
                            
                            <a className="navbar-brand"  href="https://www.unam.mx/">
                                <img src={UNAM} alt="UNAM" className='filter-white' width='auto' height='70px'/>
                            </a>
                            <a className="navbar-brand"  href="https://www.uaslp.mx/">
                                <img src={UASLP} alt="UASLP" className='filter-white' width='auto' height='70px'/>
                            </a>
                        </div>
                    </div>
                </nav>
            </header>
            <div className={"drawer-container"} style={{transform: `translate3d(${(sidebar * 55) - 55}%, 0, 0)`}}>
                <div className='drawer-content'>
                    <NavLink className={"nav-link drawer-option"} onClick={showSidebar} to="/">Inicio</NavLink>
                    <NavLink className={"nav-link drawer-option"} onClick={showSidebar} to="/Explorar">Explorar</NavLink>
                    <NavLink className={"nav-link drawer-option"} onClick={showSidebar} to="/SubirFoto">Subir Foto</NavLink>
                </div>
            </div>
        </>
        
    )
}

export default Header;