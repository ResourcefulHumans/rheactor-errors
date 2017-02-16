export class UnhandledDomainEventError {
  constructor (event) {
    this.name = UnhandledDomainEventError.name
    this.event = event
    let msg = 'Unhandled domain event'
    if (event) {
      msg += ` "${this.event}"`
    }
    this.message = msg
    this.stack = (new Error(this.message)).stack
  }

  /**
   * Returns true if x is of type UnhandledDomainEventError
   *
   * @param {object} err
   * @returns {boolean}
   */
  static is (err) {
    return err instanceof Error && err.name === UnhandledDomainEventError.name && 'event' in err
  }
}

UnhandledDomainEventError.prototype = Object.create(Error.prototype)
