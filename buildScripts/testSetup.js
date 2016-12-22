// Not transpiled so use ComonJS and ES5

// Register babel to transpile fefore our tests run
require('babel-register');

// Disabel webpack features that Mocha doesn't understand
// See import of css in index.js - this ignores the import
require.extensions['.css'] = function() {};
