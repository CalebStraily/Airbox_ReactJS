import React from "react";
import Logo from "../media/AirboxLogoTrimmed.png";

function Header()
{
    return(
        <div className="row">
            <Navbar />
            <Hero />
        </div>
    )
    
    function Navbar()
    {
        return(
            <div className="row headerRow">
                <div className="col-6">
                    <ul>
                        <li>
                            <img className="img-fluid" src={Logo} alt="" />
                        </li>
                        <li>
                            <p>
                                <span className="logo-name">AIR<span className="logo-box">BOX</span></span> <br />
                                <span className="logo-provider">Hosting Provider</span>
                            </p>
                        </li>
    
                    </ul>
                </div>
                <div className="col-6">
                    <ul className="header-navbar">
                        <li>Home</li>
                        <li>Web Hosting</li>
                        <li>Reseller Hosting</li>
                        <li>Services</li>
                        <li>Blog</li>
                        <li>Contacts</li>
                    </ul>
                </div>
            </div>
        )
    }

    function Hero()
    {
        return(
            <div className="row text-center heroRow">
                <div className="col-12">
                    <p>
                        <span className="motto-primary-font"><b>24/7 Real Person</b></span> <br />
                        <span className="motto-secondary-font"><b>Customer Support</b></span> <br />
                        <span className="motto-primary-font"><b>For all our clients</b></span>
                    </p>
                </div>
                <div className="col-12">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quibusdam <br />
                        quia necessitatibus! Facilis obcaecati ex possimus quo harum nobis <br />
                        reprehenderit, enim dignissimos cupidtate commodi facere laborum sequi <br />
                        earum quibusdam eaque.
                    </p>
                </div>
                <div className="col-12">
                    <button>Try Now</button>
                </div>
            </div>
        )
    }

}

export default Header;