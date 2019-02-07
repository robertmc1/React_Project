import React, {Component} from "react";
import {user} from "./data/user"

class EditIdea extends Component {
    constructor(){
        super();
        this.state = {
            ideaName:"",
            bussinesMode:"",
            description:"",
            hedquorter:"",
            teamName:"",
            blockedDate:"",
        }
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
                                <p id="textoGrande"><b> Headquorter</b></p>
                                <label htmlFor="Headquorter">Headquorter:</label>
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
                                <label htmlFor="Rol">Role:</label>
                                <select
                                    name="role"
                                    onChange={this.handleInput}>
                                    <option>Fouter</option>
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