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
                             <div>
                                 <label id="textoGrande">Name:</label>
                                 <div>
                                     <input
                                         onChange={this.handleInput}
                                         type="text"
                                         name="name"
                                         placeholder="First Name"
                                         minLength="3"
                                         maxLength="40"
                                         required
                                     />
                                 </div>
                             </div>
                             <div>
                                 <label id="textoGrande">Surname:</label>
                                 <div>
                                     <input
                                         onChange={this.handleInput}
                                         type="text"
                                         name="surname"
                                         placeholder="Last name"
                                         minLength="3"
                                         maxLength="40"
                                         required
                                     />
                                 </div>
                             </div>
                             <div>
                                 <label id="textoGrande">E-mail:</label>
                                 <div>
                                     <input
                                         onChange={this.handleInput}
                                         type="email"
                                         name="email"
                                         placeholder="Email"
                                         required
                                     />
                                 </div>
                             </div>
                             <div>
                                 <label id="textoGrande">Phone:</label>

                                 <div>
                                     <input
                                         onChange={this.handleInput}
                                         type="tel"
                                         name="phone"
                                         placeholder="Phone number"
                                         pattern="[0-9]{9}"
                                         required
                                     />
                                 </div>
                             </div>
                         </div>

                         <div id="divFormRight">
                             <div>
                                 <p id="textoGrande">Headquorter</p>
                                 <label>Headquorter:</label>
                                 <select
                                     name="headquorter"
                                     onChange={this.handleInput}>
                                     <option>Australia</option>
                                     <option>Canada</option>
                                     <option>USA</option>
                                 </select>
                             </div>
                             <div>
                                 <p id="textoGrande">Role</p>
                                 <label>Role:</label>
                                 <select
                                     name="role"
                                     onChange={this.handleInput}>
                                     <option> Fouter</option>
                                     <option>XXXXX</option>
                                     <option>YYYYY</option>
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
