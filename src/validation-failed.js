export class ValidationFailedError {
  constructor (message, data, error) {
    this.name = ValidationFailedError.name
    this.message = message
    this.data = data
    this.error = error
    this.stack = (new Error(this.message)).stack
  }

  toString () {
    let message = this.message
    if (this.error && this.error.isJoi) {
      const details = this.error.details.map(detail => detail.message).join(', ')
      message += ` (${details}) `
    }
    if (this.data) {
      message += ' ' + JSON.Stringify(this.data)
    }
    return message
  }

  /**
   * Returns true if x is of type ValidationFailedError
   *
   * @param {object} err
   * @returns {boolean}
   */
  static is (err) {
    return err instanceof Error && err.name === ValidationFailedError.name && 'data' in err && 'error' in err
  }
}

ValidationFailedError.prototype = Object.create(Error.prototype)
