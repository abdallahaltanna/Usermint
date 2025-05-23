describe('Load Users from users.json', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })

  it('should display mocked users in the table', () => {
    cy.intercept('GET', '/users.json', {
      statusCode: 200,
      body: [
        {
          username: 'jdoe',
          firstName: 'John',
          lastName: 'Doe',
          email: 'jdoe@example.com'
        },
        {
          username: 'asmith',
          firstName: 'Alice',
          lastName: 'Smith',
          email: 'asmith@example.com'
        }
      ]
    }).as('getUsers')

    cy.wait('@getUsers')

    cy.contains('jdoe').should('exist')
    cy.contains('John').should('exist')
    cy.contains('Doe').should('exist')
    cy.contains('jdoe@example.com').should('exist')

    cy.contains('asmith').should('exist')
    cy.contains('Alice').should('exist')
    cy.contains('Smith').should('exist')
    cy.contains('asmith@example.com').should('exist')
  })
})
