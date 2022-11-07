import React from 'react';
import '../../Assets/Styles/options.scss';
import SvgComponent from './svgComponent';
import MostrarGaleria from './MostrarGaleria';

const OptionsDisplay = (props) => {
    
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
            <div  className='galery-option' onClick={() => props.handleType("Galeria")}>
                Galeria
                <SvgComponent />
                {/*{ showing5 
                    ? <MostrarGaleria destino = {this.props.location}/>
                    : null
                }*/}
            </div>
        </div>
        
    );
}


export default OptionsDisplay;