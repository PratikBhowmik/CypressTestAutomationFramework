//Web tables
//Two types - Static and Dynamic tables
//Static table has fixed no of columns and rows unlike dynamic tables
//What do you want to validate?

describe(`Handling webtales`, () => {
    it(`test case 01`, () => {
        cy.visit(`https://web-locators-static-site-qa.vercel.app/Web%20Table`);
        cy.get(`thead[class = "MuiTableHead-root css-1wbz3t9"]`).invoke(`text`).then((text) => {
            cy.log(text);
            expect(text).to.contain(`Size (Listed in our Website)`);
        });
    })

    it (`test case 02`, () => {
        cy.visit(`https://web-locators-static-site-qa.vercel.app/Web%20Table`);
        cy.visit(`div[class="MuiTabs-scroller MuiTabs-fixed css-1anid1y"]`).click();
    })
})