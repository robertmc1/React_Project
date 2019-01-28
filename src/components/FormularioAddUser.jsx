import  React, {Component} from 'react';


class FormularioAddUser extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            surname:'',
            mail:'',
            phone:'',
            headquorter:'Australia',
            role:'Fouter'
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
    }

    handleInput(e){
        const {value, name} = e.target;
        this.setState({
            [name]: value
        });
        console.log(this.state)
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onAddUser(this.state);

    }

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
                                        type="text"
                                        name="mail"
                                        placeholder="Email"
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
                                <p id="textoGrande"><b> Headquorter</b></p>
                                <label htmlFor="Headquorter">Headquorter:</label>
                                <select
                                    name="headquorter"
                                    onChange={this.handleInput}>
                                    <option value="au">Australia</option>
                                    <option value="ca">Canada</option>
                                    <option value="usa">USA</option>
                                </select>
                            </div>
                            <div id="divForm">
                                <p id="textoGrande"> Role</p>
                                <p id="textoGrande"> Role</p>
                                <label htmlFor="Rol">Role:</label>
                                <select
                                    name="role"
                                    onChange={this.handleInput}>
                                    <option value="au">Fouter</option>
                                    <option value="ca">XXXXX</option>
                                    <option value="usa">YYYYY</option>
                                </select>
                            </div>
                            <button href="" className="boton_1" type="submit">Aceptar</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
export default FormularioAddUser;