import React, {Component} from "react";

class FormularioIdea extends Component {
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
                <form  method="post">
                    <div>
                        Editar idea
                    </div>

                    <div>
                        <div>
                            <div>
                                Name
                            </div>
                            <div>
                                <input type="text"/>
                            </div>
                        </div>

                        <div>
                            <div>
                                Business model
                            </div>
                            <div>
                                <div>Type</div>
                                <select name="role"
                                        onChange={this.handleInput}>
                                    <option>Fouter</option>
                                    <option>XXXXX</option>
                                    <option>YYYYY</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <div>
                                Description
                            </div>
                            <div >
                                <p>Érase una vez en un antiguo reino, existió un rey que tenía tres hijos. Un buen día,
                                    el rey cayó bajo una terrible enfermedad, y con el paso del tiempo, perdió las ganas
                                    de comer, de reír y hasta de conversar. Preocupados por la salud de su padre, los tres
                                    príncipes buscaban cualquier remedio que ayudara a curarlo, pero todos sus intentos
                                    eran en vano.
                                </p>
                            </div>
                        </div>

                        <div>
                            <div>
                                NOT AVAILABLE
                            </div>
                            <div>
                                <div>
                                    <div>Headquarter:</div>
                                    <div>Team name:</div>
                                    <div>Blocked date:</div>
                                </div>
                                <div>
                                    <div>Madrid</div>
                                    <div>Real Unicorn</div>
                                    <div>17/02/2019</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <button href="" className="boton_1" type="submit">Aceptar</button>
                </form>
            </div>
        );
    }
}


export default FormularioIdea;

