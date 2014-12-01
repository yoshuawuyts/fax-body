/**
 * Module dependencies.
 */

var raw = require('raw-body');

/**
 * Return a a thunk which parses json requests.
 *
 * Pass a node request or an object with `.res`,
 * such as a fax Context.
 *
 * @param {Request} res
 * @param {Options} [opts]
 *   @prop {Number} length
 *   @prop {String} encoding
 *   @prop {String} limit
 * @return {Function}
 * @api public
 */

module.exports = function(res, opts){
  res = res.res || res;
  opts = opts || {};

  // defaults
  var len = res.headers['content-length'];
  if (len) opts.length = ~~len;
  opts.encoding = opts.encoding || 'utf8';
  opts.limit = opts.limit || '1mb';

  return function(next) {
    raw(res, opts, function(err, str) {
      if (err) return next(err);

      try {
        next(null, JSON.parse(str));
      } catch (err) {
        // todo: throw instead?
        err.body = str;
        next(err);
      }
    });
  }
};
