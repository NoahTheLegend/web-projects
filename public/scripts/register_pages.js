const fs = require('fs');
const path = require('path');

let pagesCollection = [];

async function registerPages() {
    await fetchPages();

    //console.log("Registering:\n"+pagesCollection);

    pagesCollection.forEach((route, index) => {
        pagesCollection.index = route;
    });
}

async function getPages() {
    return pagesCollection;
}

async function fetchPages() { 
    try {
        const dir_path = path.join(path.dirname(__dirname), 'pages');
        const files = await fs.promises.readdir(dir_path);
        
        for (const file of files) {
            const file_path = path.join(dir_path, file);
            const stats = await fs.promises.stat(file_path);

            //console.log("Fetching:\n"+file_path);
            
            if (stats.isDirectory()) {
                await searchConfig(file_path);
            }
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

async function searchConfig(dir_path) {
    try {
        const files = await fs.promises.readdir(dir_path);
        
        for (const file of files) {
            const filePath = path.join(dir_path, file);
            const stats = await fs.promises.stat(filePath);
            const filename = path.basename(filePath);
            
            if (!stats.isDirectory() && filename === "register.json") {
                await registerConfig(filePath);
            }
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

async function registerConfig(filePath) {
    try {
        const data = await fs.promises.readFile(filePath, 'utf8');
        const pageInfo = JSON.parse(data);

        let root = path.relative("./", path.dirname(filePath));

        // reverse slashes for client and remove default static directory from path
        root = root.replace(/\\/g, '/').replace("public/", "");

        pageInfo.index = path.posix.join(root, pageInfo.index);
        pageInfo.preview = path.posix.join(root, pageInfo.preview);

        // console.log("Storing:\n"+filePath);
        pagesCollection.push(pageInfo);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

module.exports = {registerPages, getPages};