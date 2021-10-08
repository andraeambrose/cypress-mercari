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

  it("logs into the site using Env variables", () => {
    cy.visit("/login");

    const username = Cypress.env("username");
    const password = Cypress.env("PASSWORD");
    cy.login(username, password);

    cy.get("[data-testid=SearchInput]").should("be.visible");
    cy.get("[data-testid=NotificationsButton]").should("be.visible");
    cy.get("[data-testid=UserIcon]").should("be.visible");
    cy.get("[data-testid=ChatIcon]").should("be.visible");
  });

  it("searches for an item", () => {
    cy.get("[data-testid=SearchInput]").type("baseball cards{enter}");

    cy.get("[data-testid=SearchKeyword]").should("contain", "baseball cards");
  });

  it("selects item", () => {
    cy.get("[data-testid=ItemContainer]:first").click();
  });

  it("adds item to cart", () => {
    cy.get(
      "[data-testid=AddToCartButton_aboveDesktop_belowDesktop_revamp]"
    ).click();
    cy.get("[data-testid=CartIconWithCounter]").click();
    cy.get("[data-testid=CartCount]").should("contain", "1 item");
  });

  it("removes item from cart", () => {
    cy.get("[data-testid=CartItemDesktop] button").contains("Remove").click();
    cy.get(".ConfirmationDialog__ConfirmFooter-cjqtjk-0 button")
      .contains("OK")
      .click();
  });

  it("removes item from cart", () => {
    cy.get("[data-testid=UserIcon]").click();
    cy.get("[data-testid=LogoutMenuItem]").click();

    cy.get("[data-testid=LoginButton]").should("be.visible");
  });
});
