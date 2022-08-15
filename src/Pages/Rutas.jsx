import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; /* eslint import/no-webpack-loader-syntax: off */
import '../Assets/Styles/rutas.scss'

mapboxgl.accessToken = 'pk.eyJ1IjoiZGF2aWQtb2F4YWNhIiwiYSI6ImNsNnR5ZWdpajB2cmgzbW1zcDltbHBnNm4ifQ.ctBACt6TJ1BEDeLlWZArJA';

export default function Rutas() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-99.23);
  const [lat, setLat] = useState(19.58);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
      map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });
  });
  
  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

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
          
          <div ref={mapContainer} className="map-container" />
        </div>
      </section>
    </main>
  )
}
