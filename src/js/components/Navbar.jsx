import React from "react";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid bg-secondary text-white">
                    <a className="navbar-brand text-white" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                            <a className="nav-link active text-white" href="#">About</a>
                            <a className="nav-link active text-white" href="#">Services</a>
                            <a className="nav-link active text-white" href="#">Contact</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    )
}
export default Navbar;