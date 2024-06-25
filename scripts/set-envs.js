require('dotenv').config();
const {mkdirSync, writeFileSync} = require('fs');

const dirPath = './src/enviroments';
const filePath = './src/enviroments/enviroments.ts';

const fileContent =`
    export const enviroment = {
        MAPBOX_KEY: "${process.env['MAPBOX_KEY']}",
        otra: "PROP",
    };
`;

mkdirSync(dirPath, {recursive: true});
writeFileSync(filePath, fileContent);

