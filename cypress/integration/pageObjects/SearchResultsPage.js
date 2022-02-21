class SearchResultsPage {
  confirmBreadcrumb(searchedItem) {
    cy.getByTestId("NameBreadcrumb").should("contain", searchedItem);
  }

  confirmSearchResults(searchedItem) {
    cy.getByTestId("SearchResults").should("not.be.empty");
    cy.getByTestId("SearchKeyword").should("contain", searchedItem);
  }
}

export default SearchResultsPage;
