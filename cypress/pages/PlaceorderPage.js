// const cypress = require("cypress")

import 'cypress-file-upload';
import { LoginPage } from "./LoginPage"
import loginData from "../fixtures/loginData.json"
const loginObj = new LoginPage()
export class PlaceorderPage {

    weblocators = {
        customerNumberField: '[placeholder = "00000-00000"]',
        mouseOverElement: 'nav div:nth-child(3)',
        orderElement: 'body > div:nth-child(2) > section:nth-child(1) > div:nth-child(1) > nav:nth-child(2) > div:nth-child(1) > div:nth-child(4)',
        placeOrderElement: 'body > div:nth-child(2) > section:nth-child(1) > div:nth-child(1) > nav:nth-child(2) > div:nth-child(1) > div:nth-child(5) > a:nth-child(6) > div:nth-child(1)',
        addManuallyElement: '.Button_button-ghost__rieSu.button-loading-undefined.rs-btn.rs-btn-ghost.rs-btn-md',
        addManuallyProductName: 'input[placeholder="Enter Product Name"]',
        addManuallySellingPrice: 'input[placeholder="Enter Per Quantity Selling Price"]',
        addManuallyWeight: 'input[placeholder="In kg (Max 30 kg)"]',
        nextButtonSideBar: '.Button_button-primary__9i0Rz.button-loading-undefined.rs-btn.rs-btn-primary.rs-btn-md',
        nextButtonCourier: '.Button_button-primary__9i0Rz.button-loading-undefined.rs-btn.rs-btn-primary.rs-btn-md',
        reviewOrderPlaceOrder: '.Button_button-primary__9i0Rz.button-loading-undefined.rs-btn.rs-btn-primary.rs-btn-md',
        chipButtonCod: '.ChipButton_chip-button__xXNaz.ChipButton_md__wXNXM.ChipButton_hoverable__WTVOV',
        bulkOrderElement: '.tab',
        downloadButton: '.rs-dropdown-toggle.rs-btn.rs-btn-ghost.rs-btn-md',
        enterFileNameField: '[class = "rs-input rs-input-md"]',
        bulkOrderField: '[class = "heading5 Text_subtitles-colored__s5ggG Text_mr-lg__egpT+"]',
        selectFileCta: '.Button_button-primary__9i0Rz.button-loading-undefined.rs-uploader-trigger-btn.rs-btn.rs-btn-primary.rs-btn-md',
        createOrderCta: '.Button_button-primary__9i0Rz.button-loading-undefined.rs-btn.rs-btn-primary.rs-btn-md.rs-btn-disabled',
        infoText: 'Info_cursor-pointer__-pHVs',
        orderCta: '.Button_button-ghost__rieSu.button-loading-undefined.rs-btn.rs-btn-ghost.rs-btn-md',
        printAllCta: '.rs-dropdown-toggle.rs-btn.rs-btn-primary.rs-btn-md.rs-btn-block',
        printAlllabel: '#menuitem-:r6:',
        printAllInvoice: '#menuitem-:r7:',
        searchProductsCta: '.Button_button-primary__9i0Rz.button-loading-undefined.rs-btn.rs-btn-primary.rs-btn-md',
        press_enter_to_view_products: '.rs-input'
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

        // loginObj.openUrl()
        // loginObj.login(loginData.loginPhnNumber, loginData.otp)
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

    negativeTesting() {

    }

    clickOnBulkOrder() {
        cy.get(this.weblocators.bulkOrderElement).click()
    }

    clickOnDownloadButton() {
        cy.get(this.weblocators.downloadButton).click()
    }

    placeBulkOrder() {

        cy.get(this.weblocators.mouseOverElement).trigger('mouseover')
        cy.get(this.weblocators.orderElement).click()
        cy.get(this.weblocators.placeOrderElement).click()
        cy.get(this.weblocators.bulkOrderField).click({ force: true })

        // cy.get(this.weblocators.selectFileCta).attachFile('C:/Users/impra/Downloads/')

        // cy.get(this.weblocators.enterFileNameField).type('end to end testing')
        // cy.get(this.weblocators.downloadButton).click()
        // cy.get(this.weblocators.orderCta).click()
        // cy.get('.rs-dropdown-toggle.rs-btn.rs-btn-primary.rs-btn-md.rs-btn-block').trigger('mouseover')
        // const texts = cy.get('.Dropdown_dropdown-button-primary__XIJl8.Dropdown_dropdown-caret-opened__MrqEN.rs-dropdown-menu').find('li').text()
        // cy.log(texts)
        // => {
        //     const selectQuantity = $el.find('span').text();
        //     if (selectQuantity.includes('4')) {
        //         cy.log(selectQuantity);
        //         $el.find('span').click();
        //         cy.wait(2000)
        //     }
        // })
        // cy.get(this.weblocators.printAlllabel).click()
        // cy.get(this.weblocators.printAllInvoice).click()

    }

    selectProductThenPlaceOrder() {

        cy.get(this.weblocators.mouseOverElement).trigger('mouseover')
        cy.get(this.weblocators.orderElement).click()
        cy.get(this.weblocators.placeOrderElement).click()
        cy.get(this.weblocators.customerNumberField).first().type("8939117490")
        cy.contains('button', 'Next').click()
        cy.get(this.weblocators.searchProductsCta).first().click()
        cy.get(this.weblocators.press_enter_to_view_products).click()
    }
}