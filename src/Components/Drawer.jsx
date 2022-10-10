import React from 'react'

const Drawer = () => {
  return (
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Proyecto Frontera</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                    <a className="nav-link" href="/">Inicio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/Analisis">Analisis</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/Galeria">Galeria</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/Rutas">Rutas</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Drawer;
