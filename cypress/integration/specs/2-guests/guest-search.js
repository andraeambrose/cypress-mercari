/// <reference types="cypress" />
import SearchBox from "../../pageObjects/SearchBox";
import SearchResultsPage from "../../pageObjects/SearchResultsPage";

const searchedItem = "baseball cards";

describe("Item Search Test", () => {
  let search;
  let results;

  beforeEach(() => {
    cy.visit("/");
    search = new SearchBox();
    results = new SearchResultsPage();
  });

  it("should search on empty input", () => {
    search.performEmptySearch();
    cy.getByTestId("SearchKeyword").should("contain", "Search results");
    cy.getByTestId("DesktopSearchBreadcrumbs").should("not.be.visible");
  });

  it("should show and hide dropdown", () => {
    search.displayDropdown();
    cy.get("body").click(0, 0);
    cy.getByTestId("SearchesGreyPills").should("not.be.exist");
  });

  describe("Perform Search", () => {
    beforeEach(() => {
      search.performItemSearch(searchedItem);
      results.confirmBreadcrumb(searchedItem);
    });

    it("should search for an item", () => {
      results.confirmSearchResults(searchedItem);
    });

    it("should confirm recently searched item", () => {
      search.dropdownRecentSearch(searchedItem);
    });

    it("should clear search history", () => {
      search.dropdownRecentSearch(searchedItem);
      cy.getByTestId("ClearSearchHistory").click();
      cy.getByTestId("SearchesGreyPills")
        .first()
        .should("not.contain", searchedItem);
    });
  });
});
