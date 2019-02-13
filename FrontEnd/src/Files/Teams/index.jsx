import React from "react";
import Tarjetas from "../../components/Tarjetas";

const Teams = (props) => {
    console.log(props);
    return (
        <div className={"container"} >
            <Tarjetas/>
            <Tarjetas/>
            <Tarjetas/>
            <Tarjetas/>
            <Tarjetas/>
            <Tarjetas/>
            <Tarjetas/>
            <Tarjetas/>
        </div>
    );
};

export default Teams;