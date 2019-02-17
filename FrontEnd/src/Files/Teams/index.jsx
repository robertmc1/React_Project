import React from "react";
import TarjetasTeam from "../../components/TarjetasTeam";

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
            <button href="" type="submit" className="boton_4"> + </button>

        </div>

    );
};

export default Teams;