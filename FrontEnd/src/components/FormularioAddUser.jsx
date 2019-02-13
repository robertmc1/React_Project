import  React, {Component} from 'react';
import {connect} from 'react-redux';

import {addUser} from '../redux/actions/userActions';

class FormularioAddUser extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            surname:'',
            mail:'',
            phone:'',
            headquorter:'',
            roleId:''
        };
    }

    handleInput = (e) => {
        const {value, name} = e.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const USER = this.state;
        this.addUserHandle(USER)
    };

    addUserHandle = (USER) => {
        this.props.onAddUser(USER);
    };

    render() {
        return (
            <div>
                <form  method="post"  onSubmit={this.handleSubmit}>
                    <div id='headTitleBlue' >
                        User
                    </div>

                    <div className="grid-container-form" id="paddingForm">
                        <div >
                            <div id="divForm" >
                                <div>
                                    <label htmlFor="name" id="textoGrande">Name:</label>
                                </div>
                                <div>
                                    <input
                                        onChange={this.handleInput}
                                        type="text"
                                        name="name"
                                        placeholder="First Name"
                                    />
                                </div>
                            </div>
                            <div id="divForm">
                                <div>
                                    <label htmlFor="name" id="textoGrande">Surname:</label>
                                </div>
                                <div>
                                    <input
                                        onChange={this.handleInput}
                                        type="text"
                                        name="surname"
                                        placeholder="Last name"
                                    />
                                </div>
                            </div>
                            <div id="divForm">
                                <div>
                                    <label htmlFor="mail" id="textoGrande">E-mail:</label>
                                </div>
                                <div>
                                    <input
                                        onChange={this.handleInput}
                                        type="text/javascript"
                                        name="mail"
                                        placeholder="Email"
                                        required

                                    />

                                </div>
                            </div>
                            <div id="divForm">
                                <div>
                                    <label htmlFor="phone" id="textoGrande">Phone:</label>
                                </div>

                                <div>
                                    <input
                                        onChange={this.handleInput}
                                        type="text"
                                        name="phone"
                                        placeholder="Phone number"

                                    />
                                </div>
                            </div>
                        </div>

                        <div id="divFormRight">
                            <div id="divForm" >
                                <p id="textoGrande"><b> Headquarter</b></p>
                                <label htmlFor="Headquorter">Headquarter:</label>
                                <select
                                    name="headquorter"
                                    onChange={this.handleInput}>
                                    <option>Australia</option>
                                    <option>Canada</option>
                                    <option>USA</option>
                                </select>
                            </div>
                            <div id="divForm">
                                <p id="textoGrande"> Role</p>
                                <label htmlFor="Role">Role:</label>
                                <select
                                    name="roleId"
                                    onChange={this.handleInput}>
                                    <option>Fouter</option>
                                    <option>XXXXX</option>
                                    <option>YYYYY</option>
                                </select>
                            </div>
                            <button href=""
                                    className="boton_1"
                                    type="submit">Aceptar</button>

                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps1 = (dispatch) => {
    return{
        onAddUser: (USER) => {
            dispatch (addUser(USER));
        }
    }
};

export default connect (null, mapDispatchToProps1)(FormularioAddUser);