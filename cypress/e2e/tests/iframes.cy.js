describe(`iframe related test cases`, () => {
    const getIframeDocument = () => {
        return cy.get('iframe[class = "iframe"]').its('0.contentDocument').should('exist');
    }

    const getIframeBody = () => {
        return getIframeDocument().its('body').should('not.be.undefined').then(cy.wrap);
    }

    it('iframe test case', () => {
        cy.visit('https://web-locators-static-site-qa.vercel.app/Frames');
        getIframeBody().find('button[class=\'button_frames_reject\']').should('have.text', 'Reject').click();
    })

    
})