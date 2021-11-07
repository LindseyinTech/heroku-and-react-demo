import React from "react";
import Card from "./Card"

function Hero ({data}) {

    return (
        <div className="hero">
           <div className="container">
           <Card data={data} />
               </div>
        </div>
    )
}

export default Hero