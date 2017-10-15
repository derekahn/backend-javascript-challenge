'use strict';

module.exports = {
  // wrapper for `async` route handlers
  middleware: fn => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  }
}

