// const cypress = require("cypress")
export class LoginPage {

    weblocators = {
        phonenumber : '.Input_input-group__c6y0f.undefined.rs-input-group' , 
        generateOtpButton : '.Button_button-primary__9i0Rz.button-loading-false.Login_margin-top__a1Tjg.rs-btn.rs-btn-primary.rs-btn-lg.rs-btn-block', 
        otpField : '[placeholder = XXXX]', 
        confirmOtpButton : '.Button_button-primary__9i0Rz.button-loading-false.Login_margin-top__a1Tjg.rs-btn.rs-btn-primary.rs-btn-lg.rs-btn-block'
    }

    openUrl() {
        cy.visit('http://v2.nushop-dashboard.kaip.in')
    }

    login(phonenumber , otp) {
        cy.get(this.weblocators.phonenumber).type(phonenumber)
        cy.get(this.weblocators.generateOtpButton).click()
        cy.get(this.weblocators.otpField).type(otp)
        cy.get(this.weblocators.confirmOtpButton).click()
    }
}