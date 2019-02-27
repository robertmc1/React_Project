import React from "react";
import {Link} from 'react-router-dom';
import TarjetasTeam from "../../components/Teams/TarjetasTeam";




const Teams = (props) => {
    console.log(props);
    return (
        <div>
            <div className={"container"} >
                <TarjetasTeam/>
                <TarjetasTeam/>
                <TarjetasTeam/>
                <TarjetasTeam/>
                <TarjetasTeam/>
                <TarjetasTeam/>
                <TarjetasTeam/>
                <TarjetasTeam/>
            </div>
            <Link to="/Teams/TeamsForm" className="boton_4" >+</Link>


        </div>

    );
};

export default Teams;