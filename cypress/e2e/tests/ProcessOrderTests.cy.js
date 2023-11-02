import { LoginPage } from "../../pages/LoginPage";
import { ProcessOrderPage } from "../../pages/ProcessOrderPage";
import loginData from "../../fixtures/loginData.json";
import customerData from "../../fixtures/customerData.json";
const loginObj = new LoginPage()
const processOrderObj = new ProcessOrderPage()

beforeEach(() => {
    loginObj.openUrl()
    loginObj.login(loginData.loginPhnNumber, loginData.otp)
})

describe('process order test cases', () => {

    it('Verify process order page launches', () => {
        processOrderObj.launching_processOrder()
    })
})