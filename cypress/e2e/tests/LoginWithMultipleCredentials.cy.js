describe(`test scenario for multiple user login`, () => {
    it(`test case of multiple user login`, () => {
        cy.visit(`https://opensource-demo.orangehrmlive.com/web/index.php/auth/login`);

        cy.fixture(`loginData`).then((data) => {
            data.credentials.forEach(credentials => {
                cy.get(`input[name="username"]`).clear().type(credentials.username);
                cy.get(`input[name="password"]`).clear().type(credentials.password);
                cy.get(`button[type="submit"]`).click();

                if (credentials.username == `Admin` && credentials.password == `admin123`) {
                    cy.log(`logged in successfully!`);
                    cy.url().should(`eq`, `https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index`);
                    cy.get(`.oxd-userdropdown-tab`).click();
                    cy.get(`.oxd-userdropdown-link`).contains(`Logout`).click();

                } else {
                    cy.log(`Not logged in successfully!`);
                    cy.get(`div[role="alert"]`).should(`be.visible`);
                }
            });
        });
    })
})