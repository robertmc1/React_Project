import React, { Component } from 'react';
import './App.css';

import TablaMostrarDatosUser from './components/TablaMostrarDatosUser';

import Header from "./components/Header";
import Footer from './components/Footer';


class App extends Component {

  render() {
    return (
        <div>
            <Header/>
            <div>
                <TablaMostrarDatosUser />
            </div>
            <Footer/>
        </div>
    );
  }
}

export default App;
