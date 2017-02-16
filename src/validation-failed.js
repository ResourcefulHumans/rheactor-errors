export class ValidationFailedError {
  constructor (message, data, error) {
    this.name = ValidationFailedError.name
    this.data = data
    this.error = error
    let msg = message
    if (this.error && this.error.isJoi) {
      const details = this.error.details.map(detail => detail.message).join(', ')
      msg += ` (${details}) `
    }
    if (this.data) {
      msg += ' ' + JSON.stringify(this.data)
    }
    this.message = msg
    this.stack = (new Error(this.message)).stack
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
