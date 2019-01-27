import React, { Component } from 'react';
import './App.css';

import TablaMostrarDatosUser from './components/TablaMostrarDatosUser';
import FormularioAddUser from './components/FormularioAddUser'

import {user} from './user.json'
import Header from "./components/Header";
import Footer from './components/Footer'


class App extends Component {
  constructor(){
    super();

    this.state = {
      user
    };
    this.handleAddUser = this.handleAddUser.bind(this)
  }

  handleAddUser(users){
      this.setState({
          user:[...this.state.user,users]
      })
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
                  {user.role}
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
                <FormularioAddUser onAddUser={this.handleAddUser}/>
            </div>
            <Footer/>
        </div>
    );
  }
}

export default App;
