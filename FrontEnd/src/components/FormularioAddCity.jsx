import  React, {Component} from 'react';
import {connect} from 'react-redux';
import {addCity} from "../redux/actions/citiesActions";

class FormularioAddCity extends Component {
    constructor() {
        super();
        this.state = {
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
                <form  method="post"  onSubmit={this.handleSubmit}>
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
                                        onChange={this.handleInput}>
                                        <option>Spain</option>
                                        <option>XXXXX</option>
                                        <option>YYYYY</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="name">City:</label>
                                    <select
                                        name="name"
                                        onChange={this.handleInput}>
                                        <option>Madrid</option>
                                        <option>XXXXX</option>
                                        <option>YYYYY</option>
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
                                        name="address"
                                        placeholder="Adress"
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
                                        type="text"
                                        name="phone"
                                        placeholder="Phone number"

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
                                    onChange={this.handleInput}>
                                    <option>Select team</option>
                                    <option>Unicorn 1</option>
                                    <option>Unicorn 2</option>
                                    <option>Unicorn 3</option>
                                </select>
                            </div>

                            <button
                                className="boton_1"
                                type="submit"
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
        onAddCity: (id) =>dispatch (addCity(id)),
    };
};

export default connect (null, mapDispatchToPropsCity)(FormularioAddCity);