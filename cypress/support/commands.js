// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add("login", (username, password) => {
  cy.get("[data-testid=EmailInput]")
    .type(username)
    .get("[data-testid=PasswordInput]")
    .type(password, { log: false })
    .get("[data-testid=LoginSubmitButton]")
    .click();
});
//
//
Cypress.Commands.add("addToCart", () => {
  cy.get(
    "[data-testid=AddToCartButton_aboveDesktop_belowDesktop_revamp]"
  ).click();
  cy.get("[data-testid=CartIconWithCounter]").click();
  cy.get("[data-testid=CartCount]").should("contain", "1 item");
});
