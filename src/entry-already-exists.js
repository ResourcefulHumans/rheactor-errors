export class EntryAlreadyExistsError {
  constructor (message) {
    this.name = EntryAlreadyExistsError.name
    this.message = message
    this.stack = (new Error(this.message)).stack
  }

  /**
   * Returns true if x is of type EntryAlreadyExistsError
   *
   * @param {object} err
   * @returns {boolean}
   */
  static is (err) {
    return err instanceof Error && err.name === EntryAlreadyExistsError.name
  }
}

EntryAlreadyExistsError.prototype = Object.create(Error.prototype)
