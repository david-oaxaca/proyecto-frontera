import React from 'react'
import InfoCard from './InfoCard'
import PlaceHolder from "../Assets/Images/placeholder.png";

const cards = [
    {
        id: 1,
        name: 'Investigador #1',
        imageSource: PlaceHolder,
        directory: 'https://www.cic.ipn.mx/index.php/inicio-cic/directoriocic'
    },
    {
        id: 2,
        name: 'Investigador #2',
        imageSource: PlaceHolder,
        directory: 'https://www.cic.ipn.mx/index.php/inicio-cic/directoriocic'
    },
    {
        id: 3,
        name: 'Investigador #3',
        imageSource: PlaceHolder,
        directory: 'https://www.cic.ipn.mx/index.php/inicio-cic/directoriocic'
    }
]


const CardDisplay = () => {
  return (
    <div className='container d-flex justify-content-center align-items-top'>
        <div className='row'>
            {
                cards.map(card => (
                    <div className="col-md-4" key={card.id}>
                        <InfoCard title={card.name} directory={card.directory} imageSource={card.imageSource}/>    
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default CardDisplay