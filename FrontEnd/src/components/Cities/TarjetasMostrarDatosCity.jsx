import  React from 'react';
import {connect} from 'react-redux';
import FormularioAddCity from "./FormularioAddCity";
import {deleteCity} from "../../redux/actions/citiesActions";

const TarjetasMostrarDatosCity = (props) =>{

    const {cities} = props.citiesR;

    const mapCity = cities.map((item) => {

    return(
        <div className={"container"} key={item._id} id={item._id}>
            <div className={"tarjetas"}>
                <div className={"tarjeta-titulo"}>
                    {item.name}
                </div>
                <div className={"divTjLine"} >
                    <div >
                        <div className={"TitFont"}>Adress:</div>
                        <div>{item.address}</div>
                    </div>
                    <div >
                        <div className={"TitFont"}>Phone:</div>
                        <div>{item.phone}</div>
                    </div>
                </div>

                <div className={"titulo"}>
                    Team members
                </div>
                <div >
                    <div className={'inL'}>
                        <div>Julia Hartz</div>
                        <div>Role</div>
                    </div>
                    <div className={"inL"}>
                        <div>Paco Pico Poco</div>
                        <div>Role</div>
                    </div>
                </div>

                <button
                    onClick={() => props.deleteCity(item.id)}
                    className="boton_2"
                    type="submit"
                >
                    Borrar
                </button>
                <button
                    className="boton_2"
                    type="submit"
                >
                    View
                </button>
            </div>
        </div>
        )
    });

    return(
        <div >
            <div className={"container"}>
                {mapCity}
            </div>
            <FormularioAddCity />
        </div>
    )
};

const mapStateToProps = (state, props) => ({
    citiesR: state
});

export default connect(mapStateToProps, {deleteCity})(TarjetasMostrarDatosCity);

