
const fs = require('fs');
const path = require('path');

let pagesCollection;

class Pages {
    constructor() {
        if (!pagesCollection)
        {
            let route = '/pages';
            let dir_path = path.join(__dirname, 'pages');

            fs.readdirSync(dir_path).forEach(file => {
                const filePath = path.join(directory, file);
                
                if (!fs.statSync(filePath).isDirectory() && filePath.endsWith('.json')) {
                    const jsonEntry = `${route}/register.json`;
                    const pageInfo = jsonEntry.parse();
                    pageInfo.route = `${route}/${pageInfo.index}`;

                    console.log('adding '+pageInfo);

                    pagesCollection.push(pageInfo);
                }
            });
        }

        return pagesCollection;
    }
}

module.exports = Pages();