describe('Generate Random User Flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })

  it('should generate a new user and display it in the table', () => {
    cy.intercept('GET', `https://random-data-api.com/api/v2/users`).as(
      'generateUser'
    )

    cy.getByData('generate-user-btn').click()

    cy.wait('@generateUser')
      .its('response.body')
      .then((user) => {
        expect(user).to.have.all.keys(
          'username',
          'first_name',
          'last_name',
          'email'
        )

        cy.contains(user.username).should('exist')
        cy.contains(user.first_name).should('exist')
        cy.contains(user.last_name).should('exist')
        cy.contains(user.email).should('exist')
      })
  })
})
