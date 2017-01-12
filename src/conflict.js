export class ConflictError {
  constructor (message) {
    this.name = ConflictError.name
    this.message = message
    this.stack = (new Error(this.message)).stack
  }

  /**
   * Returns true if x is of type ConflictErrorw
   *
   * @param {object} err
   * @returns {boolean}
   */
  static is (err) {
    return err instanceof Error && err.name === ConflictError.name
  }
}

ConflictError.prototype = Object.create(Error.prototype)
