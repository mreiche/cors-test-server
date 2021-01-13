const https = require("https");
const fs = require('fs');

const options = {
    requestCert: false,
    rejectUnauthorized: false,
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
};
const app = https.createServer(options, (request, response) => {
    response.writeHead(200, {
        "Set-Cookie": "katze=kuh123; path=/; HttpOnly; SameSite=None; Secure;",
        "access-control-allow-credentials": true,
        "Access-Control-Allow-Origin": "*",
        "access-control-allow-headers": "*",
        "Access-Control-Allow-Methods": "*",
        "access-control-expose-headers": "*",
    });
    response.write(`got cookies?`);
    response.end();
});

// app.on('error', (error) => {
//     console.log(error);
// });
//
// // handle error when some client connection failed
// app.on('clientError', (error, socket) => {
//     socket.end('HTTP/1.1 400 Bad Request');
// });
// app.on('secureConnection', function (cleartextStream, encryptedStream) {
//     if(!cleartextStream.authorized){
//         console.error("TLS error: " + cleartextStream.authorizationError)
//     }
// })
console.log("Server started on https://localhost:3000")
app.listen(3000);
