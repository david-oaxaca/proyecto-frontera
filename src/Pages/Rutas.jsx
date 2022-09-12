import React from 'react';
import '../Assets/Styles/rutas.scss'

export default function Rutas() {

  return (
    <main>
      <section>
        <div className='container d-flex flex-column justify-content-center align-items-center h-100 mt-4'>
          <div>
          <nav className="navbar">
            <div className="container d-flex justify-content-center align-items-center">
              <h2 className='primary-color-bg'>Busca una ruta: </h2>
              <form className="d-flex ms-3" role="search">
                <input className="form-control me-2 md-col-1" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </nav>
          </div>
          
        </div>
      </section>
    </main>
  )
}
