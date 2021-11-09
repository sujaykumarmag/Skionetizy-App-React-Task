import React from "react";
import "../styles/Task2.css";

function Pointers() {
    return(
        <div className="comment">
            <div><img className="image" src="./Images/dwayne-johnson.jpg" alt="Dwayne Johnson" /></div>
            <div className="details"><h2>Rahul Gupta</h2>
            <p>2 months ago</p>
            <h2 style={{fontWeight:"900"}}><strong>This is a Great Post</strong></h2>
            </div>
        </div>
    );
}

export default Pointers;