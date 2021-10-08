/// <reference types="cypress" />

describe("Mercari User Test", () => {
  before(() => {
    cy.visit("/");
  });

  it("successfully loads the home page", () => {
    cy.get("[data-testid=MercariLogo]").should("be.visible");
    cy.get("[data-testid=SearchInput]").should("be.visible");
    cy.get("[data-testid=SignupButton]").should("be.visible");
    cy.get("[data-testid=LoginButton]").should("be.visible");
    cy.get("[data-testid=CategoryNav]").should("be.visible");
  });

  it("searches for an item", () => {
    cy.get("[data-testid=SearchInput]").type("baseball cards{enter}");

    cy.get("[data-testid=SearchKeyword]").should("contain", "baseball cards");
  });

  it("selects item", () => {
    cy.get("[data-testid=ItemContainer]:first").click();
  });

  it("adds item to cart", () => {
    cy.addToCart();
  });

  it("removes item from cart", () => {
    cy.get("[data-testid=CartItemDesktop] button").contains("Remove").click();
    cy.get(".ConfirmationDialog__ConfirmFooter-cjqtjk-0 button")
      .contains("OK")
      .click();
  });
});
