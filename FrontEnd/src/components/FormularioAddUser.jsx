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
            headquarter:'',
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
                                        minLength={2}
                                        maxLength={20}
                                        required
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
                                        minLength={2}
                                        maxLength={20}
                                        required
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
                                        type="email"
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
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone number"
                                        minLength={9}
                                        maxLength={20}
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div id="divFormRight">
                            <div id="divForm" >
                                <p id="textoGrande"><b> Headquarter</b></p>
                                <label htmlFor="Headquarter">Headquarter:</label>
                                <select
                                    name="headquarter"
                                    required
                                    onChange={this.handleInput}
                                >
                                    <option value={""}>Selecciona una opción</option>
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
                                    required
                                    onChange={this.handleInput}
                                >
                                    <option value={""}>Selecciona una opción</option>
                                    <option>Fouter 1</option>
                                    <option>Fouter 2</option>
                                    <option>Fouter 3</option>
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