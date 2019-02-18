import React, {Component} from "react";

class FormularioTeams extends Component {
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
            <div className={"teamForm1"}>
                <form  method="post">
                    <div className={"TFTitle"}>
                        Editar team
                    </div>

                    <div className={"body"}>
                        <div className={"divs"}>
                            <div className={"subtitles"}>
                                Idea
                            </div>
                            <div>
                                <p>Please select the idea that the team will be developing.</p>
                            </div>
                            <div className={"BMdiv"}>
                                <div className={"subtitles3"}>
                                    <div>Selected idea</div>
                                </div>
                                <div className={"blockedInfo"}>
                                    <div>Super APP</div>
                                </div>
                            </div>
                            <div className={"BMdiv"}>
                                <div className={"subtitles3"}>
                                    <div>Change idea</div>
                                </div>
                                <div className={"selectIdea"}>
                                    <select
                                        name="slectIdea"
                                        required
                                    >
                                        <option value={""}>Selecciona una opción</option>
                                        <option>The SaaS</option>
                                        <option>XXXXX</option>
                                        <option>YYYYY</option>
                                    </select>
                                </div>
                            </div>



                            <div className={"subtitles"}>
                                Headquarter
                            </div>
                            <div>
                                <p>Please select the headquarter where the team is located.</p>
                            </div>
                            <div className={"BMdiv"}>
                                <div className={"subtitles3"}>
                                    <div>Selected city</div>
                                </div>
                                <div className={"blockedInfo"}>
                                    <div>Madrid</div>
                                </div>
                            </div>
                            <div className={"BMdiv"}>
                                <div className={"subtitles3"}>
                                    <div>Change city</div>
                                </div>
                                <div className={"selectIdea"}>
                                    <select
                                        name="slectIdea"
                                        required
                                    >
                                        <option value={""}>Selecciona una opción</option>
                                        <option>Madrid</option>
                                        <option>Bilbao</option>
                                        <option>Valencia</option>
                                    </select>
                                </div>
                            </div>


                            <div className={"subtitles"}>
                                Selected Mebers
                            </div>
                            <div>
                                <p>Please select the team members and select their roles.</p>
                            </div>

                            <div className={"BMdiv"}>
                                <div className={"subtitles3"}>
                                    <div>Julia Martx</div>
                                    <div>Bobby Murphy</div>
                                    <div>Cliff Hopkins</div>
                                </div>
                                <div className={"blockedInfo"}>
                                    <div>CEO</div>
                                    <div>CTO</div>
                                    <div>CMO</div>
                                </div>
                            </div>


                            <div className={"BMdiv"}>
                                <div>
                                    <div className={"subtitles3"}>
                                        <div>Add Members</div>
                                    </div>
                                    <div className={"selectIdea"}>
                                        <select
                                            name="slectIdea"
                                            required
                                        >
                                            <option value={""}>Selecciona una opción</option>
                                            <option>rrrrrrrrr</option>
                                            <option>ttttttttt</option>
                                            <option>yyyyyyyyy</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <div className={"subtitles3"}>
                                        <div>with role</div>
                                    </div>
                                    <div className={"selectIdea"}>
                                        <select
                                            name="slectIdea"
                                            required
                                        >
                                            <option value={""}>Selecciona una opción</option>
                                            <option>rrrrrrrrr</option>
                                            <option>ttttttttt</option>
                                            <option>yyyyyyyyy</option>
                                        </select>
                                    </div>
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


export default FormularioTeams;

