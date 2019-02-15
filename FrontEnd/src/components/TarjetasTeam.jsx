import  React from 'react';

const TarjetasTeam = (props) => {

        return(
            <div>
                <div className={"tarjetas"}>
                    <div className={"tituloTarjeta"}>
                        REAL UNICORN
                    </div>
                    <div className={"divTj"} >
                        <div>
                            <div>Idea:</div>
                            <div>City:</div>
                        </div>
                        <div>
                            <div>Super App</div>
                            <div>Madrid</div>
                        </div>
                    </div>

                    <div className={"divTitle"}>
                        Team members
                    </div>
                    <div className={"divTj"}>
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
                    <div className={"divTitle"}>
                        Demium teams
                    </div>
                    <div className={"divTj"}>
                        <div>
                            <div>PM</div>
                            <div>TM</div>
                        </div>
                        <div>
                            <div>Pepito Perez</div>
                            <div>Pepita Perez</div>
                        </div>
                        <div>
                            <button href="" className="boton_3" type="submit">View</button>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default TarjetasTeam;