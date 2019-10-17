import React, { Component } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

class App extends Component {

  state = {  }
  render() { 
    return ( 
      <div className="app">
        <Header 
          title ="Clima React APP"
        />
        <div className="contenedor-form">
          <div className="container">
            <div className="row">
              <div className="col s12 m6">
                <Formulario />
              </div>
            </div>
          </div>
        </div>
      </div>
     );
  }
}
 
export default App;