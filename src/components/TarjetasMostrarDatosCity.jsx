import  React, {Component} from 'react';
import {connect} from 'react-redux';
import FormularioAddCity from "./FormularioAddCity";

class TarjetasMostrarDatosCity extends Component{

    render(){
        const {cities} = this.props.citiesR;

        const mapCity = cities.map((item,i) => {

            return(
                <div className={"tarjeta"}  key={item.id} id={item.id}>
                    <div className={"tarjeta-titulo"}>
                        {item.name}
                    </div>

                    <div className={"tarjeta-dentro"}>
                        <div>
                            <div className={"boxi"}>
                                <div className={"TitFont"}>Adress:</div>
                                <div>{item.address}</div>
                            </div>
                            <div className={'inL'}>
                                <div className={"TitFont"}>Phone:</div>
                                <div>{item.phone}</div>
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
                        <button
                            href=""
                            className="boton_2"
                            type="submit">View</button>
                    </div>

                </div>
            )
        });


        return(
            <div >
                <div id="cuadrotarjetas">
                    {mapCity}
                </div>
                <FormularioAddCity />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    citiesR: state
});

export default connect(mapStateToProps, null)(TarjetasMostrarDatosCity);

