if (typeof Proxy !== 'object' || typeof WeakMap !== 'function') {
  throw new Error ('AppJS requires Node is run with the --harmony command line flag');
}

var App = require('./app');

module.exports = new App;
