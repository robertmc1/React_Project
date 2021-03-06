import React from "react";
import { connect } from 'react-redux';
import TablaMostrarDatosCity from "../../components/Cities/TarjetasMostrarDatosCity"

const Cities = (props) => {
    console.log(props);
    return(
        <div className={"containerCity"}>
            <TablaMostrarDatosCity/>
        </div>
    );
};

export default connect ((state, props) => {
    return {cities: state.cities}
}) (Cities);