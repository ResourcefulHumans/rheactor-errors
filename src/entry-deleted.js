export class EntryDeletedError {
  constructor (message, entry) {
    this.name = EntryDeletedError.name
    this.message = message
    this.entry = entry
    this.stack = (new Error(this.message)).stack
  }

  /**
   * Returns true if x is of type EntryDeletedError
   *
   * @param {object} err
   * @returns {boolean}
   */
  static is (err) {
    return err instanceof Error && err.name === EntryDeletedError.name && 'entry' in err
  }
}

EntryDeletedError.prototype = Object.create(Error.prototype)
