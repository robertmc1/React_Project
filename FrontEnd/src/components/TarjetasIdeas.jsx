import  React from 'react';

const TarjetasTeam = (props) => {
        return(
            <div>
                <div className={"tarjetas"}>
                    <div className={"tituloTarjeta"}>
                         UNICORN SHOP
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
                        Description
                    </div>
                    <div >
                        <div>
                            <p>A computer program can easily produce gibberish - especially if it has been provided with
                                garbage beforehand. This program does something a little different.
                            </p>
                        </div>
                    </div>
                    <div className={"divTitle"}>
                        Demium teams
                    </div>
                    <div className={"divTj"}>
                        <div>
                            <div>Headquarter</div>
                            <div>Team</div>
                        </div>
                        <div>
                            <div>Madrid</div>
                            <div>Real Unicorn</div>
                        </div>
                        <div>
                            <button href="" className="boton_3" type="submit">View</button>
                        </div>
                    </div>
                </div>
            </div>
        )
};

export default TarjetasTeam;