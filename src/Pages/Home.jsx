import React from 'react';
import Slideshow from '../Components/Slideshow';
import '../Assets/Styles/homepage.scss'

export default function Home() {
    return (
      <main>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous"></link>
        <section>
          <Slideshow/>
        </section>
        <section>
          <div className='wrapper'>
            <div className='rating-cell'>
              <h1>Investigadores</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, nesciunt quis amet earum aperiam magnam, provident harum voluptatibus autem animi totam voluptas? Similique dolores ipsum laudantium ad aliquam. Delectus, autem.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius facilis iusto iste accusamus consequuntur pariatur magni, est quibusdam incidunt sed facere assumenda aspernatur sunt reprehenderit harum neque totam exercitationem! Ullam.
              </p>
            </div>
            <div className='rating-cell'>
              <h2>Deja una evaluación!</h2>
            </div>
          </div>
        </section>
        <section>
          <h1>About Us</h1>
        </section>
      </main>
  )
}