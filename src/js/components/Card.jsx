import React from "react";

const Card = (props) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={props.img} className="card-img-top" alt={props.encabezado} />
            <div className="card-body">
                <h5 className="card-title">{props.encabezado}</h5>
                <p className="card-text">{props.texto}</p>
                <a href="#" className="btn btn-primary">{props.boton}</a>
            </div>
        </div>
    )
}

export default Card;
