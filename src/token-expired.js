export class TokenExpiredError {
  constructor (token) {
    this.name = TokenExpiredError.name
    this.message = 'The token expired'
    this.token = token
    this.stack = (new Error(this.message)).stack
  }

  /**
   * Returns true if x is of type TokenExpiredError
   *
   * @param {object} err
   * @returns {boolean}
   */
  static is (err) {
    return err instanceof Error && err.name === TokenExpiredError.name && 'token' in err
  }
}

TokenExpiredError.prototype = Object.create(Error.prototype)
