/// <reference types="cypress" />

describe("Mercari User Test", () => {
  before(() => {
    cy.visit("/");
  });

  it("successfully loads the home page", () => {
    cy.loadHomePage();
  });

  it("logs into the site using Env variables", () => {
    cy.visit("/login");

    const username = Cypress.env("USERNAME");
    const password = Cypress.env("PASSWORD");
    cy.login(username, password);

    cy.isVisible([
      "SearchInput",
      "NotificationsButton",
      "UserIcon",
      "ChatIcon",
    ]);
  });

  it("searches for an item", () => {
    cy.itemSearch();
  });

  it("selects item", () => {
    cy.get("[data-testid=ItemContainer]:first").click();
  });

  it("adds item to cart", () => {
    cy.addToCart();
  });

  it("removes item from cart", () => {
    cy.removeCartItems();
  });

  it("logs out", () => {
    cy.logOut();
  });
});
