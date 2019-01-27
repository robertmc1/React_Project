import  React, {Component} from 'react';

class TablaMostrarDatosUser extends Component{
    render(){
        return(
            <div id="cuadrogeneral">
                <div id='headTitle' >
                    Add user
                </div>

                <nav >
                    <div  className="grid-container-cabecera">
                        <div>
                            Name
                        </div>
                        <div>
                            Surname
                        </div>
                        <div>
                            Roel
                        </div>
                        <div>
                            Headquorter
                        </div>
                    </div>
                </nav>

            </div>
        )
    }
}


export default TablaMostrarDatosUser;