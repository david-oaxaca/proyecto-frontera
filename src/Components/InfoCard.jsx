import React from "react";

const InfoCard = (props) => {
    return(
        <div className="card">
            <div className="card-body">
                <img src={props.imageSource} alt="" className="img-thumbnail"/>
                <h5 className="card-title">{props.title}</h5>
                <a className="btn btn-outline-success rounded-0" href={props.directory} target="_new">Leer m&aacute;s &gt;&gt;</a>
            </div>
        </div>
    )
};

export default InfoCard;