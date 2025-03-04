const path = require('path');

console.log("Directory name:", path.dirname(__filename));

console.log("File name:", path.basename(__filename));

console.log("Extension:", path.extname(__filename));

const joinPath = path.join('/user', 'document', 'learning', 'now');
console.log("New Path", joinPath);


const resolvePath = path.resolve('user', 'document', 'learning', 'now');


const normalizePath = path.normalize('/user/.documents/../node/projects');
console.log("normalizePath: ", normalizePath);