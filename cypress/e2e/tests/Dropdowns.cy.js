describe("Handling dropdown in cypress", () => {

    //Single select dropdown
    //Multi select dropdown
    //Dropdowns without select tag
    beforeEach(() => {
        cy.visit(`https://web-locators-static-site-qa.vercel.app/Dropdown`);
    })

    it("dropdown by index", () => {

        cy.get('.Dropdown_section1 > :nth-child(2) > .MuiFormControl-root > .dropdown').select(5);
    })

    it("dropdown by value", () => {

        cy.get('.Dropdown_section1 > :nth-child(2) > .MuiFormControl-root > .dropdown').select(`Greece`);

    })

    it("dropdown by text", () => {

        cy.get('.Dropdown_section2 > :nth-child(2) > .MuiFormControl-root > .dropdown').select(`Van Henry`);
    })

    it(`Multiselect dropdowns`, () => {

        cy.get('.Mui-selected').click();
        cy.get('.MuiTabs-flexContainer > :nth-child(2)').click();
        cy.get('.DropdownMulti_section1 > .multi').select([`Android`, `Analytics`]);
    })

    it("dropdown without select tag", () => {

        cy.get('.MuiTabs-flexContainer > :nth-child(3)').click();
        cy.get('.DropdownNoSelect_section1 > :nth-child(2) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiSelect-select').click();
        cy.get('[data-value="Australia"] > .MuiListItemText-root > .MuiTypography-root').click();
    })

    it("Playing around with dropdowns", () => {
        cy.get(`.Dropdown_section1 > :nth-child(2) > .MuiFormControl-root > .dropdown`).then(() => {
            cy.log()
        })
    })
})