import React from "react";
import TarjetasTeam from "../../components/TarjetasTeam";

const Teams = (props) => {
    console.log(props);
    return (
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
    );
};

export default Teams;