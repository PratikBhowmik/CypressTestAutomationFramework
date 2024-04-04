describe("Test scenario for multiple users login", () => {
    it("Test case for multiple users login", () => {
        cy.visit("https://www.facebook.com/");
        cy.fixture("loginData").then((data) => {
            data.credentials.forEach(credentials => {
                cy.get(`.fb_logo`).click();
                cy.get(`#email`).type(credentials.username);
                cy.get(`#pass`).type(credentials.password);
                cy.get(`[data-testid="royal_login_button"]`).click();
            });
        });
    })
})