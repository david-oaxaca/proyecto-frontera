import React, { useEffect, useRef, useState } from 'react';

const slides = [{
                    "color": "#ADCF9F", 
                    "title": "Nuestro proyecto", 
                    "text": "El turismo es una actividad económica de gran relevancia en México. Las áreas naturales protegidas son áreas resguardadas para la conservación de su biodiversidad, en las que recientemente se ha buscado implementar estrategias que permitan aprovecharalas turísticamentede una forma sustentable..."
                }, 
                {
                    "color": "#CED89E", 
                    "title": "Lenguaje natural", 
                    "text": "El procesamiento de lenguaje natural es el campo dentro de las ciencias de la computación que conjunta técnicas de inteligencia artificial con linguística y que, entre otras aplicaciones, permite analizar textos de forma automática"
                }, 
                {
                    "color": "#FFDCAE", 
                    "title": "Titulo #3", 
                    "text": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem incidunt recusandae doloremque, praesentium error, eaque corporis expedita soluta est tenetur vitae nisi reiciendis saepe tempore magnam, culpa numquam velit nesciunt."
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