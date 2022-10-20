import React from "react";
import '../../Assets/Styles/infocard.scss';

const InfoCard = (props) => {
    return(
        <div className="card container-shadow">
            <div className="card-padding">
                <div className="ratio ratio-1x1 rounded-circle overflow-hidden">
                    <img src={props.imageSource} alt="" className="card-img-top img-cover"/>
                </div>
                <div className="info-card-wrapper">
                    <h4 className="card-info primary-color-bg">{props.title}</h4>
                    <p>Investigador en el lab. de procesamiento geospacial del CIC.</p>
                </div>
                <a className="card-button" href={props.directory} target="_new">Leer m&aacute;s &gt;&gt;</a>
            </div>
        </div>
    )
};

export default InfoCard;