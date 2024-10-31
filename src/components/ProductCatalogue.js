import React from "react";

function ProductCatalogue(props)
{
    return(
        <div className="col-3 catalogueList">
            <div className="row footer-rows">
                <div className="col-12">
                    <h2>{props.title}</h2>
                </div>
            </div>
            <div className="row styled-list">
                <div className="col-12">
                    <ul>
                        <li>{props.bulletOne}</li>
                        <li>{props.bulletTwo}</li>
                        <li>{props.bulletThree}</li>
                    </ul>
                </div>
            </div>
            <div className="row footer-subtext">
                <div className="col-12">
                    Lorem ipsum dolor sit amet <br />
                    consectetur adipisicing elit. <br />
                    Sunt, placeat!
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <button>Shop Now</button>
                </div>
            </div> 
        </div>
    )
}

export default ProductCatalogue;