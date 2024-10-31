import React from "react";

function Services(props)
{
    return(
        <div className="col-3 servicesList">
            <ul>
                <li>
                    <img src={props.img} alt="" />
                </li>
                <li>
                    <p>
                        <span className="service-name">
                            <b><span className="service-primary-font">{props.title}</span></b><br />
                            <b><span className="service-secondary-font">{props.titleSubtext}</span></b>
                        </span>
                        
                    </p>
                </li>
                <li>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quibusdam <br />
                        quia necessitatibus! Facilis obcaecati ex possimus quo harum nobis <br />
                        reprehenderit, enim dignissimos cupidtate commodi facere laborum sequi <br />
                        earum quibusdam eaque.
                    </p>
                </li>
            </ul>
        </div>
    )
}

export default Services;