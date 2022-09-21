const http = require('node:http');
const url = require('url');
const fs = require('fs');
const path = require('node:path');

const hostname = '127.0.0.1';
const port = 3000;

const pathPublic = path.join(__dirname,'public');
const pathView = path.join(__dirname, 'views');

const server = http.createServer((req, res) => {
    console.log(pathView);
    let objStrParams;
    if(Object.keys(url.parse(req.url, true).query).length != 0){
        objStrParams = url.parse(req.url, true).query;
    }
    console.log(objStrParams);
    if(objStrParams != undefined){
        let url = req.url.split('?')[0];
        console.log(url);
        if(url == `/images`){
            res.statusCode = 200;
            res.setHeader('Content-Type', 'image');
            console.log(path.join(pathPublic,`img/${objStrParams.src}`));
            res.end(fs.readFileSync(path.join(pathPublic,`img/${objStrParams.src}`)));
        }else if(url == `/scripts`){
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/javscript');
            res.end(fs.readFileSync(path.join(pathPublic,`scripts/${objStrParams.src}`)));
        }
    }else{
        switch (req.url) {
            case '/':
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.end(fs.readFileSync(path.join(pathView,'index.html')));
                break;
        
            default:
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.end('404')
                break;
        }
    }

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});