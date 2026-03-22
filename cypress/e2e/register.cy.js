import RegisterPage from '../pages/RegisterPage'
import LoginPage from '../pages/LoginPage'

describe('Registro + Login', () => {

  it('Crear usuario y loguearse', () => {

  const user = {
  nombre: 'Juan',
  apellido: 'QA',
  direccion: 'Calle Falsa 123',
  ciudad: 'Buenos Aires',
  estado: 'BA',
  zip: '1234',
  telefono: '123456789',
  ssn: '123456789',
  username: 'user' + Date.now(),
  password: '1234'
}

    LoginPage.visitar()

    RegisterPage.irARegistro()
    RegisterPage.completarFormulario(user)
    RegisterPage.enviar()
    RegisterPage.validarRegistroExitoso()

    
    LoginPage.validarLoginExitoso()
  })

})