describe("Test cases" , () => {

    it ("verify login page launches" , () => {
        cy.visit("https://www.saucedemo.com/");
        // cy.get()
    })

    it ("Verify login cta is visible" , () => {
        cy.visit("https://www.saucedemo.com/");
        cy.get("#login-button").should("be.enabled");
    })


    it ("Verify login happens properly", () => {
        cy.visit("https://www/saucedemo.com/");
        cy.get("#user-name").type("abcc");
        cy.get("#password").type("12345");
        cy.get("#login-button").click();
        // cy.url().should().have();
    })


})
