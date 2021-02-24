# Docker HTTP Identifier
[![Docker Pulls](https://img.shields.io/docker/pulls/mattreid1/http-identifier)](https://hub.docker.com/r/mattreid1/http-identifier)

A simple HTTP server that accepts an environment vairable to identify the server.

It also displays the path requested.

## Usage
`docker run --rm -it -e HOST="Server 1" -p 80:80 mattreid1/http-identifier`

![Demo](/demo.png)