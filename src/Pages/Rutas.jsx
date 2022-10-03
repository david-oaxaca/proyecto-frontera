import React from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
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
          
          <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>

        </div>
      </section>
    </main>
  )
}
