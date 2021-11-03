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

//TestId helper function
const cyTestid = (id) => cy.get(`[data-testid="${id}"]`);

Cypress.Commands.add("login", (username, password) => {
  //verify that username is a string and it exists
  expect(username, "username was set").to.be.a("string").and.not.be.empty;
  if (typeof password !== "string" || !password) {
    throw new Error("Missing password value, set using CYPRESS_password=...");
  }

  cyTestid("EmailInput").type(username || Cypress.env("USERNAME"));

  cyTestid("PasswordInput").type(password || Cypress.env("PASSWORD"), {
    log: false,
  });
  cyTestid("LoginSubmitButton").click();
});

Cypress.Commands.add("addToCart", () => {
  cyTestid("AddToCartButton_aboveDesktop_belowDesktop_revamp").click();
  cyTestid("CartIconWithCounter").click();
  cyTestid("CartCount").should("contain", "1 item");
});

Cypress.Commands.add("loadHomePage", () => {
  const homePageSelectors = [
    "MercariLogo",
    "SearchInput",
    "SignupButton",
    "LoginButton",
    "CategoryNav",
  ];

  homePageSelectors.forEach((testid) => {
    cy.get(`[data-testid=${testid}]`).should("be.visible");
  });
});
Cypress.Commands.add("itemSearch", () => {
  cyTestid("SearchInput").type("baseball cards{enter}");
  cyTestid("SearchKeyword").should("contain", "baseball cards");
});

Cypress.Commands.add("removeCartItems", () => {
  cy.get("[data-testid=CartItemDesktop] button").contains("Remove").click();
  cy.get(".ConfirmationDialog__ConfirmFooter-cjqtjk-0 button")
    .contains("OK")
    .click();
});

Cypress.Commands.add("logOut", () => {
  const logoutSelectors = ["UserIcon", "LogoutMenuItem"];

  logoutSelectors.forEach((selector) => {
    cyTestid(selector).click();
  });

  cyTestid("LoginButton").should("be.visible");
});

Cypress.Commands.add("isVisible", (testIds) => {
  testIds.forEach((ids) => cy.get(`data-testid=${ids}`)).should("be.visible");
});
