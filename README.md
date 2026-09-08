# QA Lab Auth Automation

Small Playwright + TypeScript project for testing the authentication flows on the QA Lab app.

## Stack
- Playwright
- TypeScript
- Chromium

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

Run in headed mode to see the browser window:
```bash
npx playwright test --headed
```

Run a specific spec:
```bash
npx playwright test test/specs/test.e2e.ts --headed
```

## Type check
```bash
npx tsc --noEmit
```
