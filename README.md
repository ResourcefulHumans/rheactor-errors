# rheactor-errors

[![Build Status](https://travis-ci.org/ResourcefulHumans/rheactor-errors.svg?branch=master)](https://travis-ci.org/ResourcefulHumans/rheactor-errors)
[![monitored by greenkeeper.io](https://img.shields.io/badge/greenkeeper.io-monitored-brightgreen.svg)](http://greenkeeper.io/) 
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![semantic-release](https://img.shields.io/badge/semver-semantic%20release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Test Coverage](https://codeclimate.com/github/ResourcefulHumans/rheactor-errors/badges/coverage.svg)](https://codeclimate.com/github/ResourcefulHumans/rheactor-errors/coverage)
[![Code Climate](https://codeclimate.com/github/ResourcefulHumans/rheactor-errors/badges/gpa.svg)](https://codeclimate.com/github/ResourcefulHumans/rheactor-errors)

[![NPM](https://nodei.co/npm/rheactor-errors.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/rheactor-errors/)

A collection of errors

Note that Babel [does not support extending builtin classes](https://github.com/babel/babel/commit/3878bd812c73bdd18b1011be59515dad985940fd), so we use [this way](http://stackoverflow.com/a/35858868) to create the error objects:
  
```javascript
class MyError {
  constructor(message) {
    this.name = MyError.name
    this.message = message
    this.stack = (new Error(message)).stack
  }
}
MyError.prototype = Object.create(Error.prototype)
```
