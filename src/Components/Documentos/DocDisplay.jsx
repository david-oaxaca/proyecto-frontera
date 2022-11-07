import React from 'react';
import '../../Assets/Styles/documents.scss';
import MenuSVG from './MenuSVG';

const DocDisplay = (props) => {
    const location = props.location;
    const type = props.type;
    return(
        <div className='doc-container'>
            <h1>{location}</h1>
            <h2>{type}</h2>
            
            <div className='doc-option' >
                <MenuSVG />
                Volver a las opciones
            </div> 
        </div>
        
    );
}

export default DocDisplay;