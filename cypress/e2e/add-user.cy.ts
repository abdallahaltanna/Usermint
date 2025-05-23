describe('Add User Flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })

  it('should open modal, submit form, and add user to the table', () => {
    cy.getByData('add-user-home-btn').click()

    cy.getByData('username').type('abdallahtanna')
    cy.getByData('firstname').type('Abdallah')
    cy.getByData('lastname').type('Altanna')
    cy.getByData('email').type('abdallahmyaltanna@gmail.com')

    cy.getByData('add-user-modal-btn').click()

    cy.contains('User added successfully').should('exist')

    cy.contains('abdallahtanna').should('exist')
    cy.contains('Abdallah').should('exist')
    cy.contains('Altanna').should('exist')
    cy.contains('abdallahmyaltanna@gmail.com').should('exist')
  })
})
