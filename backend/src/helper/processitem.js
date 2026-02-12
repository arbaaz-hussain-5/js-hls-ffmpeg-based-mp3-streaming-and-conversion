import { exec } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import {rootDir} from '../../root.js'


export default function processItem(id){

return new Promise((resolve, reject) => {
    const scriptPath = rootDir + '\\scripts\\audio-split.ps1';
    const resultPath = rootDir + '\\uploads\\result'

    console.log(resultPath);
    console.log(scriptPath)
    const h = `powershell.exe -NoProfile -ExecutionPolicy Bypass -File "${scriptPath}" -Username "${id}" -Result "${resultPath}"`
    exec(h, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            reject()
            return;
        }
        if (stderr) {
            console.log(id + " coverted succesfully")
            resolve()
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
})}


