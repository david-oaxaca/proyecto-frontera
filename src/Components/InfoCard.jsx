import React from "react";
import '../Assets/Styles/infocard.scss'

const InfoCard = (props) => {
    return(
        <div className="card container-shadow">
            <div className="card-body">
                <div class="ratio ratio-1x1 rounded-circle overflow-hidden">
                    <img src={props.imageSource} alt="" className="card-img-top img-cover"/>
                </div>
                <div className="wrapper">
                    <h5 className="card-info primary-color-bg">{props.title}</h5>
                    <p>Investigador en el lab. de procesamiento geospacial del CIC.</p>
                </div>
                <a className="btn btn-outline-success" href={props.directory} target="_new">Leer m&aacute;s &gt;&gt;</a>
            </div>
        </div>
    )
};

export default InfoCard;