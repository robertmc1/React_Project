import  React, {Component} from 'react';


class FormularioAddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            apellido:'',
            email:'',
            telefono:'',
            headquorter:'Australia',
            role:'Fouter'
        };
    }

    render() {
        return (
            <div>
                 <form action="/my-handling-form-page" method="post">
                     <div id='headTitleBlue' >
                         User
                         <div >
                             <input type="submit" value="Submit"/>
                         </div>
                     </div>

                     <div className="grid-container-form" id="paddingForm">
                         <div >
                             <div id="divForm" >
                                 <div>
                                    <label htmlFor="name" id="textoGrande">Name:</label>
                                 </div>
                                 <div>
                                     <input

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
                                     name="country" id="pais"
                                     onChange={this.handleInput}>
                                     <option value="au">Australia</option>
                                     <option value="ca">Canada</option>
                                     <option value="usa">USA</option>
                                 </select>
                             </div>
                             <div id="divForm">
                                 <p id="textoGrande"> Rol</p>
                                 <label htmlFor="Rol">Rol:</label>
                                 <select
                                     name="rol"
                                     onChange={this.handleInput}>
                                     <option value="au">Fouter</option>
                                     <option value="ca">XXXXX</option>
                                     <option value="usa">YYYYY</option>
                                 </select>
                             </div>
                         </div>
                     </div>
                 </form>
            </div>
        );
    }
}
export default FormularioAddUser;
