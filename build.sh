# Clean up previous distributions
npm run del

# Variables
NGC="node node_modules/.bin/ngc"
ROLLUP="node node_modules/.bin/rollup"

# Run Angular Compiler
$NGC -p tsconfig-build.json
# Rollup library.js
$ROLLUP build/library.js -o dist/library.js

# Repeat the process for es5 version
$NGC -p tsconfig-es5.json
$ROLLUP build/library.js -o dist/library.es5.js

# Copy non-js files from build
rsync -a --exclude=*.js build/ dist

# Copy assets
gulp copy-assets

# Copy library package.json and README.md
cp package.json dist/package.json
cp README.md dist/README.md

#build umd version
npm run build-umd