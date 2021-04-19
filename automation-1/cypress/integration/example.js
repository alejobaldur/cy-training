const { title } = require("process");

describe('My First Test', () => {
    it('Does not do much!', () => {
        cy.visit('/')
        cy.wait(2000);
    })

    // it.only('Test form', () => {
    //     cy.visit('/')
    //     cy.get('#header').find('h1').should('have.text','Training - Cypress')
    //     cy.get('[name="select"]').select('deploying a test')

    // })
    
    it('Test form', () => {
        cy.get('#header').find('h1').should('have.text','Training - Cypress')
        // cy.get('[name="select"]').select('deploying a test')

    })

    it('Test select', () => {
        cy.get('[name="select"]').select('creation a test')
            .should('have.value','creation a test')

        cy.get('[name="select"]').select('making a test').should('have.value', 'making a test')
        cy.get('[name="select"]').select('deploying a test').should('have.value', 'deploying a test')
    })

    it.only('Test upload a file', () => {
        cy.visit('/')
        const filepath = './Pictures/aa.JPG'
        // cy.get('input[type="file"]').attachFile('logo.jpg');
        cy.get('#file').attachFile('logo.jpg');
    })

    it('Test SEND button', () => {

    })

    it('Test CLEAR button', () => {
        
    })
})