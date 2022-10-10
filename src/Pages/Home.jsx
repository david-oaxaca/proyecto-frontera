import React from 'react';
import Slideshow from '../Components/Slideshow';
import CardDisplay from '../Components/InfoDisplay/CardDisplay';
import '../Assets/Styles/homepage.scss'

export default function Home() {
    return (
      <main>
        <section>
          <Slideshow/>
        </section>
        <section>
          <div className='wrapper'>
            <div className='info-display'>
              <h1>Investigadores</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, nesciunt quis amet earum aperiam magnam, provident harum voluptatibus autem animi totam voluptas? Similique dolores ipsum laudantium ad aliquam. Delectus, autem.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, nesciunt quis amet earum aperiam magnam, provident harum voluptatibus autem animi totam voluptas? Similique dolores ipsum laudantium ad aliquam. Delectus, autem.
              </p>
              <CardDisplay/>
            </div>
          </div>
        </section>
      </main>
  )
}