const fs = require("fs");
const path = require("path");


const dataFolder = path.join(__dirname, "data");

if (!fs.existsSync(dataFolder)) {
    fs.mkdirSync(dataFolder);
    console.log("data folder created");  
}else{
    console.log("data folder exists")
}


const filePath = path.join(dataFolder, 'example.txt');
fs.writeFileSync(filePath, 'Hello from Node');
console.log("file created successfully");

const readContentFromFile = fs.readFileSync(filePath, "utf8");
console.log("File content:", readContentFromFile);


fs.appendFileSync(filePath, '\nThis is a new line added');
console.log("new file content added"); 

//async way of creating the file
const asyncFilePath = path.join(dataFolder, 'async-example.txt');
fs.writeFile(asyncFilePath, 'Hello, Async node js', (err)=>{
    if(err) throw err;
    console.log('Async file is created successfully');
});

fs.readFile(asyncFilePath, 'utf8', (err, data)=>{
    if(err) throw err;
    console.log("Async file content: ", data);
});
