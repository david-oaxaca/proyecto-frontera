import React from 'react'
import InfoCard from './InfoCard'
import '../../Assets/Styles/infocard.scss';
import Investigador from "../../Assets/Images/investigador.jpg";

const cards = [
    {
        id: 1,
        name: 'Investigador #1',
        imageSource: Investigador,
        directory: 'https://www.cic.ipn.mx/index.php/inicio-cic/directoriocic'
    },
    {
        id: 2,
        name: 'Investigador #2',
        imageSource: Investigador,
        directory: 'https://www.cic.ipn.mx/index.php/inicio-cic/directoriocic'
    },
    {
        id: 3,
        name: 'Investigador #3',
        imageSource: Investigador,
        directory: 'https://www.cic.ipn.mx/index.php/inicio-cic/directoriocic'
    },
    {
        id: 4,
        name: 'Investigador #4',
        imageSource: Investigador,
        directory: 'https://www.cic.ipn.mx/index.php/inicio-cic/directoriocic'
    }
]


const CardDisplay = () => {
  return (
    <div className='container d-flex justify-content-center align-items-top'>
        <div className='card-grid'>
            {
                cards.map(card => (
                    <div className="col-size" key={card.id}>
                        <InfoCard title={card.name} directory={card.directory} imageSource={card.imageSource}/>    
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default CardDisplay;