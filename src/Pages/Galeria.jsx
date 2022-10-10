import React, { useState, useEffect } from 'react'
import Select from '../Components/Galeria/Select';
import OptionsDisplay from '../Components/Galeria/OptionsDisplay';
import AboutInfo from '../Components/Galeria/AboutInfo';
import '../Assets/Styles/galery.scss';

let searchOptions = [
                      {
                        'name': 'Selecciona una reserva'
                      },
                      {
                        'name': 'Reserva de la Biosfera Tehuacán-Cuicatlón'
                      },
                      {
                        'name': 'Reserva Ecológica Cuxtal'
                      },
                      {
                        'name': 'Reserva de la Biosfera Sierra Gorda'
                      }
                    ]

export default function Galeria() {
  const [option, setOption] = useState('Selecciona una reserva');

  useEffect(() => {
    console.log(option)
  });

  const handleChange = (opt) => {
      setOption(opt);
  }

  return (
    <main className='main-bg'>
      <section className='search-section'>
        <h1>Consulta el &Aacute;rea Natural Protegida de tu inter&eacute;s:</h1>
        <Select handleChange={handleChange} options={searchOptions}/>
      </section>
      <section className='display-section'>
        {
          (option === 'Selecciona una reserva') && <AboutInfo/>
        }
        {
          (option !== 'Selecciona una reserva') && <OptionsDisplay location={option}/>
        }
      </section>
      
    </main>
  )
}
