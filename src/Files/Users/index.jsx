import React from 'react';
import { connect } from 'react-redux';
import TablaMostrarDatosUser from "../../components/TablaMostrarDatosUser";

const Users = (props) => {
    console.log(props);
    return(
        <div>
            <TablaMostrarDatosUser/>
        </div>
    );
};

export default connect ((state) => {
    return {user: state.user}
}) (Users);