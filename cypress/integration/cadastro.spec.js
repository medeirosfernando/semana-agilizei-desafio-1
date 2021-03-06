/// <reference types="cypress" />

const Chance = require('chance')
const chance = new Chance()

describe('Cadastro', () => {
    it('cadastro de usuário no site', () => {
        cy.visit('/')
        cy.get('a.login').click()
        cy.get('input#email_create').type(chance.email())
        cy.get('button#SubmitCreate').click()
        cy.get('input#id_gender1').check('1')
        cy.get('input#customer_firstname').type(chance.first())
        cy.get('input#customer_lastname').type(chance.last())
        cy.get('input#passwd').type(chance.hash( { length: 8 }))
        cy.get('select#days').select('1')
        cy.get('select#months').select('12')
        cy.get('select#years').select('1990')
        cy.get('input#newsletter').check('1')
        cy.get('input#optin').check('1')
        cy.get('input#firstname').type(chance.first())
        cy.get('input#lastname').type(chance.last())
        cy.get('input#company').type(chance.company())
        cy.get('input#address1').type(chance.street())
        cy.get('input#address2').type(chance.street( { short_suffix: true }))
        cy.get('input#city').type(chance.city())
        cy.get('div#uniform-id_state').click( { force: true })
        cy.get('select#id_state').select('6')
        cy.get('input#postcode').type(chance.zip())
        cy.get('textarea#other').type(chance.sentence( { words: 5 }))
        cy.get('input#phone').type(chance.phone())
        cy.get('input#phone_mobile').type(chance.phone())
        cy.get('input#alias').type(chance.first())
        cy.get('button#submitAccount').click()
        cy.url().should('eq', Cypress.config().baseUrl + 'index.php?controller=my-account')
        cy.get('p[class="info-account"]').should('contain', 'Welcome to your account.')
    })
})