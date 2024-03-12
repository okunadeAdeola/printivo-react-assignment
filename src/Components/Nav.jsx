// import React from 'react';
import whatsappimg from '../assets/images/download.svg'
import nigeriaflagimg from '../assets/images/flag.svg'


function Nav() {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand fw-bold fs-6" href="https://printivo.com/cost-calculator" style={{ color: "grey", }}>Cost Calculator</a>
                <button
                    className="navbar-toggler d-lg-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId"
                    aria-controls="collapsibleNavId"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon">
                    
                        
                    </span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active fw-bold fs-6" href="https://printivo.com/stores" aria-current="page" style={{ color: "grey", marginTop:"5px", width:"190px" }}>
                                Discover Stores
                                <span className="visually-hidden">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-bold fs-6" href="https://printivo.com/track" style={{ color: "grey",  marginTop:"5px" }}>Track Orders</a>
                        </li>
                        <li className="nav-item" id='help'>
                            <a className="nav-link fw-bold fs-6" href="#" style={{ color: "grey",  marginTop:"5px", marginLeft:"165px" }}>Need Help?Call: <a href="tel:234.201.330.6047" className="text-decoration-none" style={{ marginTop:"5px"}}><span>+2342013306047</span></a></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-bold fs-6" href="https://wa.me/2348091085333"><img src={whatsappimg} alt="" style={{marginLeft:50,}}/></a>
                        </li>
                        <form className="d-flex my-2 my-lg-0">
                            <button
                                className=""
                                type="submit" style={{marginLeft:"150", width: "150px" , borderRadius: "30px", border:"1px solid #cbcac8"}}
                            >
                               <img src={nigeriaflagimg} alt="" /> Nigeria
                            </button>
                        </form>
                    </ul>

                </div>
            </div>
        </nav>
    );
}

export default Nav;
