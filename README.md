# QA Lab Auth Automation

This project contains WebdriverIO end-to-end tests written in JavaScript (ES modules) for the authentication flows on the QA Lab site:

- Sign Up page
- Login page
- navigation between pages
- positive and negative validation scenarios

This is a WebdriverIO project, not a TypeScript project.

## Stack

- WebdriverIO
- Mocha
- JavaScript (ES modules)
- Chrome browser
- Node.js

## Prerequisites

- Node.js 18+
- Google Chrome installed
- npm

## Installation

```bash
npm install
```

## Run tests

To run all tests:

```bash
npm test
```

To run a specific spec file:

```bash
npx wdio run ./wdio.conf.js --spec ./test/specs/test.e2e.js
```

## Project structure

```text
.
├── .gitignore
├── README.md
├── package.json
├── wdio.conf.js
├── test/
│   ├── pageobjects/
│   │   ├── page.js
│   │   ├── login.page.js
│   │   ├── signup.page.js
│   │   └── secure.page.js
│   └── specs/
│       └── test.e2e.js
└── node_modules/
```

## Notes

The project includes a fixed ChromeDriver configuration to match the local Chrome version on the machine and prevent browser-driver version mismatch issues during local execution.
