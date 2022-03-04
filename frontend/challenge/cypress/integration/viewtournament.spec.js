describe('tournament page', () => {
    it('should display tournament page', () => {
        cy.visit('/')
        cy.get('h1').contains('Tournament List');
        cy.get('[data-testid="tournament-list"]').should('exist');
        cy.get('[data-testid="tournament-list-0"]').click();
        cy.url().should('include', '/tournaments');
        cy.get('[data-testid="tournament-info-card"]').should('exist');
        cy.get('[data-testid="tournament-name"]').should('exist');
        cy.get('[data-testid="tournament-form-submit"]').should('exist');
        cy.get('[data-testid="tournament-form-submit"]').contains("Save Changes");
    });

    it('should update tournament page', () => {
        cy.visit('/')
        cy.get('h1').contains('Tournament List');
        cy.get('[data-testid="tournament-list"]').should('exist');
        cy.get('[data-testid="tournament-list-0"]').click();
        cy.url().should('include', '/tournaments');
        cy.get('[data-testid="tournament-name"]').should('exist');
        cy.get('[data-testid="tournament-form-submit"]').should('exist');
        cy.get('[data-testid="tournament-form-name"]').type("Tournament Update");
        cy.get('[data-testid="tournament-form-description"]').type(" Added Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mi nisi, auctor vel neque at, malesuada porta quam. Vestibulum purus mauris, posuere sed arcu et, vehicula efficitur lacus.");
        cy.get('[data-testid="tournament-form-format"]').select("double elimination");
        cy.get('[data-testid="tournament-form-submit"]').click();

        if(!cy.get('[data-testid="tournament-form-api-error"]').should("exist")) {
            cy.get('[data-testid="tournament-form-success"]').should('exist');
            cy.get('[data-testid="tournament-form-success"]').contains('Tournament has been updated');
        }
    });

    it('should display matches in tournament page', () => {
        cy.visit('/')
        cy.get('[data-testid="tournament-list-0"]').click();
        cy.get('[data-testid="tournament-matches-card"]').should('exist');
        if(cy.get('[data-testid="tournament-matches-table"]').should('exist')) {
            cy.get('[data-testid="tournament-matches-row-0"]').should('exist')
        }
        else {
            cy.get('[data-testid="tournament-matches-no-data"]').should('exist')
        }
    });

    it('should display participants in tournament page', () => {
        cy.visit('/')
        cy.get('[data-testid="tournament-list-0"]').click();
        cy.get('[data-testid="tournament-participants-card"]').should('exist');
        if(cy.get('[data-testid="tournament-participants-table"]').should('exist')) {
            cy.get('[data-testid="tournament-participants-row-0"]').should('exist')
        }
        else {
            cy.get('[data-testid="tournament-participants-no-data"]').should('exist')
        }
    });
});
22