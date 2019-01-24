import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Cabecera from './components/Cabecera';

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
      <div className="App">
        <Cabecera nombreDeUsuario="Nombre "/>

        {user}

      </div>
    );
  }
}

export default App;
