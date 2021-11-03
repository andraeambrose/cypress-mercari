/// <reference types="cypress" />

describe("Mercari Guest Test", () => {
  before(() => {
    cy.visit("/");
  });

  it("successfully loads the home page", () => {
    cy.loadHomePage();
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
});
