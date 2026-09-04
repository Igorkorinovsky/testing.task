# QA Lab Auth Automation

Small WebdriverIO + TypeScript project for testing the authentication flows on the QA Lab app.

## Stack
- WebdriverIO v9
- TypeScript
- Mocha
- Chrome + ChromeDriver

## What is covered
- sign up success flow
- login success flow
- navigation between signup and login pages
- negative validation cases for invalid email/password

## Install
```bash
npm install
```

## Run tests
```bash
npm test
```

Optional single spec:
```bash
npx wdio run ./wdio.conf.ts --spec ./test/specs/test.e2e.ts
```

## Type check
```bash
npx tsc --noEmit
```
