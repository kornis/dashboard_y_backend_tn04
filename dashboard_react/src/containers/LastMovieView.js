import React from "react";
import Button from "../components/Buttons/CommonButton";
import Image from "../assets/images/mandalorian.jpg"

function LastMovieView() {
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Last movie in Data Base</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={ {width: "40rem"} } src={Image} alt=" Star Wars - Mandalorian " />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa citationem ratione aperiam voluptatum non corporis ratione aperiam voluptatum quae dolorem culpa ratione aperiam voluptatum?</p>
                    <Button
                        texto="Ver mas detalles"
                        href="/detalles"
                        color="primary"
                    />

                </div>
            </div>
        </div>
    )
}

export default LastMovieView;