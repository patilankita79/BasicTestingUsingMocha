const utils = require('./utils');

it('should add two numbers', () => {
  var res = utils.add(12, 13);

  if(res != 25) {
    throw new Error(`Expected 25, but got ${res}.`);
  }

 });


 it('should square a number', () => {
   var res = utils.square(9);

   if(res != 81) {
     throw new Error(`Expected 81, but got ${res}.`);
   }
 })
