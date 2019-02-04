import  React, {Component} from 'react';
import FormularioAddCity from "./FormularioAddCity";
import {cities}  from './cities.json'

class TarjetasMostrarDatosCity extends Component{
    constructor(){
        super();
        this.state = {
            cities
        }
    }

    handleAddCity = (city) => {
        this.setState({
            cities:[...this.state.cities,city]
        })
    };



    render() {
        const cities = this.state.cities.map((cities,i) => {
            return(
                <div className={"tarjeta"}>
                    <div className={"tarjeta-titulo"}>
                        {cities.name}
                    </div>

                    <div className={"tarjeta-dentro"}>
                        <div>
                            <div className={"boxi"}>
                                <div className={"TitFont"}>Adress:</div>
                                <div>{cities.address}</div>
                            </div>
                            <div className={'inL'}>
                                <div className={"TitFont"}>Phone:</div>
                                <div>{cities.phone}</div>
                            </div>
                        </div>

                        <div className={"titulo"}>
                            Team members
                        </div>
                        <div>
                            <div >
                                <div className={'inL'}>
                                    <div>Julia Hartz</div>
                                    <div>Role</div>
                                </div>
                                <div className={"inL"}>
                                    <div>Julia Hartz</div>
                                    <div>Role</div>
                                </div>
                            </div>
                        </div>
                        <button href="" className="boton_2" type="submit">View</button>
                    </div>

                </div>
            )
        })


        return(
            <div >
                <div id="cuadrotarjetas">
                    {cities}
                </div>

                <FormularioAddCity onAddCity={this.handleAddCity}/>
            </div>
        )
    }
}


export default TarjetasMostrarDatosCity;