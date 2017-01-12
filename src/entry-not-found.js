export class EntryNotFoundError {
  constructor (message) {
    this.name = EntryNotFoundError.name
    this.message = message
    this.stack = (new Error(this.message)).stack
  }

  /**
   * Returns true if x is of type EntryNotFoundError
   *
   * @param {object} err
   * @returns {boolean}
   */
  static is (err) {
    return err instanceof Error && err.name === EntryNotFoundError.name
  }
}

EntryNotFoundError.prototype = Object.create(Error.prototype)
