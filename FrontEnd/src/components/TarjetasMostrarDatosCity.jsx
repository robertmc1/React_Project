import  React from 'react';
import {connect} from 'react-redux';
import FormularioAddCity from "./FormularioAddCity";
import {deleteCity} from "../redux/actions/citiesActions";


const TarjetasMostrarDatosCity = (props) =>{

        const {cities} = props.citiesR;

        const mapCity = cities.map((item) => {

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
                            className="boton_2"
                            type="submit"
                        >
                            View
                        </button>
                        <button
                            onClick={() => props.deleteCity(props.id)}
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
};

const mapStateToProps = (state, props) => ({
    citiesR: state
});

const mapDispatchToPropsCity = (dispatch, props) => {
    return {
        deleteCity: (id) => {
            dispatch(deleteCity(id))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToPropsCity)(TarjetasMostrarDatosCity);

