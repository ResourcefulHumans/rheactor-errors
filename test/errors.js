import {AccessDeniedError, ApplicationError, ConflictError, EntryAlreadyExistsError, EntryDeletedError, EntryNotFoundError, PaymentRequiredError, TokenExpiredError, UnhandledDomainEventError, ValidationFailedError} from '../src'
import {expect} from 'chai'

/* global describe, it */

describe('Errors', () => {
  describe('AccessDeniedError', () => {
    it('should have the correct name', () => {
      expect((new AccessDeniedError()).name).to.equal('AccessDeniedError')
    })
  })
  describe('ApplicationError', () => {
    it('should have the correct name', () => {
      expect((new ApplicationError()).name).to.equal('ApplicationError')
    })
  })
  describe('ConflictError', () => {
    it('should have the correct name', () => {
      expect((new ConflictError()).name).to.equal('ConflictError')
    })
  })
  describe('EntryAlreadyExistsError', () => {
    it('should have the correct name', () => {
      expect((new EntryAlreadyExistsError()).name).to.equal('EntryAlreadyExistsError')
    })
  })
  describe('EntryDeletedError', () => {
    it('should have the correct name', () => {
      expect((new EntryDeletedError()).name).to.equal('EntryDeletedError')
    })
  })
  describe('EntryNotFoundError', () => {
    it('should have the correct name', () => {
      expect((new EntryNotFoundError()).name).to.equal('EntryNotFoundError')
    })
  })
  describe('PaymentRequiredError', () => {
    it('should have the correct name', () => {
      expect((new PaymentRequiredError()).name).to.equal('PaymentRequiredError')
    })
  })
  describe('TokenExpiredError', () => {
    it('should have the correct name', () => {
      expect((new TokenExpiredError()).name).to.equal('TokenExpiredError')
    })
  })
  describe('UnhandledDomainEventError', () => {
    it('should have the correct name', () => {
      expect((new UnhandledDomainEventError()).name).to.equal('UnhandledDomainEventError')
    })
  })
  describe('ValidationFailedError', () => {
    it('should have the correct name', () => {
      expect((new ValidationFailedError()).name).to.equal('ValidationFailedError')
    })
  })
})
