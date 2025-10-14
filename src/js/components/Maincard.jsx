import React from "react";

const Maincard = ({ saludos }) => {
    return (
        <div>
            <div className="card">
                {/* <div className="card-header">
                    Featured
                </div> */}
                <div className="card-body">
                    <h5 className="card-title">{saludos[0].encabezado}</h5>
                    <p className="card-text">{saludos[0].texto}</p>
                    <a href="#" className="btn btn-primary">{saludos[0].boton}</a>
                </div>
            </div>
        </div>
    )
}



export default Maincard;