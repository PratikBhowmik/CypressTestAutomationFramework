import { LoginPage } from "../../pages/LoginPage.cy"
import loginData from "../../fixtures/loginData.json"
import { NDRpage } from "../../pages/NDRpage.cy"
const loginObj = new LoginPage()
const ndrObj = new NDRpage()

beforeEach(() => {
    loginObj.openUrl()
    loginObj.login(loginData.loginPhnNumber, loginData.otp)
    ndrObj.launching_ndr()
})

describe('NDR tab test cases', () => {
    it.skip('NDR_tab_01', () => {
        cy.reload()
        cy.url().should('eq', 'http://v2.nushop-dashboard.kaip.in/orders/ndr')
    })

    it.skip('NDR_tab_02', () => {
        cy.reload()
        cy.get('.rs-input').clear().type('NSL1700414534582')
        cy.get('.rs-input-group-addon.rs-input-group-btn.rs-btn.rs-btn-default').click()
        cy.get('.Flexbox_flex-row__aKbHb.Flexbox_nowrap__8vOkG.NDRCard_card-container-wrapper__t0h68.rs-flex-box-grid.rs-flex-box-grid-top.rs-flex-box-grid-start').should('contain.text', 'NSL1700414534582')
    })

    it.skip('NDR_tab_03', () => {
        cy.reload()
        cy.get('.rs-picker-toggle.rs-btn.rs-btn-default').eq(0).click()
        cy.get('.rs-picker-select-menu-item').contains('AWB Number').click()
        cy.get('.rs-input').clear().type('DUMI4WXQO72Q')
        cy.get('.rs-input-group-addon.rs-input-group-btn.rs-btn.rs-btn-default').click()
        cy.get('.Flexbox_flex-row__aKbHb.Flexbox_nowrap__8vOkG.NDRCard_card-container-wrapper__t0h68.rs-flex-box-grid.rs-flex-box-grid-top.rs-flex-box-grid-start').should('contain.text', 'DUMI4WXQO72Q')
    })

    it.skip('NDR_tab_03', () => {
        cy.reload()
        cy.get('.rs-picker-toggle.rs-btn.rs-btn-default').eq(0).click()
        cy.get('.rs-picker-select-menu-item').contains('Customer No.').click()
        cy.get('.rs-input').clear().type('8939117490')
        cy.get('.rs-input-group-addon.rs-input-group-btn.rs-btn.rs-btn-default').click()
        cy.get('.Flexbox_flex-column__cNkZ2.Flexbox_align-middle__-J0b5.NoFilterFound_wrapper__haM12.rs-flex-box-grid.rs-flex-box-grid-top.rs-flex-box-grid-center').should('contain.text', 'There are currently no result available based on selected filter criteria.')
    })

    it('NDR_tab_04', () => {
        cy.reload()

        cy.get('.rs-picker-toggle.rs-btn.rs-btn-default.rs-btn-md').eq(0).click()

        cy.get('.rs-picker-check-menu.rs-picker-check-menu-items > div').eq(0).click()

        cy.get('.Button_button-ghost__rieSu.button-loading-undefined.rs-btn.rs-btn-ghost.rs-btn-sm').contains('Apply Filters').click()

        // cy.get('[class = "Flexbox_flex-column__cNkZ2 Flexbox_align-middle__-J0b5 NoFilterFound_wrapper__haM12 rs-flex-box-grid rs-flex-box-grid-top rs-flex-box-grid-center"]').should('not.contain', '2')

        cy.get('.rs-picker-toggle.rs-btn.rs-btn-default.rs-btn-md').eq(0).click()

        cy.get('.rs-picker-toggle.rs-btn.rs-btn-default.rs-btn-md').eq(0).click()

        cy.get('.rs-picker-check-menu.rs-picker-check-menu-items > div').eq(1).click()

        cy.get('.Button_button-ghost__rieSu.button-loading-undefined.rs-btn.rs-btn-ghost.rs-btn-sm').contains('Apply Filters').click()

        // cy.get('[class = "Flexbox_flex-column__cNkZ2 Flexbox_align-middle__-J0b5 NoFilterFound_wrapper__haM12 rs-flex-box-grid rs-flex-box-grid-top rs-flex-box-grid-center"]').should('not.contain', '1')

        cy.get('.rs-picker-toggle.rs-btn.rs-btn-default.rs-btn-md').eq(0).click()

        cy.get('.rs-picker-toggle.rs-btn.rs-btn-default.rs-btn-md').eq(0).click()

        cy.get('.rs-picker-check-menu.rs-picker-check-menu-items > div').eq(2).click()

        cy.get('.Button_button-ghost__rieSu.button-loading-undefined.rs-btn.rs-btn-ghost.rs-btn-sm').contains('Apply Filters').click()

        // cy.get('[class = "Flexbox_flex-column__cNkZ2 Flexbox_align-middle__-J0b5 NoFilterFound_wrapper__haM12 rs-flex-box-grid rs-flex-box-grid-top rs-flex-box-grid-center"]').should('not.contain', '2')

    })

    it('NDR_tab_05', () => {
        cy.reload()

        cy.get('[class = "rs-picker-toggle rs-btn rs-btn-default rs-btn-md"]').eq(1).click()

        cy.get('[class = "rs-picker-check-menu rs-picker-check-menu-items"] > div').eq(0).click()

        cy.get('.Button_button-ghost__rieSu.button-loading-undefined.rs-btn.rs-btn-ghost.rs-btn-sm').contains('Apply Filters').click()

        cy.get('.Flexbox_flex-column__cNkZ2.Flexbox_align-middle__-J0b5.NoFilterFound_wrapper__haM12.rs-flex-box-grid.rs-flex-box-grid-top.rs-flex-box-grid-center').should('contain.text', 'There are currently no result available based on selected filter criteria.')

    })
})