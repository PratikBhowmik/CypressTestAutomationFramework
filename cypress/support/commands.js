// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// Cypress.Commands.add('login' , (phonenumber, otp) => {
//     cy.visit('')
//     cy.get('.Input_input-group__c6y0f.undefined.rs-input-group').type(phonenumber)
//     cy.get('.Button_button-primary__9i0Rz.button-loading-false.Login_margin-top__a1Tjg.rs-btn.rs-btn-primary.rs-btn-lg.rs-btn-block').click()
//     cy.get('[placeholder = XXXX]').type(otp)
//     cy.get('.Button_button-primary__9i0Rz.button-loading-false.Login_margin-top__a1Tjg.rs-btn.rs-btn-primary.rs-btn-lg.rs-btn-block').click()
// })