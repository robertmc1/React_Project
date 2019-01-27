import React, { Component } from 'react';
import './App.css';

import TablaMostrarDatosUser from './components/TablaMostrarDatosUser';
import FormularioAddUser from './components/FormularioAddUser'

import {user} from './user.json'
import Header from "./components/Header";


class App extends Component {
  constructor(){
    super();

    this.state = {
      user
    }
  }

  render() {
    const user = this.state.user.map((user,i) => {

      return(
          <div className="card">

            <div className="grid-container">
                <div id="name">
                  {user.name}
                </div>

                <div id="surname">
                  {user.surname}
                </div>

                <div id="rol">
                  {user.rol}
                </div>

                <div id="role">
                {user.headquorter}
                </div>
            </div>

          </div>
      )
    });


    return (
        <div>
            <Header/>
            <div>
                <TablaMostrarDatosUser />
                {user}
                <FormularioAddUser/>

            </div>
        </div>

    );
  }
}

export default App;
