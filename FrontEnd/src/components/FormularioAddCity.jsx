import  React, {Component} from 'react';
import {connect} from 'react-redux';
import {addCity} from "../redux/actions/citiesActions";


class FormularioAddCity extends Component {
    constructor() {
        super();
        this.state = {
            id: "",
            name:"",
            address: '',
            phone:'',
            team:'',
        };
    }

    handleInput = (e) => {
        const {value, name} = e.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const CITY = this.state;

        this.addCitiesHandle(CITY);
    };

    addCitiesHandle =(CITY) => {
        this.props.onAddCity(CITY)
    };

    render() {

        return (
            <div>
                <form id="myForm" method="post"  onSubmit={this.handleSubmit}>
                    <div id='headTitleBlue' >
                        Add city
                    </div>

                    <div className="grid-container-form" id="paddingForm">
                        <div >
                            <div id="divForm" >
                                <p id="textoGrande"> Location</p>
                                <div>
                                    <label htmlFor="country">Country:</label>
                                    <select
                                        name="country"
                                        required
                                        onChange={this.handleInput}>
                                        <option  selected="true" value={""} disabled>Selecciona una opción</option>
                                        <option>Spain</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="name">City:</label>
                                    <select
                                        name="name"
                                        required
                                        onChange={this.handleInput}
                                    >
                                        <option selected="true" value={""} disabled>Selecciona una opción</option>
                                        <option>Madrid</option>
                                        <option>XXXXXX</option>
                                        <option>YYYYYY</option>
                                    </select>
                                </div>
                            </div>

                            <div id="divForm">
                                <div>
                                    <label htmlFor="address" id="textoGrande">Address:</label>
                                </div>
                                <div>
                                    <input
                                        onChange={this.handleInput}
                                        type="text"
                                        minLength={10}
                                        name="address"
                                        placeholder="Adress"
                                        required
                                    />
                                </div>
                            </div>
                            <div id="divForm">
                                <div>
                                    <label htmlFor="phone" id="textoGrande">Phone:</label>
                                </div>
                                <div>
                                    <input
                                        onChange={this.handleInput}
                                        type="tel"
                                        name="phone"
                                        minLength={9}
                                        maxLength={16}
                                        placeholder="Phone number"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div id="divFormRight">
                            <div id="divForm" >
                                <p id="textoGrande"><b> Demium team</b></p>
                                <label htmlFor="Headquorter">Team:</label>
                                <select
                                    name="team"
                                    onChange={this.handleInput}
                                >
                                    <option value={""}>Selecciona una opción</option>
                                    <option>Unicorn 1</option>
                                    <option>Unicorn 2</option>
                                    <option>Unicorn 3</option>
                                </select>
                            </div>
                            <button
                                className="boton_1"
                                type="submit"
                                onClick={this.myFunction}
                            >
                                Aceptar
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToPropsCity = (dispatch) => {
    return{
        onAddCity: (CITY) => {
            dispatch (addCity(CITY));
        }
    }
};

export default connect (null, mapDispatchToPropsCity)(FormularioAddCity);