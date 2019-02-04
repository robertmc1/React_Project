import  React, {Component} from 'react';

class Tarjetas extends Component {
    constructor(){
        super();
    }

    render() {
        return(
            <div className={"tarjeta2"}>
                <div className={"tarjeta-titulo"}>
                    REAL UNICORN
                    <button href="" className="boton_2" type="submit">View</button>
                </div>

                <div className={"tarjeta-dentro"}>
                    <div id={"division-tj"}>
                        <div>
                            <div>Idea:</div>
                            <div>City:</div>
                        </div>
                        <div>
                            <div>Super App</div>
                            <div>Madrid</div>
                        </div>
                    </div>

                    <div className={"titulo"}>
                        Team members
                    </div>
                    <div id={"division-tj"}>
                        <div>
                            <div>CEO</div>
                            <div>CTO</div>
                            <div>CMO</div>
                        </div>
                        <div>
                            <div>Julia Hartz</div>
                            <div>Baby Murphy</div>
                            <div>Cliffi Hapiki</div>
                        </div>

                    </div>
                    <div className={"titulo"}>
                        Demium teams
                    </div>
                    <div id={"division-tj"}>
                        <div>
                            <div>PM</div>
                            <div>TM</div>
                        </div>
                        <div>
                            <div>Pepito Perez</div>
                            <div>Pepita Perez</div>
                        </div>
                    </div>

                </div>

            </div>
        )

    };
}

export default Tarjetas;