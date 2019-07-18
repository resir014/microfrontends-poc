# microfrontends-poc

> Microfrontends POC made for Microservice JKT Meetup #3 (18 July 2019)

Finally, an answer to the question "should I use React or Vue?" - why not use both at the same time!

## What the heck?

Okay, serious. This app exists to demonstrate the powers of [microfrontends](https://micro-frontends.org). Microfrontends is a fairly new paradigm of applying the microservices architecture to the frontend. It allows for multiple UI modules to be combined to one single cohesive experience, allowing for independent development/deployment, and opening the doors for technological agnosticism.

## How do I run this.

You will need at least three terminal tabs.

This application consists of three different UI modules:

- Application shell: localhost:3000
- Chat (with notification): localhost:3001
- Live window: localhost:3002

```bash
# Install dependencies (yarn is required because we use Yarn workspaces)
yarn

# Terminal tab 1
yarn start:live
# Terminal tab 2
yarn start:chat
# Terminal tab 3
yarn start:core

# Open your browser at port 3000
```

## License

Public Domain: https://unlicense.org/
