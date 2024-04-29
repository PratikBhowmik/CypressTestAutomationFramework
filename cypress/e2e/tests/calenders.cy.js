//What is expected result?
describe(`Validation of calender`, () => {
    it (`TC`, () => {
        cy.visit(`https://www.irctc.co.in/nget/train-search`);
        cy.get('.ui-autocomplete > .ng-tns-c57-8').type(`Agartala`);
        cy.get('.ui-autocomplete > .ng-tns-c57-9').type(`Bengaluru`,{force : true});
        cy.get('#journeyClass > .ui-dropdown').click();
        cy.get(':nth-child(2) > .ui-dropdown-item').click();
        cy.get('#journeyClass > .ui-dropdown').click();
        cy.get('.col-md-3 > .search_btn').click();
    })
})