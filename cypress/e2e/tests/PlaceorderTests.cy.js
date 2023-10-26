import { LoginPage } from "../../pages/LoginPage"
import { PlaceorderPage } from "../../pages/PlaceorderPage" 
import loginData from "../../fixtures/loginData.json"
import customerData from "../../fixtures/customerData.json"
const loginObj = new LoginPage()
const placeorderObj = new PlaceorderPage()
describe ('test suite', () => {

    before(() => {
        loginObj.openUrl()
        loginObj.login(loginData.loginPhnNumber, loginData.otp)
    })

    it ('Test case 1 - Verify prepaid order can be placed from place order', () => {
        
        placeorderObj.placePrepaidOrder(customerData.customerNumber)
        cy.get('.heading2.Text_mb-lg__6jeKW').should('exist')

    })

    it ('Test case 2 - Verify cod order can be placed from place order', () => {
        placeorderObj.placeCodOrder(customerData.customerNumber)
        cy.get('.heading2.Text_mb-lg__6jeKW').should('exist')
    })
    
})