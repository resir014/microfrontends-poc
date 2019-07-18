# microfrontends-poc

> Microfrontends POC made for Microservice JKT Meetup #3 (18 July 2019)

This demonstrates the power of microfrontends by way of reverse proxying routes into different servers using [micro-proxy](https://github.com/zeit/micro-proxy). Other tools you can use in place of micro-proxy are [Skipper](https://github.com/zalando/skipper) and plain old NGINX reverse proxy.

## How do I run this.

You will need at least three terminal tabs.

```bash
# Install dependencies (yarn is required because we use Yarn workspaces)
yarn

# Tab 1 - Home
yarn start:home

# Tab 2 - Blog
yarn start:blog

# Tab 3 - Proxy
yarn start
```

Please see the [`rules.json`](rules.json) file on how to set up micro-proxy.
