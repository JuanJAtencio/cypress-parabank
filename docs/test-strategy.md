# Test Strategy

## Objective

Validate the principal customer journeys of the ParaBank banking demo through maintainable end-to-end automation with Cypress.

## Scope

| Area | Coverage |
| --- | --- |
| Authentication | Valid and invalid login |
| Registration | Customer creation with unique test data |
| Transfers | Transfer between different accounts |
| Network | Transfer request and HTTP response validation |

## Test approach

- Page Objects centralize selectors and actions.
- Fixtures provide reusable test data.
- Dynamic usernames prevent collisions between executions.
- UI assertions verify the final user-visible result.
- `cy.intercept()` verifies the transfer request at network level.
- Tests run locally and on every push or pull request through GitHub Actions.

## Entry criteria

- ParaBank is available.
- Dependencies are installed with `npm ci` or `npm install`.
- The demo credentials have access to at least two accounts for transfer testing.

## Exit criteria

- All five scenarios execute.
- All assertions pass.
- Cypress exits with code `0`.
- JUnit results are generated in CI.

## Known limitations

- ParaBank is a third-party public demo and can be temporarily unavailable.
- Shared demo credentials and account data may be reset externally.
- Registration creates data in the public environment.
- Run-mode retries mitigate transient failures but do not hide persistent defects.

## Risks not covered

- Accessibility and cross-browser compatibility.
- Load, stress and security testing.
- Database-level validation.
- Concurrent transfers and race conditions.
- Production banking integrations.
