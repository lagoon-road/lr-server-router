# lr-server-router reference

A Lagoon road extension that gives you route functionality on the server.

| Information | - |
| ----------- | - |
| Code coverage | [![Coverage Status](https://coveralls.io/repos/github/lagoon-road/lr-server-router/badge.svg?branch=master)](https://coveralls.io/github/lagoon-road/lr-server-router?branch=master) |
| Repo link | [lr-server-router](https://github.com/lagoon-road/lr-server-router) |
| Dependencies | - |
| Size | 336 bytes |
| Version | 1.0.0 |
| License | MIT |
| Usage | [guide](https://lagoonroad.com/guide) |

---

### Function initialization
This package doesn't have any exposed methods, it does however needs a single argument on creation.
```
const protocol = require('http');
const server   = protocol.createServer();
const router   = require('lr-server-router')(server);
const core     = require('lr-main');
const road     = core('webserver')
  .extension('router', router, true);
```

---
