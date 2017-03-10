export class ReanimationFailedError {
  constructor (message, data) {
    this.name = ReanimationFailedError.name
    this.message = message
    this.data = data
    this.stack = (new Error(this.message)).stack
  }

  /**
   * Returns true if x is of type ReanimationFailedError
   *
   * @param {object} err
   * @returns {boolean}
   */
  static is (err) {
    return err instanceof Error && err.name === ReanimationFailedError.name
  }
}

ReanimationFailedError.prototype = Object.create(Error.prototype)
