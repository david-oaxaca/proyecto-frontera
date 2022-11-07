import React, { useState } from 'react';
import '../../Assets/Styles/options.scss';
import SvgComponent from './svgComponent';
import MostrarGaleria from './MostrarGaleria';

const OptionsDisplay = (props) => {
    const [displayGalery, setDisplayGalery] = useState(false);

    const showGalery = () => {
        setDisplayGalery(!displayGalery);
    }

    return(
        <div className='galery-selection'>
            <div className='selection-title'>
                <h2>{props.location}</h2>
            </div>
            <div className='galery-option' onClick={() => props.handleType("Documentos oficiales del ANP")}>
                Documentos oficiales del ANP
                <SvgComponent />
                
            </div>
            <div className='galery-option' onClick={() => props.handleType("Mapa de inventario turistico")}>
                Mapa de inventario tur&iacute;stico
                <SvgComponent />
                
            </div>
            <div className='galery-option' onClick={() => props.handleType("Mapa de rutas turisticas")}>
                Mapa de rutas recorridas
                <SvgComponent />
                
            </div>
            <div className='galery-option' onClick={() => props.handleType("Datos encuesta")}>
                Datos encuesta
                <SvgComponent />
   
            </div>
            <div  className='galery-option' onClick={() => showGalery()}>
                Galeria
                <SvgComponent />
                {  
                    displayGalery && <MostrarGaleria destino = {props.location}/>
                }
            </div>
        </div>
        
    );
}


export default OptionsDisplay;