import { RegisterPage } from "../../pages/RegisterPage.cy";

const regPage = new RegisterPage();

describe('Test for qkart registration', function () {


    it('Registration test case', function () {

        regPage.openUrl();
        regPage.register();

        cy.url().should('eq', 'https://crio-qkart-frontend-qa.vercel.app/login');

    })
})