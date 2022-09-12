import React, { useEffect, useRef, useState } from 'react';

const slides = [{
                    "color": "#36AE7C", 
                    "title": "Nuestro proyecto", 
                    "text": "El turismo es una actividad económica de gran relevancia en México. Las áreas naturales protegidas son áreas resguardadas para la conservación de su biodiversidad, en las que recientemente se ha buscado implementar estrategias que permitan aprovecharalas turísticamentede una forma sustentable..."
                }, 
                {
                    "color": "#F9D923", 
                    "title": "Lenguaje natural", 
                    "text": "El procesamiento de lenguaje natural es el campo dentro de las ciencias de la computación que conjunta técnicas de inteligencia artificial con linguística y que, entre otras aplicaciones, permite analizar textos de forma automática"
                }, 
                {
                    "color": "#EB5353", 
                    "title": "CIC - IPN", 
                    "text": "El laboratorio de Procesamiento Inteligente de Información Geospacial fue el encargado de la elaboración de este proyecto en el plazo de Agosto 2022 a Diciembre 2022."
                }]
            
const delay = 3500;

const Slideshow = () => {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout(){
        if(timeoutRef.current){
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex( (prevIndex) => 
                    prevIndex === slides.length - 1 ? 0 : prevIndex + 1
                ), 
                delay
        );
        return () => {
            resetTimeout();
        }
    }, [index])

    return (
        <div className='slideshow'>
            <div className='slider'
                style={{transform: `translate3d(${-index * 100}%, 0, 0)`}}
            >
                {slides.map((slideObject, index) => (
                    <div 
                        className='slide' 
                        key={index} 
                        style={{backgroundColor: `${slideObject.color}`}}
                    >
                        <div className='slide-content'>
                            <h1>{slideObject.title}</h1>
                            <p>{slideObject.text}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className='dots'>
                    {slides.map((_, idx) => (
                        <div 
                            key={idx} 
                            className={'slideshowDot'} 
                            style={{backgroundColor: `${index === idx ? "#FFFFFF" : "#C4C4C4"}`}}
                            onClick={() => {
                                setIndex(idx);
                            }}>
                        </div>
                    ))}
            </div>
        </div>
    )
};

export default Slideshow;
