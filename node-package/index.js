const lodash= require("lodash");

const names = ['sangam', 'john', 'terry', 'ok'];
const capitalize = lodash.map(names, lodash.upperCase);

console.log(capitalize);