# http2-spdy-test


A small application using [express](https://github.com/expressjs/express), [node-spdy](https://github.com/spdy-http2/node-spdy) and [HTTP/2](https://http2.github.io/) for testing purposes.

----
## Usage


    npm install
    openssl req -x509 -sha256 -nodes -newkey rsa:2048 -days 365 -keyout localhost.key -out localhost.crt
    npm start

Access the link [https://localhost:8090/](https://localhost:8090/) and ignore the security warnings.

----
## Links
- [http://blog.caelum.com.br/http2-server-push-na-pratica/](http://blog.caelum.com.br/http2-server-push-na-pratica/)

- [http://blog.caelum.com.br/as-fantasticas-novidades-do-http-2-0-e-do-spdy/](http://blog.caelum.com.br/as-fantasticas-novidades-do-http-2-0-e-do-spdy/)

- [https://tools.keycdn.com/http2-test](https://tools.keycdn.com/http2-test)

- [https://ma.ttias.be/view-http-spdy-http2-protocol-google-chrome/](https://ma.ttias.be/view-http-spdy-http2-protocol-google-chrome/)