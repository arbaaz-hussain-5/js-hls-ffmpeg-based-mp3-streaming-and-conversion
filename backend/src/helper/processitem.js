import { exec } from 'node:child_process';

export default function processItem(id){

return new Promise((resolve, reject) => {
    exec('powershell.exe -NoProfile -ExecutionPolicy Bypass -File "C:\\Users\\arbaa\\msic\\cf.ps1"' + " " + id, (error, stdout, stderr) => {
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


