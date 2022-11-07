import React, { useState, useEffect } from 'react'
import Select from '../Components/Explorar/Select';
import OptionsDisplay from '../Components/Explorar/OptionsDisplay';
import AboutInfo from '../Components/Explorar/AboutInfo';
import DocDisplay from '../Components/Documentos/DocDisplay';
import '../Assets/Styles/explorar.scss';

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

export default function Explorar() {
  const [option, setOption] = useState('Selecciona una reserva');
  const [type, setType] = useState('');
  const [display, setDisplay] = useState(1);

  useEffect(() => {
    console.log(option)
  });

  function showDisplay(){
    setDisplay(-1 * display);
  }

  const handleChange = (opt) => {
      setOption(opt);
  }

  const handleType = (type) => {
    setType(type);
  }



  return (
    <main className='main-bg'>
      <section className='select-section'>
        <h1>Consulta el &Aacute;rea Natural Protegida de tu inter&eacute;s:</h1>
        <Select handleChange={handleChange} options={searchOptions}/>
      </section>
      <section className='display-section'>
        {
          (option === 'Selecciona una reserva') && <AboutInfo/>
        }
        {
          (option !== 'Selecciona una reserva') && <OptionsDisplay handleType={handleType}  location={option}/>
        }
      </section>
      <section>
        <DocDisplay location={option} type={type}/>
      </section>
      
    </main>
  )
}
