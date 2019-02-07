import React from "react";
import { connect } from 'react-redux';
import TablaMostrarDatosCity from "../../components/TarjetasMostrarDatosCity"

const Cities = (props) => {
    console.log(props);
    return(
        <div className={"display-in-box"}>
            <TablaMostrarDatosCity/>
        </div>
    );
};

export default connect ((state, props) => {
    return {cities: state.cities}
}) (Cities);