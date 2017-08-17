//inspirowane https://github.com/ReactiveX/rxjs/blob/master/tools/make-umd-bundle.js
var rollup = require('rollup');
var fs = require('fs');
var path = require('path');
//https://github.com/rollup/rollup/wiki/JavaScript-API
rollup.rollup({
  entry: './bundle/esm/index.js',
}).then(function (bundle) {
  var result = bundle.generate({
    format: 'umd',
    moduleName: '@comarch/library',
    sourceMap: true 
  });
  var tslib = fs.readFileSync('./node_modules/tslib/tslib.js', 'utf8');
  fs.writeFileSync('./dist/library.umd.js', tslib + result.code);
  fs.writeFileSync('./dist/library.umd.map', result.map);
});