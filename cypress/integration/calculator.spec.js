describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })


  it('should do the arithmetical operations update the display with the result of the operation', () => {
  cy.get('#number2').click();
  cy.get('#operator_add').click();
  cy.get('#number1').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('have.text', '3')
})

it('Can multiple operations be chained together', () => {
  cy.get('#number2').click();
  cy.get('#operator_add').click();
  cy.get('#number1').click();
  cy.get('#operator-multiply').click();
  cy.get('#number2').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('have.text', '6')

})

it('Is the output as expected for a range of numbers?', () => {
  cy.get('#number4').click();
  cy.get('#decimal').click();
  cy.get('#number5').click();
  cy.get('#operator-subtract').click();
  cy.get('#number5').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('have.text', '-0.5')

})


it('Is the output as expected for divide by 0?', () => {
  cy.get('#number4').click();
  cy.get('#number5').click();
  cy.get('#operator-divide').click();
  cy.get('#number0').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('have.text', 'Infinity')

})

})