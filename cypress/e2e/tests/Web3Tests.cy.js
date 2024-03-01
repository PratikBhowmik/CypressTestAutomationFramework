beforeEach(() => {
    cy.visit("https://how3-web-next-git-feature-apple-news-ui-how3.vercel.app/");
    cy.reload();
})

describe("Web3 test cases",() => {

    it ('tc_web3test_01', () => {
        // cy.viewport('iphone-se2');
        cy.get('[class = "px-2 text-sm md:text-base hover:text-white transition-all hover:ease-in-out duration-300"]').click();
        cy.wait(3000);
        cy.get('[class = " flex w-full items-center justify-between pb-4"]').should('contain.text','What\'s Trending');
    })

    it ('tc_web3test_02', () => {
        // cy.viewport('iphone-se2');
        cy.scrollTo(0,1000);
        cy.get("[class = \"flex items-center gap-2 \"]").contains("News").click();
        cy.wait(3000);
        cy.get('[class = " flex w-full items-center justify-between pb-4"]').should('contain.text','What\'s Trending');
    })

    it ('tc_web3test_03', () => {
        // cy.viewport('iphone-se2');
        cy.get("[class = \"fixed z-[9999] flex justify-between w-full px-8 py-2 top-4 font-poppins\"]").contains("Learn").click();
        cy.wait(3000);
        cy.url().should('include','app/learn');
    })

    it('tc_web3test_04', () => {
        cy.get("[class = \"fixed z-[9999] flex justify-between w-full px-8 py-2 top-4 font-poppins\"]").contains("Earn").click();
        cy.wait(3000);
        cy.url().should("include", "app/#earn");
    })

    it ('tc_web3test_05', () => {
        cy.get("[class = \"fixed z-[9999] flex justify-between w-full px-8 py-2 top-4 font-poppins\"]").should("contain.text","HOW3");
    })

    it ('tc_web3_test_05', () => {
        cy.get("[class = \"fixed z-[9999] flex justify-between w-full px-8 py-2 top-4 font-poppins\"]").should("contain.text","Get started");
    })

})