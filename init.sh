#!/usr/bin/env bash
npn init

npm install babylonjs babylonjs babylonjs-loaders babylonjs-gui babylonjs-materials --save
npm install webpack webpack-cli ts-loader typescript --save-dev

./node_modules/.bin/webpack -w

#./node_modules/.bin/webpack webgl-test/main.js -o webgl-test/main-o.js