const fs = require('fs');
const path = require('path');

let pagesCollection = [];
//!!!!!!!!!!!!!!!!!code is running async'ally, so result is empty, needs a fix

function registerPages()
{
    let dir_path = path.join(path.dirname(__dirname), 'pages');
    fs.readdirSync(dir_path).forEach(file => {          // read pages/ directory
        dir_path = path.join(dir_path, file);
        
        let hasEntry = false;
        if (fs.statSync(dir_path).isDirectory()) {      // if there are other directories in pages/
            hasEntry = true;
            path.join(dir_path, path.basename(dir_path));
        }
        
        if (hasEntry) {
            searchConfig(dir_path);                     // read pages/directory/
        }
    });
}

function searchConfig(dir_path) {
    fs.readdirSync(dir_path).forEach(file => {
        const filePath = path.join(dir_path, file);
        const filename = path.basename(filePath);
                                                        // if file is not a directory and is "register.json"
        if (!fs.statSync(filePath).isDirectory() && filename === "register.json") {
            registerConfig(filePath);
        }
    });
}

function registerConfig(filePath) {
    parseConfig(filePath, (error, pageInfo) => {   // try parse file into object
        if (error) {
            console.error('An error occurred:', error);
            return;
        }

        pagesCollection.push(pageInfo);            // then store it
    });
}

function parseConfig(filePath, callback) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Can not read file: ', err);
            callback(err, null);
            return;
        }
    
        try {
            const pageInfo = JSON.parse(data);
            callback(null, pageInfo);
        } catch (parseError) {
            console.error('Could not parse JSON: ', parseError);
            callback(parseError, null);
        }
    });
}

console.log(pagesCollection);
module.exports = {registerPages: registerPages(),
                  pagesCollection: pagesCollection};