import React from "react";
import "./Hackathons.css";

const Hackathons = (props)=>{
    
    const {name, submissionDate, website, image, description, organizator, prize} = props 
    console.log(name)
    return(
        <div className="outer">
            <h1 className="title">{name}</h1>
            <h2 className="date">Starts at: {submissionDate.toString()} - Ends at: {submissionDate.toString()}</h2>
            <div className="prize">Total prize is: {prize}$</div>
            <div className="div-grid">
                <a href={website}><img className="image" src = {image}/></a>
                <div className="description">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )


}
export default Hackathons;