// console.log("Implement servermu disini yak 😝!");

const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');


const hostname = '127.0.0.1';
const port = 3000;
const pathPublic = path.join(__dirname,'../public');
const pathView = path.join(__dirname, 'views');
const pathData = path.join(__dirname,'../data');

// console.log(pathPublic, pathView);

http.createServer(function(req, res) {
    if (req.url == '/') {
        try {
            fs.readFile(pathPublic+'/index.html', null, function(err, data) {
                if (err) {
                    res.writeHead(404)
                    res.write('oPPS')
                } else {
                    res.write(data)
                }
    
                res.end()
            })
            
        } catch (error) {
            console.log(error);
        }
    }else if(req.url == '/cars'){
        try {
            fs.readFile(pathPublic+'/cariMobil.html', null, function(err, data) {
                if (err) {
                    res.writeHead(404)
                    res.write('oPPS')
                } else {
                    res.write(data)
                }
    
                res.end()
            })
            
        } catch (error) {
            console.log(error);
        }
    } 
    else {
        if (req.url.split('/')[1] == 'css' || req.url.split('/')[1] == 'images') {
            let name_file = req.url.split('/')[2]
            let folder = req.url.split('/')[1]
            // console.log(req.url.split('/'));
            // if (folder == 'scripts') {
            //     console.log(name_file);
            // }

            // console.log(`${pathPublic}/${folder}/${name_file}`);

            fs.readFile(`${pathPublic}/${folder}/${name_file}` , null, function(err, data) {
                if (err) {
                    res.writeHead(404)
                    res.write('oPPS')
                } else {
                    res.write(data)
                }
    
                res.end()
            })
        }
        else if(req.url.split('/')[2] == 'scripts'){
            let name_file = req.url.split('/')[3]
            let folder = req.url.split('/')[2]
            fs.readFile(`${pathPublic}/${folder}/${name_file}` , null, function(err, data) {
                if (err) {
                    res.writeHead(404)
                    res.write('oPPS')
                } else {
                    res.write(data)
                }
    
                res.end()
            })
        }
        else if(req.url.split('/')[1] == 'data'){
            let name_file = req.url.split('/')[2]
            let folder = req.url.split('/')[1]
            fs.readFile(`${pathData}/${name_file}` , null, function(err, data) {
                if (err) {
                    res.writeHead(404)
                    res.write('oPPS')
                } else {
                    res.write(data)
                }
    
                res.end()
            })
        }
        else{
            console.log(req.url, req.url.split('/'));
        }
        // console.log(req.url.split('/')[0] == 'images', req.url.split('/'));
    }
}).listen(port, function() {
    console.log(`Server running on http://localhost:${port}`);
})