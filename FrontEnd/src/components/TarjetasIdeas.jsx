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
                    <div className="divTjLine">
                        <p>A computer program can easily produce gibberish - especially if it has been provided with
                            garbage beforehand. This program does something a little different. rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr r rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
                            rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr rrrrrrrrrrrrrrrrrrrrrrr
                            rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
                        </p>
                    </div>
                    <div className="divTjLine">
                        <div >
                            <div className={"divTitle"}>Headquarter</div>
                        </div>
                        <div>
                            <div>Madrid</div>
                        </div>
                        <div>
                            <div className={"divTitle"}>Team</div>
                        </div>
                        <div>
                            <div>Real Unicorn</div>
                        </div>
                    </div>
                </div>
            </div>
        )
};

export default TarjetasTeam;