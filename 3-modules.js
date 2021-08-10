// CommonJS, every file is module (by default)
// Modules - Encapsulated code (only share minimum)
const names = require('./4-names');
const sayHey = require('./5-utills');
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')

sayHey('Peace')
sayHey('success')
sayHey('susan')

// OR

sayHey('peace')
sayHey(names.success)
sayHey(names.susan)