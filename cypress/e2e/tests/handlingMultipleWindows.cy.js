describe(`Multiple window`, function () {

    beforeEach(function () {
        cy.visit(`https://web-locators-static-site-qa.vercel.app/Windows`);
    })

    it(`new window`, function () {

        cy.get(`.Windows_section1`).contains(`Launch New Window`).click();

        cy.window().then(function (win) {
            const newWindow = win.open('', '_blank');
            cy.wrap(newWindow).as('newWindow');
            cy.get(`@newWindow`).then(function (newWin) {
                newWin.location.href = 'https://www.google.com';
                cy.wrap(newWin.document).find('textarea.gLFyf').type('Hello');
            })
        })
    })


    it(`new tab`, function () {

        cy.get(`.Windows_section2`).contains(`Launch New Tab`).click();
        cy.window().then(function (win) {
            cy.wait(3000);
            expect(win.document.title).to.include(``);

            cy.get(`div[class = 'RNNXgb']`).type(`Hey, myself Pratik Bhowmik!`);
        })
    })
})