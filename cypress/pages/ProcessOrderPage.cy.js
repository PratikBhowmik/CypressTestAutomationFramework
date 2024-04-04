import { LoginPage } from "./LoginPage.cy"
const loginPageObj = new LoginPage()

export class ProcessOrderPage {
    weblocators = {
        mouseOverElement: 'nav div:nth-child(3)',
        orderElement: '[class = "Flexbox_flex-row__aKbHb Flexbox_align-middle__-J0b5 rs-flex-box-grid rs-flex-box-grid-top rs-flex-box-grid-space-between"]',
        summary_total_non_dispatched_orders: '.heading2.Text_primary-colored__qnpSF',
        // processOrder: '[class = "Text_body2__0FftJ Text_primary-colored__qnpSF"]',
        labelCta: '.Button_button-primary__9i0Rz.button-loading-undefined.rs-btn.rs-btn-primary.rs-btn-sm.rs-btn-block',
        invoiceCta: '.Button_button-ghost__rieSu.button-loading-undefined.rs-btn.rs-btn-ghost.rs-btn-sm.rs-btn-block',
        duplicatePopup: '.rs-modal-content',
        expiredAWb: '.ProcessOrders_tabgroup-holder__KkW-P',
        pendingOrder: '.ProcessOrders_tabgroup-holder__KkW-P',
        checkBox: '.rs-checkbox.rs-checkbox-checked',
        summaryTexts: '.Text_body3__jmTqb.Text_headings-colored__kF2dK',
        duplicateOrderModalPopUp: '.rs-modal-content'
    }

    launching_processOrder() {

        // cy.get('[class = "rs-modal-content"]').contains('Continue').then(($continue) => {
        //     cy.wrap($continue).click()
        // })


        cy.get(this.weblocators.mouseOverElement).trigger('mouseover')
        cy.get(this.weblocators.orderElement).contains('Orders').click()
        cy.get('[class = "SideNav_submenuitem-holder__dRus9"]').contains('Process Orders').click()



    }

    clickingOnExpiredAwb() {
        cy.get(this.weblocators.expiredAWb).contains('Expired AWB Orders').click()
    }

    clickingOnPgPendingOrder() {
        cy.get(this.weblocators.pendingOrder).contains('PG Pending Orders').click()
    }

    downloadLabelFromPrintSection() {
        cy.wait(5000)
        cy.get(this.weblocators.labelCta).eq(2).click()
        cy.get(this.weblocators.duplicateOrderModalPopUp).should('be.visible').contains('Print Anyways').click()
        cy.wait(5000)
    }

    downloadInvoiceFromPrintSection() {
        cy.wait(5000)
        cy.get(this.weblocators.invoiceCta).eq(2).click()
    }

    verifyTotalNonDispatchedOrderText() {
        cy.wait(5000)
        cy.get(this.weblocators.summaryTexts).eq(0).should('have.text', 'Total Non-Dispatched Orders')
    }

    verifyTextPrintSection() {
        cy.wait(5000)
        cy.get(this.weblocators.summaryTexts).eq(3).should('have.text', 'Non Dispatched Orders in Print')
    }

    verifyTextPackSection() {
        cy.wait(5000)
        cy.get(this.weblocators.summaryTexts).eq(5).should('have.text', 'In Pack')
    }

}