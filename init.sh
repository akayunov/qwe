#!/usr/bin/env bash
npn init

npm install three --save
npm install webpack webpack-cli --save-dev

./node_modules/.bin/webpack webgl-test/main.js -o webgl-test/main-o.js