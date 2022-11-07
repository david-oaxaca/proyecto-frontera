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
                        'name': 'Reserva de la Biosfera Tehuacán-Cuicatlán'
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

  useEffect(() => {
    console.log(option)
  });

  const handleChange = (opt) => {
      setOption(opt);
      setType('');
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
      </section>
      <section className='display-section'>
        {
          (option !== 'Selecciona una reserva' && (type === 'Galeria' || type === '') ) && <OptionsDisplay handleType={handleType} location={option}/>
        }
      </section>
      <section className='viewer-section'>
        {
          (option !== 'Selecciona una reserva' && type !== '' && type !== 'Galeria') && <DocDisplay handleType={handleType}  location={option} type={type}/>
        }
      </section>
      
      
    </main>
  )
}
