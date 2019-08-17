const express = require('express');
const exec = require('child_process').exec;

const app = express()

app.get('/sleep', (request, response) => {
    exec('pmset displaysleepnow',
        (error, stdout, stderr) => {
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
        });

    response.status(200).send('ok')
});

app.use((err, request, response, next) => {
    console.log(err);
    response.status(500)
        .send('Something broke!')
});

app.listen(3000);
