import React, { Component } from 'react';
import './App.css';

import Cabecera from './components/Cabecera';
import FormularioAddUser from './components/FormularioAddUser'

import {user} from './user.json'


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
              <div>
                {user.name}
              </div>
              <div>
                {user.surname}
              </div>
              <div>
                {user.rol}
              </div>
              <div>
              {user.headquorter}
            </div>
            </div>

          </div>
      )
    });


    return (
      <div>
        <Cabecera />
        {user}
        <FormularioAddUser/>

      </div>
    );
  }
}

export default App;
