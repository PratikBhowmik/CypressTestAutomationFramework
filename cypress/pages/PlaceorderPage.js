// const cypress = require("cypress")

import { LoginPage } from "./LoginPage"

import loginData from "../fixtures/loginData.json"
const loginObj = new LoginPage()


export class PlaceorderPage {

    weblocators = {

        customerNumberField : '[placeholder = "00000-00000"]',
        mouseOverElement : 'nav div:nth-child(3)',
        orderElement : 'body > div:nth-child(2) > section:nth-child(1) > div:nth-child(1) > nav:nth-child(2) > div:nth-child(1) > div:nth-child(4)',
        placeOrderElement : 'body > div:nth-child(2) > section:nth-child(1) > div:nth-child(1) > nav:nth-child(2) > div:nth-child(1) > div:nth-child(5) > a:nth-child(6) > div:nth-child(1)',
        addManuallyElement : '.Button_button-ghost__rieSu.button-loading-undefined.rs-btn.rs-btn-ghost.rs-btn-md',
        addManuallyProductName : 'input[placeholder="Enter Product Name"]',
        addManuallySellingPrice : 'input[placeholder="Enter Per Quantity Selling Price"]',
        addManuallyWeight : 'input[placeholder="In kg (Max 30 kg)"]',
        nextButtonSideBar : '.Button_button-primary__9i0Rz.button-loading-undefined.rs-btn.rs-btn-primary.rs-btn-md',
        nextButtonCourier : '.Button_button-primary__9i0Rz.button-loading-undefined.rs-btn.rs-btn-primary.rs-btn-md',
        reviewOrderPlaceOrder : '.Button_button-primary__9i0Rz.button-loading-undefined.rs-btn.rs-btn-primary.rs-btn-md',
        chipButtonCod : '.ChipButton_chip-button__xXNaz.ChipButton_md__wXNXM.ChipButton_hoverable__WTVOV',
        bulkOrderElement : '.tab'

    }

    placePrepaidOrder(customerNumber) {

        cy.get(this.weblocators.mouseOverElement).trigger('mouseover')
        cy.get(this.weblocators.orderElement).click()
        cy.get(this.weblocators.placeOrderElement).click()
        cy.get(this.weblocators.customerNumberField).first().type(customerNumber)
        cy.contains('button', 'Next').click()
        cy.wait(3000)
        cy.get(this.weblocators.addManuallyElement).click()
        cy.get(this.weblocators.addManuallyProductName).type('automated order')
        cy.get(this.weblocators.addManuallySellingPrice).type('1000')
        cy.get(this.weblocators.addManuallyWeight).type(1)
        cy.get(this.weblocators.nextButtonSideBar).eq(2).click()
        cy.wait(3000)
        cy.get(this.weblocators.nextButtonCourier).click()
        cy.get(this.weblocators.reviewOrderPlaceOrder).click()

    }

    placeCodOrder(customerNumber) {

        loginObj.openUrl()
        loginObj.login(loginData.loginPhnNumber , loginData.otp)
        cy.get(this.weblocators.mouseOverElement).trigger('mouseover')
        cy.get(this.weblocators.orderElement).click()
        cy.get(this.weblocators.placeOrderElement).click()
        cy.get(this.weblocators.customerNumberField).first().type(customerNumber)
        cy.get(this.weblocators.chipButtonCod).eq(1).click()
        cy.contains('button', 'Next').click()
        cy.wait(3000)
        cy.get(this.weblocators.addManuallyElement).click()
        cy.get(this.weblocators.addManuallyProductName).type('automated order')
        cy.get(this.weblocators.addManuallySellingPrice).type('1000')
        cy.get(this.weblocators.addManuallyWeight).type(1)
        cy.get(this.weblocators.nextButtonSideBar).eq(2).click()
        cy.wait(3000)
        cy.get(this.weblocators.nextButtonCourier).click()
        cy.get(this.weblocators.reviewOrderPlaceOrder).click()

    }

    clickOnBulkOrder() {
        cy.get(this.weblocators.bulkOrderElement).click()
    }
}