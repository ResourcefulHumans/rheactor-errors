export class AccessDeniedError {
  constructor (resource, message) {
    this.name = AccessDeniedError.name
    this.resource = resource
    let msg = 'Access denied: ' + this.resource
    if (message) {
      msg += ' (' + message + ')'
    }
    this.message = msg
    this.stack = (new Error(this.message)).stack
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
