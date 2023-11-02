import cypress from "cypress"
import { LoginPage } from "./LoginPage"
const loginPageObj = new LoginPage()

export class ProcessOrderPage {
    weblocators = {
        summary_total_non_dispatched_orders: '.heading2.Text_primary-colored__qnpSF',
    }
    launching_processOrder() {
        loginPageObj.openUrl();
        loginPageObj.login();
    }

}