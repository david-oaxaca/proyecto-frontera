import React from 'react';
import Slideshow from '../Components/Slideshow';
import Rating from '../Components/Rating';
import CardDisplay from '../Components/CardDisplay';
import '../Assets/Styles/homepage.scss'

export default function Home() {
    return (
      <main>
        <section>
          <Slideshow/>
        </section>
        <section>
          <div className='wrapper'>
            <div className='info-cell'>
              <h1>Investigadores</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, nesciunt quis amet earum aperiam magnam, provident harum voluptatibus autem animi totam voluptas? Similique dolores ipsum laudantium ad aliquam. Delectus, autem.
              </p>
              <CardDisplay/>
            </div>
            <div className='rating-cell'>
              <h2>¡Deja una evaluación!</h2>
              <h5>¿Comó ha sido tu experiencia en la pagina?</h5>
              <Rating/>
            </div>
          </div>
        </section>
      </main>
  )
}