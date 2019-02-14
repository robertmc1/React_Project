import  React from 'react';
import {connect} from 'react-redux';
import FormularioAddUser from './FormularioAddUser';

const TablaMostrarDatosUser = (props) =>{

        const {user} = props.userR;

        const mapUsers = user.map((item,i) => {
            return(
                <div className="card" key={item.id} id={item.id}>

                    <div className="grid-container" >
                        <div id="name">
                            {item.name}
                        </div>

                        <div id="surname">
                            {item.surname}
                        </div>

                        <div id="role">
                            {item.roleId}
                        </div>
                        <div id="role">
                            {item.headquarter}
                        </div>

                    </div>
                </div>
            )
        });

        return(
            <div id="cuadrogeneral">
                <div id='headTitle' >
                    Add user
                </div>
                <nav >
                    <div  className="grid-container-cabecera">
                        <div>
                            Name
                        </div>
                        <div>
                            Surname
                        </div>
                        <div>
                            Role
                        </div>
                        <div>
                            Headquarter
                        </div>
                    </div>
                </nav>
                <div>
                    {mapUsers}
                </div>
                <FormularioAddUser/>
            </div>
        )
};



const mapStateToProps = (state) => ({
    userR: state
});

export default connect(mapStateToProps, null)(TablaMostrarDatosUser);

// export default connect( (state, props) => {
//     return {
//         userR: state
//     }
// })(TablaMostrarDatosUser);