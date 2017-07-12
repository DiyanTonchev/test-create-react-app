class Auth {
  static authenticateUser (token) {
    window.localStorage.setItem('token', token)
  }

  static isUserAuthenticate () {
    return window.localStorage.hasOwnProperty('token')
  }

  static deauthenticateUser () {
    window.localStorage.removeItem('token')
  }

  static getToken () {
    return window.localStorage.getItem('token')
  }
}

export default Auth
