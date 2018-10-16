import React, { Component } from 'react';
import Header from './Header';
import AgregarCita from './AgregarCita';
import ListaCitas from './ListaCitas';

import { Provider } from 'react-redux';
import store from '../store';

class App extends Component {
  
  render() {
    return (
      <Provider store={store}>

          <div className="container">
            <Header
              titulo={'Administrador de Pacientes de Veterinaria'}
            />

            <div className='row'>
              <div className='col-md-6'>
                <AgregarCita />
              </div>
              <div className='col-md-6'>
                <ListaCitas />
              </div>
            </div>

          </div>

      </Provider>
    );
  }
}

export default App;
