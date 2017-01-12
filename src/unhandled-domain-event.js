export class UnhandledDomainEventError {
  constructor (event) {
    this.name = UnhandledDomainEventError.name
    this.message = 'Unhandled domain event'
    this.event = event
    this.stack = (new Error(this.message)).stack
  }

  toString () {
    return `${this.message}: "${this.event}"`
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
