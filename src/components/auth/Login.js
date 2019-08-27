import React, { Component } from 'react';
import { firebaseConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';

class Login extends Component {
  state = { 
    email: '',
    password: ''
  }

  // Almacena lo que el usuario escribe en el state
  leerDato = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // Inicia sesión en firebase
  iniciarSesion = e => {
    e.preventDefault();

    // Extraer firebase
    const { firebase } = this.props;

    // Extraer el state
    const { email, password } = this.state;

    // Autenticar el usuario
    firebase.login({
      email, password
    })
    .then(resultado => console.log('Iniciaste Sesión'))
    .catch(error => console.log('Hubo un error'))

  }

  render() { 
    return ( 
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card mt-5">
            <div className="card-body">
              <h2 className="text-center my-4">
                <i className="fas fa-lock"></i> {''}
                Iniciar Sesión
              </h2>

              <form
                onSubmit={this.iniciarSesion}
              >

                <div className="form-group">
                  <label>Email:</label>
                  <input 
                    type="email"
                    className="form-control"
                    name="email"
                    value={this.state.email}
                    onChange={this.leerDato}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Password:</label>
                  <input 
                    type="password"
                    className="form-control"
                    name="password"
                    value={this.state.password}
                    onChange={this.leerDato}
                    required
                  />
                </div>

                <input 
                  type="submit"
                  className="btn btn-success btn-block"
                  value="Iniciar Sesión"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
Login.propTypes = {
  firebase: PropTypes.object.isRequired
}

export default firebaseConnect() (Login);