export class PaymentRequiredError {
  constructor (message) {
    this.name = PaymentRequiredError.name
    this.message = message
    this.stack = (new Error(this.message)).stack
  }

  /**
   * Returns true if x is of type PaymentRequiredError
   *
   * @param {object} err
   * @returns {boolean}
   */
  static is (err) {
    return err instanceof Error && err.name === PaymentRequiredError.name
  }
}

PaymentRequiredError.prototype = Object.create(Error.prototype)
