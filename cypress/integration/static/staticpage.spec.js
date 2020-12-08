import { staticpages } from '../../data/constants';
describe('Testing Static pages', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  // We check if the Backend is up and running
  it('APIs are up and running', () => {
    staticpages.map((itemURL) => {
      cy.request('GET', itemURL).then((resp) => {
        // Server is up for that request
        expect(resp.status).to.eq(200);
      });
    });
  });

  it('Component exsist and load correctly', () => {
    // The card´s parts exists
    cy.visit(staticpages[0]);
    cy.get('.panel').should('exist');
    cy.get('.static').should('exist');
    cy.get('.static__content').should('exist');
    cy.get('.static__content-container').should('exist');
  });
});
