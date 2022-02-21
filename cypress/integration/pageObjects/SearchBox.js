class SearchBox {
  get input() {
    return cy.getByTestId("SearchInput");
  }

  performEmptySearch() {
    cy.getByTestId("SearchIcon").click();
  }

  displayDropdown() {
    this.input.click();
    cy.getByTestId("SearchesGreyPills").should("be.visible");
  }

  performItemSearch(searchedItem) {
    this.input.type(searchedItem);
    cy.getByTestId("SearchIcon").click();
  }

  dropdownRecentSearch(searchedItem) {
    this.input.click();
    cy.getByTestId("SearchesGreyPills").should("be.visible");
    cy.getByTestId("SearchesGreyPills").first().should("contain", searchedItem);
  }

  clearSearchHistory() {
    cy.getByTestId("ClearSearchHistory").click();
    cy.getByTestId("SearchesGreyPills").first().should("contain", searchedItem);
  }
}

export default SearchBox;
