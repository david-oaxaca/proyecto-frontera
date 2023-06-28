import React, { useEffect, useRef, useState } from "react";

const slides = [
  {
    color: "#F6D186",
    image_url:
      "https://drive.google.com/uc?export=view&id=1o_A9QtuLBIQG0WE9Hl_n2RRYBkL7yPkx",
    title: "Proyecto de Ciencia de Frontera",
    text: "Modelo de geointeligencia territorial como instrumento de gestión turística en áreas naturales protegidas de México",
  },
  {
    color: "#36AE7C",
    image_url:
      "https://drive.google.com/uc?export=view&id=1tvabzpMwjruLwaW_n1l0ErBRI_11PZRy",
    title: "Normativa del CONACYT...",
    text: "Este proyecto desarrollado bajo la normatividad de CONACYT, dependiente de la convocatoria de ciencia de frontera es desarrollado por la Universidad Autónoma de San Luis Potosí, la Universidad Nacional Autónoma de México, y el Instituto Politécnico Nacional.",
  },
  {
    color: "#F9D923",
    image_url:
      "https://drive.google.com/uc?export=view&id=1qtmTJeNkY8TPnjobQdxhB5NM3w7XNggx",
    title: "Nuestro objetivo...",
    text: "El objetivo principal del proyecto es proponer un modelo de inteligencia territorial como instrument de gestion turística en Áreas Naturales Protegidas (ANP) de México, que permita crear alternativas de diversificación de manera sustentable.",
  },
  {
    color: "#EB5353",
    image_url:
      "https://drive.google.com/uc?export=view&id=1o_A9QtuLBIQG0WE9Hl_n2RRYBkL7yPkx",
    title: "Sistema de información geografica...",
    text: "Este sitio representa el Sistema de Información Geográfica en el que se muestran mapas de las ANP estudiadas durante el Desarrollo del proyecto, así como los atributos turísticos que las component.",
  },
  {
    color: "#187498",
    image_url:
      "https://drive.google.com/uc?export=view&id=1tvabzpMwjruLwaW_n1l0ErBRI_11PZRy",
    title: "Información sobre el inventario turistico...",
    text: "En el sitio también se cuenta con información sobre el inventario turístico de las ANP estudiadas, en el que se mencionan lso recursos y atractivos turísticos existentes, información sobre planes de manejo de área y datos recabados en las actividades de campo realizadas en cada ANP.",
  },
  {
    color: "#FFAD60",
    image_url:
      "https://drive.google.com/uc?export=view&id=1o_A9QtuLBIQG0WE9Hl_n2RRYBkL7yPkx",
    title: "Plan de desarrollo nacional...",
    text: "El proyecto sigue la premisa del plan de Desarrollo Nacional de 2019 en el que se considera la importancia del desarrollo económico del país, considerando que la actividad turística en México es una de las actividades económicas de mayor demanda.",
  },
];

const delay = 3500;

const Slideshow = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="carousel-control left-control"
        onClick={() => {
          setIndex(index === 0 ? slides.length - 1 : index - 1);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="white"
          className="bi bi-arrow-bar-left"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5zM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5z"
          />
        </svg>
      </div>

      <div
        className="slider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {slides.map((slideObject, index) => (
          <div
            className="slide"
            key={index}
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)), url(${slideObject.image_url})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="slide-content">
              <h1>{slideObject.title}</h1>
              <p>{slideObject.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div
        className="carousel-control right-control"
        onClick={() => {
          setIndex(index === slides.length - 1 ? 0 : index + 1);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="white"
          className="bi bi-arrow-bar-right"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z"
          />
        </svg>
      </div>

      <div className="dots">
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={"slideshowDot"}
            style={{
              backgroundColor: `${index === idx ? "#FFFFFF" : "#C4C4C4"}`,
            }}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
