describe('API test case', () => {

    it ("API test case", () => {
        cy.request("GET", "https://docs.cypress.io/guides/overview/why-cypress#API").then((response) => {
            expect(response.status).to.equal(200);
        });
    })
})