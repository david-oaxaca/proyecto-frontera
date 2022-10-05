import React, { useEffect, useRef, useState } from 'react';

const slides = [{
                    "color": "#36AE7C", 
                    "title": "Normativa del CONACYT...", 
                    "text": "Este proyecto desarrollado bajo la normatividad de CONACYT, dependiente de la convocatoria de ciencia de frontera es desarrollado por la Universidad Autónoma de San Luis Potosí, la Universidad Nacional Autónoma de México, y el Instituto Politécnico Nacional."
                }, 
                {
                    "color": "#F9D923", 
                    "title": "Nuestro objetivo...", 
                    "text": "El objetivo principal del proyecto es proponer un modelo de inteligencia territorial como instrument de gestion turística en Áreas Naturales Protegidas (ANP) de México, que permita crear alternativas de diversificación de manera sustentable."
                }, 
                {
                    "color": "#EB5353", 
                    "title": "Sistema de información geografica...", 
                    "text": "Este sitio representa el Sistema de Información Geográfica en el que se muestran mapas de las ANP estudiadas durante el Desarrollo del proyecto, así como los atributos turísticos que las component."
                },
                {
                    "color": "#187498", 
                    "title": "Información sobre el inventario turistico...", 
                    "text": "En el sitio también se cuenta con información sobre el inventario turístico de las ANP estudiadas, en el que se mencionan lso recursos y atractivos turísticos existentes, información sobre planes de manejo de área y datos recabados en las actividades de campo realizadas en cada ANP."
                },
                {
                    "color": "#FFAD60", 
                    "title": "Plan de desarrollo nacional...", 
                    "text": "El proyecto sigue la premisa del plan de Desarrollo Nacional de 2019 en el que se considera la importancia del desarrollo económico del país, considerando que la actividad turística en México es una de las actividades económicas de mayor demanda."
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
