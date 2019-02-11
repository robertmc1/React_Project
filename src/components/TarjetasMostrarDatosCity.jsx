import  React, {Component} from 'react';
import {connect} from 'react-redux';
import FormularioAddCity from "./FormularioAddCity";
import {deleteCity} from "../redux/actions/citiesActions";
import { getTodoById } from '../redux/filters/citiesFilters';


class TarjetasMostrarDatosCity extends Component{

    render(){
        const {cities} = this.props.citiesR;

        const mapCity = cities.map((item) => {

            return(
                <div className={"tarjeta"}>
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
                            className="boton_2"
                            type="submit"
                        >
                            View
                        </button>
                        <button
                            onClick={() => this.props.deleteCity(props.id)}
                            className="boton_3"
                            type="submit"
                        >
                            Borrar
                        </button>

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

const mapDispatchToPropsCity = (dispatch) => {
    return {
        deleteCity: (id) => {
            dispatch(deleteCity(id))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToPropsCity)(TarjetasMostrarDatosCity);

