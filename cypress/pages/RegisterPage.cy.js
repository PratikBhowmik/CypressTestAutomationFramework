export class RegisterPage {

    weblocators = {
        username: '#username',
        password: '#password',
        confirmPassword: '#confirmPassword',
        registerBtn: '.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButtonBase-root.button.css-177pwqq'
    }

    openUrl() {
        cy.visit('https://crio-qkart-frontend-qa.vercel.app/register');
    }

    register(username, password, confirmPassword) {

        const dynamicUsername = 'user_' + Math.floor(Math.random() * 10000);

        cy.get(this.weblocators.username).type(dynamicUsername);
        cy.get(this.weblocators.password).type("Patrick@97");
        cy.get(this.weblocators.confirmPassword).type("Patrick@97");
        cy.get(this.weblocators.registerBtn).click();
    }
}