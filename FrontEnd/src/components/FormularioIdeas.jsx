import React, {Component} from "react";
import {connect} from "react-redux";
import {addIdea} from "../redux/actions/ideaAction";

class FormularioIdeas extends Component {
    constructor(){
        super();
        this.state = {
            name:"",
            businessModelId: "",
            description: "",
            teamId: ""
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
        const IDEA = this.state;
        this.addCityHandle(IDEA)
    };

    addCityHandle = (IDEA) => {
        this.props.onAddIdea(IDEA);
    };

    render() {
        return (
            <div className={"teamForm1"}>
                <form  method="post"  onSubmit={this.handleSubmit}>
                    <div className={"TFTitle"}>
                        Editar idea
                    </div>

                    <div className={"body"}>
                        <div className={"divs"}>
                            <div className={"subtitles"}>
                                Name
                            </div>
                            <div>
                                <input
                                    onChange={this.handleInput}
                                    type="text"
                                    name={"name"}
                                    minLength={3}
                                    maxLength={30}
                                    required
                                />
                            </div>
                        </div>

                        <div className={"divs"}>
                            <div className={"subtitles"}>
                                Business model
                            </div>
                            <div className={"BMdiv"}>
                                <div>
                                    Type:
                                    <select
                                        name="role"
                                        required
                                        onChange={this.handleInput}
                                    >
                                        <option value={""}>Selecciona una opción</option>
                                        <option>Fouter</option>
                                        <option>XXXXX</option>
                                        <option>YYYYY</option>
                                    </select>
                                </div>

                            </div>
                        </div>

                        <div className={"divs"}>
                            <div className={"subtitles"}>
                                Description
                            </div>
                            <div >
                                <textarea
                                    onChange={this.handleInput}
                                    name="description"
                                    placeholder="Introduce una pequeña descripción"
                                    minLength={10}
                                    maxLength={500}
                                    required
                                >
                                </textarea>
                            </div>
                        </div>

                        <div className={"divs"}>
                            <div className={"RedSubtitle"}>
                                NOT AVAILABLE
                            </div>
                            <div className={"BMdiv"}>
                                <div className={"subtitles3"}>
                                    <div>Headquarter:</div>
                                    <div>Team name:</div>
                                    <div>Blocked date:</div>
                                </div>
                                <div className={"blockedInfo"}>
                                    <div>Madrid</div>
                                    <div>Real Unicorn</div>
                                    <div>17/02/2019</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <button className="boton_FT" type="submit">Aceptar</button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onAddIdea: (IDEA) => {
            dispatch (addIdea(IDEA));
        }
    }
};

export default connect (null, mapDispatchToProps)(FormularioIdeas);