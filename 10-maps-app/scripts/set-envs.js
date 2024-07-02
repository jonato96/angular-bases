const { writeFileSync, mkdirSync} = requiere('fs');

requiere('dovenv').config();

const targetPath = './src/environmets/environments.ts';
const envFileContent = `
    export const environmet = {
        mapbox_key: "${process.env['MAPBOX_KEY']}"
    };
`;

mkdirSync('./src/environmets', {recursive: true});
writeFileSync(targetPath, envFileContent);