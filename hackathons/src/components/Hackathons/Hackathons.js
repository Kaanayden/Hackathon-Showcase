import React from "react";
import "./Hackathons.css";

const Hackathons = ({hack})=>{
    
    const {name, submissionStartDate, submissionEndDate, website, image, description, organizator, prize} = hack; 
    return(
        <div className="outer">
            <div className="inner">
                <div className="title">{name}</div>
                <div className="date">Starts at: {submissionStartDate} - Ends at: {submissionEndDate}</div>
                <div className="prize">Total prize is: {prize}$</div>
            </div>
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