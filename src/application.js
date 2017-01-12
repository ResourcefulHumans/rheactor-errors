export class ApplicationError {
  constructor (message) {
    this.name = ApplicationError.name
    this.message = message
    this.stack = (new Error(this.message)).stack
  }

  /**
   * Returns true if x is of type ApplicationError
   *
   * @param {object} err
   * @returns {boolean}
   */
  static is (err) {
    return err instanceof Error && err.name === ApplicationError.name
  }
}

ApplicationError.prototype = Object.create(Error.prototype)
