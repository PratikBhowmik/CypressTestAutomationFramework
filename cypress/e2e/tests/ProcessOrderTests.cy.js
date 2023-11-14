import { LoginPage } from "../../pages/LoginPage"
import loginData from "../../fixtures/loginData.json"
import { ProcessOrderPage } from "../../pages/ProcessOrderPage"
const loginObj = new LoginPage()
const processOrderObj = new ProcessOrderPage()

beforeEach(() => {
    loginObj.openUrl()
    loginObj.login(loginData.loginPhnNumber, loginData.otp);
    processOrderObj.launching_processOrder()
})

describe('process order test cases', () => {

    it.skip('process_order_01', () => {
        cy.url().should('eq', 'http://v2.nushop-dashboard.kaip.in/orders/process-orders')
    })

    it('process_order_02', () => {
        cy.get('.Body_content__M-5ln').should('contain.text', 'Expired AWB')
        cy.get(':nth-child(2) > .tab').click()
        cy.get('[class = "ExpiredAWBOrdersCard_card__2yYch"]').then(($lis) => {
            expect($lis, 'all items').to.contain('EXPIRED')
        })
    })

    it.skip('process_order_03', () => {
        cy.get('.Body_content__M-5ln').should('contain.text', 'PG Pending Orders')
        cy.get(':nth-child(3) > .tab').click()
        cy.get('.PgPending_pg-pending-header__wXBL9').should('contain.text', 'Pending Orders')
    })

    it('process_order_04', () => {
        cy.wait(5000)
        cy.get('.Button_button-primary__9i0Rz.button-loading-undefined.rs-btn.rs-btn-primary.rs-btn-sm.rs-btn-block').then(($lis) => {
            expect($lis, 'all items').to.contain('Label')
        })
    })

    it.skip('process_order_05', () => {
        cy.wait(5000)
        cy.get('.Button_button-ghost__rieSu.button-loading-undefined.rs-btn.rs-btn-ghost.rs-btn-sm.rs-btn-block').then(($lis) => {
            expect($lis, 'all items').to.contain('Invoice')

        })
    })

    it.skip('process_order_06', () => {
        processOrderObj.verifyTotalNonDispatchedOrderText()
    })

    it.skip('process_order_07', () => {
        processOrderObj.verifyTextPrintSection()
    })

    it.skip('process_order_08', () => {
        processOrderObj.verifyTextPackSection()
    })

    it.skip('process_order_09', () => {
        cy.get('.Button_button-default__NeJ4p.button-loading-undefined.rs-btn.rs-btn-default.rs-btn-md').eq(4).click({ force: true })
        cy.get('body > div:nth-child(2) > section:nth-child(1) > section:nth-child(3) > div:nth-child(2) > div:nth-child(4) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > h5:nth-child(2)').should('be.visible')

    })

    it.skip('process_order_10', () => {
        cy.wait(5000)
        cy.get('.ChipButton_chip-button__xXNaz.ChipButton_md__wXNXM.ChipButton_hoverable__WTVOV').eq(0).click()
        cy.get('body > div:nth-child(2) > section:nth-child(1) > section:nth-child(3) > div:nth-child(2) > div:nth-child(4) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > span:nth-child(1)').should('be.visible')

    })

    it.skip('process_order_11', () => {
        cy.get('.action-btns-wrapper').then(($btntxt) => {
            const text = $btntxt.text()
            cy.log(text)
        })
    })
})