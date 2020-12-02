describe('Homepage', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Load properly with title', () => {
        cy.title().should('include', 'Title');
    });

    it('Match snapshot', () => {
        cy.wait(400);
        cy.percySnapshot('Homepage');
    });
});
