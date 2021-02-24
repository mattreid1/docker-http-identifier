const express = require("express");
const process = require("process");
const app = express();

// Either use HOST environment variable or display "Hello World!"
const HOST =
	process.env.HOST !== undefined ? "from " + process.env.HOST : "World";

process.on("SIGINT", () => {
	console.info("Exiting...");
	process.exit(0);
});

app.get("*", function (request, response) {
	response.send(
		`<html><head><title>Hello ${HOST}!</title></head><body><h1>Hello ${HOST}!</h1>Requested URL ${request.originalUrl}</body></html>`
	);
});

app.listen(80, () => console.log("Server running on port 80!"));
