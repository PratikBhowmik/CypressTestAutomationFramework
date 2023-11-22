import { LoginPage } from "../../pages/LoginPage.cy"
import { PlaceorderPage } from "../../pages/PlaceorderPage.cy"
import loginData from "../../fixtures/loginData.json"
import customerData from "../../fixtures/customerData.json"
const loginObj = new LoginPage()
const placeorderObj = new PlaceorderPage()

before(() => {
    loginObj.openUrl()
    loginObj.login(loginData.loginPhnNumber, loginData.otp)
})

describe('Place order test cases', () => {

    it.skip('Verify prepaid order can be placed from place order', () => {

        placeorderObj.placePrepaidOrder(customerData.customerNumber)
        cy.get('.heading2.Text_mb-lg__6jeKW').should('exist')

    })

    it.skip('Verify cod order can be placed from place order', () => {
        placeorderObj.placeCodOrder(customerData.customerNumber)
        cy.get('.heading2.Text_mb-lg__6jeKW').should('exist')
    })

    it.skip('Verify bulk order placement can be done', () => {
        placeorderObj.placeBulkOrder()
    })

    it.skip('Verify order can be placed by searching', () => {
        placeorderObj.selectProductThenPlaceOrder()
    })

})