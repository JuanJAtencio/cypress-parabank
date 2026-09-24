# ParaBank QA Automation with Cypress

[![Cypress E2E Tests](https://github.com/JuanJAtencio/cypress-parabank/actions/workflows/cypress-tests.yml/badge.svg)](https://github.com/JuanJAtencio/cypress-parabank/actions/workflows/cypress-tests.yml)

End-to-end test automation portfolio project for the [ParaBank](https://parabank.parasoft.com/parabank) banking demo. The suite covers authentication, customer registration and fund transfers using Cypress, JavaScript, fixtures, Page Object Model and GitHub Actions.

## Test coverage

| Module | Scenario | Expected result |
| --- | --- | --- |
| Authentication | Login with valid credentials | Account overview is displayed |
| Authentication | Login with invalid credentials | Error message is displayed |
| Registration | Register a customer with unique data | Welcome message and authenticated session |
| Transfers | Transfer funds between different accounts | Transfer confirmation is displayed |
| Network | Inspect the transfer request with `cy.intercept()` | Server responds with HTTP `200` |

See the complete [test strategy](docs/test-strategy.md) for scope, risks and execution criteria.

## Technologies

- Cypress 14
- JavaScript
- Node.js and npm
- Page Object Model
- Fixtures and dynamic test data
- Network validation with `cy.intercept()`
- GitHub Actions
- JUnit reports

## Project structure

```text
.
├── .github/workflows/cypress-tests.yml
├── cypress/
│   ├── e2e/
│   ├── fixtures/
│   ├── pages/
│   └── support/
├── docs/test-strategy.md
├── cypress.config.js
├── package.json
└── README.md
```

## Run locally

Requirements: Node.js 20 or newer and npm.

```bash
git clone https://github.com/JuanJAtencio/cypress-parabank.git
cd cypress-parabank
npm install
npm test
```

Open the Cypress interface:

```bash
npm run cypress:open
```

Run the CI command with JUnit reporting:

```bash
npm run test:ci
```

## Automation design

- `baseUrl` centralizes the target environment.
- Page Objects isolate selectors and reusable user actions.
- Fixtures separate test data from test logic.
- Unique usernames prevent registration collisions.
- Transfers select different origin and destination accounts.
- Run-mode retries reduce noise caused by the public demo environment.
- Screenshots and JUnit results are uploaded by GitHub Actions for 14 days.

## Continuous integration

The `Cypress E2E Tests` workflow runs on pushes and pull requests to `main`, and it can also be started manually from the Actions tab. A failed execution preserves screenshots and the JUnit report as downloadable evidence.

## Author

**Juan José Atencio** — QA Analyst focused on banking, API testing and test automation.
