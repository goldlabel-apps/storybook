FROM docker.cwx.io/codeworx/node:11
COPY . /app
WORKDIR /app
ENTRYPOINT ["/app/node_modules/.bin/sparse"]