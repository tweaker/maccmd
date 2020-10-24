const express = require('express');
const exec = require('child_process').exec;

const app = express()

/**
 * Выключить экран
 */
app.get('/displaysleepnow', (request, response) => {
    pmset('displaysleepnow')
    response.status(200).send('ok')
});

/**
 * Спящий режим
 */
app.get('/sleepnow', (request, response) => {
    pmset('sleepnow')
    response.status(200).send('ok')
});

function pmset(cmd) {
    exec('pmset ' + cmd,
    (error, stdout, stderr) => {
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
        if (error !== null) {
            console.log(`exec error: ${error}`);
        }
    });
}

app.use((err, request, response, next) => {
    console.log(err);
    response.status(500)
        .send('Something broke!')
});

app.listen(3000);
