import React from 'react';
import '../../Assets/Styles/options.scss';
import SvgComponent from './svgComponent';
import MostrarGaleria from './MostrarGaleria';

class OptionsDisplay extends React.Component{
    state = { showing1: false, showing2: false, showing3: false, showing4: false, showing5: false};
    render(){
        const { showing1, showing2, showing3, showing4, showing5} = this.state;
        return(
            <div className='galery-selection'>
                <div className='selection-title'>
                    <h2>{this.props.location}</h2>
                </div>
                <div className='galery-option' onClick={() => this.setState({ showing1: !showing1 })}>
                    Documentos oficiales del ANP
                    <SvgComponent />
                    { showing1 
                        ? <div>{this.props.location}</div>
                        : null
                    }
                </div>
                <div className='galery-option' onClick={() => this.setState({ showing2: !showing2 })}>
                    Mapa de inventario tur&iacute;stico
                    <SvgComponent />
                    { showing2 
                        ? <div>{this.props.location}</div>
                        : null
                    }
                </div>
                <div className='galery-option' onClick={() => this.setState({ showing3: !showing3 })}>
                    Mapa de rutas recorridas
                    <SvgComponent />
                    { showing3 
                        ? <div>{this.props.location}</div>
                        : null
                    }
                </div>
                <div className='galery-option' onClick={() => this.setState({ showing4: !showing4 })}>
                    Datos encuesta
                    <SvgComponent />
                    { showing4 
                        ? <div>{this.props.location}</div>
                        : null
                    }
                </div>
                <div  className='galery-option' onClick={() => this.setState({ showing5: !showing5 })}>
                    Galeria
                    <SvgComponent />
                    { showing5 
                        ? <MostrarGaleria destino = {this.props.location}/>
                        : null
                    }
                </div>
            </div>
            
        );
    }
}

export default OptionsDisplay;