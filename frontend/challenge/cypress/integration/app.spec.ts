/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress


describe('tournaments', () => {
    it('should display tournaments list', () => {
        cy.visit('/')
        cy.get('h1').contains('Tournament List');
        cy.get('[data-testid="tournament-list-table"]').should('exist');
    });

    it('should not display more than 10 items', () => {
        cy.visit('/')
        if(cy.get('tr').length > 0) {
            cy.get('tr').should("exist");
            cy.get('tr').length.should('be.lte', 10);
        }
    });
});