describe('Input Field Testing', () => {
  beforeEach(() => {
      // Assuming you are running the HTML file locally, adjust the URL accordingly
      cy.visit('http://surajtest.atspace.cc/cypress.php'); 
  });

  it('should type into the input field and submit the form', () => {
      // Check if input field exists
      cy.get('#username').should('exist');

      // Type a value into the input field
      cy.get('#username').type('testuser');

      // Verify the value has been entered correctly
      cy.get('#username').should('have.value', 'testuser');

      // Click the submit button
      cy.get('#submit-btn').click();

      // Check for any feedback or confirm action (if implemented)
      cy.get('#feedback').should('exist');
  });
});
