import React from "react";
import TarjetasIdea from "../../components/TarjetasIdeas";
import {Link} from "react-router-dom";

const Ideas = (props) => {
    return (
        <div  className={"container"}>
            <TarjetasIdea/>
            <Link to="/Ideas/IdeasForm" className="boton_4" >+</Link>
        </div>
    );
};



export default Ideas;