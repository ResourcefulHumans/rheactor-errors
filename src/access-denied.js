export class AccessDeniedError {
  constructor (resource, message) {
    this.name = AccessDeniedError.name
    this.message = message
    this.resource = resource
    this.stack = (new Error(this.message)).stack
  }

  toString () {
    let msg = 'Access denied: ' + this.resource
    if (this.message) {
      msg += ' (' + this.message + ')'
    }
    return msg
  }

  /**
   * Returns true if x is of type AccessDeniedError
   *
   * @param {object} err
   * @returns {boolean}
   */
  static is (err) {
    return err instanceof Error && err.name === AccessDeniedError.name && 'resource' in err
  }
}

AccessDeniedError.prototype = Object.create(Error.prototype)
