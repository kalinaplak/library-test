# Clean up previous distributions if folders exist
npm run del

# Variables
$NGC="node_modules/.bin/ngc.cmd"
$ROLLUP="node_modules/.bin/rollup.cmd"

# Run Angular Compiler
& "$NGC" -p tsconfig-build.json
# Rollup library.js
& "$ROLLUP" build/library.js -o dist/library.js

# Run Angular Compiler to ES5
& "$NGC" -p tsconfig-es5.json
# Rollup library.js
& "$ROLLUP" build/library.js -o dist/library.es5.js

# Copy non-js files from build
Copy-Item -Exclude *.js -Recurse -Path build/* -Destination dist

# Copy assets
gulp copy-assets

# Copy library package.json
Copy-Item -Path package.json -Destination dist/package.json
Copy-Item -Path README.md -Destination dist/README.md

#build umd version
npm run build-umd