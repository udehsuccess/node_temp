// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>
// you can skip all by using (npm init --y)

// global dependency - use it in any project
// npm install -g <packageName>
// sudo install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/pockage)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)


const _ = require('lodash');

const items = [1, [2, [3, [4]]]]
const newwItems = _.flattenDeep(items)
console.log(newwItems)