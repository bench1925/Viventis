describe("new tournament", () => {
    it("should add new tournament", () => {
        cy.visit('/tournaments/new');
        cy.get('[data-testid="tournament-form"]').should('exist');
        cy.get('h1').contains('New Tournament');
        cy.get('[data-testid="tournament-info-card"]').should('exist');
        cy.get('[data-testid="tournament-form-name"]').type(`Sample Tournament ${new Date().getTime()}`);
        cy.get('[data-testid="tournament-form-description"]').type("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mi nisi, auctor vel neque at, malesuada porta quam. Vestibulum purus mauris, posuere sed arcu et, vehicula efficitur lacus.");
        cy.get('[data-testid="tournament-form-format"]').select("single elimination");
        cy.get('[data-testid="tournament-form-submit"]').should('exist');
        cy.get('[data-testid="tournament-form-submit"]').contains("Create Tournament");
        cy.get('[data-testid="tournament-form-submit"]').click();
        cy.get('[data-testid="tournament-form-success"]').should('exist');
        cy.get('[data-testid="tournament-form-success"]').contains('New tournament has been added');
    });

    it("shouldn't add a new tournament and display missing name error", () => {
        cy.visit('/tournaments/new');
        cy.get('[data-testid="tournament-form"]').should('exist');
        cy.get('[data-testid="tournament-form-description"]').type("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mi nisi, auctor vel neque at, malesuada porta quam. Vestibulum purus mauris, posuere sed arcu et, vehicula efficitur lacus.");
        cy.get('[data-testid="tournament-form-format"]').select("single elimination");
        cy.get('[data-testid="tournament-form-submit"]').click();
        cy.get('[data-testid="tournament-form-validation-error"]').should('exist');
    });

    it("shouldn't add a new tournament and display missing format error", () => {
        cy.visit('/tournaments/new');
        cy.get('[data-testid="tournament-form"]').should('exist');
        cy.get('[data-testid="tournament-form-name"]').type(`Sample Tournament ${new Date().getTime()}`);
        cy.get('[data-testid="tournament-form-description"]').type("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mi nisi, auctor vel neque at, malesuada porta quam. Vestibulum purus mauris, posuere sed arcu et, vehicula efficitur lacus.");
        cy.get('[data-testid="tournament-form-submit"]').click();
        cy.get('[data-testid="tournament-form-validation-error"]').should('exist');
    });

    it("shouldn't add a new tournament and display required fields error", () => {
        cy.visit('/tournaments/new');
        cy.get('[data-testid="tournament-form"]').should('exist');
        cy.get('[data-testid="tournament-form-description"]').type("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mi nisi, auctor vel neque at, malesuada porta quam. Vestibulum purus mauris, posuere sed arcu et, vehicula efficitur lacus.");
        cy.get('[data-testid="tournament-form-submit"]').click();
        cy.get('[data-testid="tournament-form-validation-error"]').should('exist');
    });
});