import React, {useRef} from "react";
import Button from "../../Buttons/CommonButton";
import Image from "../../../assets/images/mandalorian.jpg"

function LastMovieInDB({ movie }) {
    const divRef = useRef();

    if(movie && movie.Response == "False"){
        if(divRef.current){
            divRef.current.style.backgroundColor = "red"
        }
    }
    return(
        <div className="col-lg-6 mb-4" ref={divRef} >
            <div className="card shadow mb-4">
                {
                    !movie && <h1>Loading...</h1>
                }
                {
                    movie &&
                    <>
                        <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold text-gray-800">{ movie.Title }</h5>
                        </div>
                        <div className="card-body">
                            <div className="text-center">
                                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={ {width: "40rem"} } src={ movie.Poster } alt=" Star Wars - Mandalorian " />
                            </div>
                            <p>{ movie.Plot }</p>
                            <Button
                                texto="Ver mas detalles"
                                href="/detalles"
                                color="primary"
                            />

                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default LastMovieInDB;