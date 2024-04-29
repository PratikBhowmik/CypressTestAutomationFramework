//Javascript alerts
//Simple alert
//Prompt alert
//Confirmation alert

//Sweet alerts

describe(`Alerts`, () => {

    //Simple alert
    it(`test cases for simple alert`, () => {
        cy.visit(`https://web-locators-static-site-qa.vercel.app/Alerts`);
        cy.get(`div[class = 'Alert_section1']`).contains(`Show Alert`).click();
        cy.on(`window:alert`, (text) => {
            expect(text).to.equal('Simple is the always the appropriate choice');
            return true;
        })
    })

    //Prompt alert
    it(`Test case for confirmation alert`, () => {
        cy.visit(`https://web-locators-static-site-qa.vercel.app/Alerts`);
        
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('Hi');
        })
        cy.get(`div[class = 'Alert_section3']`).contains(`Add Remarks`).click();
    })

    //Confirmation alert
    it(`Test case for prompt alert`, () => {
        cy.visit(`https://web-locators-static-site-qa.vercel.app/Alerts`);
        cy.get(`div[class = 'Alert_section2']`).contains(`Show Agreement`).click();
        cy.on(`window:confirm`, (text) => {
            expect(text).to.equal(`Do you agree with the terms and conditions?`);
            return true;
        })
    })
})