import  React, {Component} from 'react';
import {user} from './user.json';
import FormularioAddUser from './FormularioAddUser';


class TablaMostrarDatosUser extends Component{
    constructor(){
        super();

        this.state = {
            user
        };
        this.handleAddUser = this.handleAddUser.bind(this)
    }

    handleAddUser(users){
        this.setState({
            user:[...this.state.user,users]
        })
    }



    render(){
        const user = this.state.user.map((user,i) => {
            return(
                <div className="card">

                    <div className="grid-container">
                        <div id="name">
                            {user.name}
                        </div>

                        <div id="surname">
                            {user.surname}
                        </div>

                        <div id="rol">
                            {user.role}
                        </div>

                        <div id="role">
                            {user.headquorter}
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
                            Headquorter
                        </div>
                    </div>
                </nav>
                <div>
                    {user}
                </div>

                <FormularioAddUser onAddUser={this.handleAddUser}/>

            </div>
        )
    }
}


export default TablaMostrarDatosUser;