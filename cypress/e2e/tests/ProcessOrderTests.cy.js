import { LoginPage } from "../../pages/LoginPage.cy"
import loginData from "../../fixtures/loginData.json"
import { ProcessOrderPage } from "../../pages/ProcessOrderPage"
const loginObj = new LoginPage()
const processOrderObj = new ProcessOrderPage()

beforeEach(() => {
    loginObj.openUrl()
    loginObj.login(loginData.loginPhnNumber, loginData.otp)
    processOrderObj.launching_processOrder()
})

describe('process order test cases', () => {

    //Verify url
    it.skip ('process_order_01', () => {6
        cy.reload()
        cy.url().should('eq', 'http://v2.nushop-dashboard.kaip.in/orders/process-orders/non-dispatched')
    })

    //Verify expired AWB text
    it.skip ('process_order_02', () => {
        cy.reload()
        cy.get('.Body_content__M-5ln').should('contain.text', 'Expired AWB')
        cy.get(':nth-child(2) > .tab').click()
        cy.get('[class = "ExpiredAWBOrdersCard_card__2yYch"]').then(($lis) => {
            expect($lis, 'all items').to.contain('EXPIRED')
        })
    })

    //Verify label cta shown
    it.skip ('process_order_03', () => {
        cy.reload()
        cy.get('.Body_content__M-5ln').should('contain.text', 'PG Pending Orders')
        cy.get(':nth-child(3) > .tab').click()
        cy.get('.PgPending_pg-pending-header__wXBL9').should('contain.text', 'Pending Orders')
    })

    //Verify label cta shown
    it.skip ('process_order_04', () => {
        cy.reload()
        cy.wait(5000)
        cy.get('.Button_button-primary__9i0Rz.button-loading-undefined.rs-btn.rs-btn-primary.rs-btn-sm.rs-btn-block').then(($lis) => {
            expect($lis, 'all items').to.contain('Label')
        })
    })

    //Verify invoice cta shown
    it.skip ('process_order_05', () => {
        cy.reload()
        cy.wait(5000)
        cy.get('.Button_button-ghost__rieSu.button-loading-undefined.rs-btn.rs-btn-ghost.rs-btn-sm.rs-btn-block').then(($lis) => {
            expect($lis, 'all items').to.contain('Invoice')

        })
    })

    //Verify texts in summary section
    it.skip ('process_order_06', () => {
        cy.reload()
        cy.wait(5000)
        cy.get('.Flexbox_flex-row__aKbHb.rs-flex-box-grid.rs-flex-box-grid-top.rs-flex-box-grid-space-between').invoke('text').then((text) => {
            expect(text).to.include('Total Non-Dispatched Orders')
            expect(text).to.include('Non Dispatched Orders in Print')
            expect(text).to.include('In Pack')
            expect(text).to.include('In Handover')
            expect(text).to.include('Delayed Non-Dispatched Orders')

        })
    })

    //Verify print section
    it.skip ('process_order_07', () => {
        cy.reload()
        processOrderObj.verifyTextPrintSection()
    })

    //Verify pack section
    it.skip ('process_order_08', () => {
        cy.reload()
        processOrderObj.verifyTextPackSection()
    })

    //Verify clubbed order is visible
    it.skip ('process_order_09', () => {
        cy.reload()
        cy.get('.Button_button-default__NeJ4p.button-loading-undefined.rs-btn.rs-btn-default.rs-btn-md').eq(4).click({ force: true })
        cy.get('[class = "Button_button-default__NeJ4p button-loading-undefined ButtonGroup_selected__sK6Jj custom-button rs-btn rs-btn-default rs-btn-md"]').should('contain.text' , 'Clubbed')

    })

    //Verify delayed order is visible
    it.skip ('process_order_10', () => {
        cy.reload()
        cy.wait(5000)
        cy.get('.ChipButton_chip-button__xXNaz.ChipButton_md__wXNXM.ChipButton_hoverable__WTVOV').eq(0).click()
        cy.get('[class = "Label_label-type-primary__zRewS Label_label-state-failure__lE+CF"]').should('contain.text', 'DELAYED')

    })

    //Verify Label, Invoice & Logistics cta is visible
    it.skip ('process_order_11', () => {
        cy.reload()
        cy.get('[class = "action-btns-wrapper"]').then(($btntxt) => {
            const text = $btntxt.text()
            cy.log(text)
            expect(text).to.include('Label')
            expect(text).to.include('Invoice')
            expect(text).to.include('Logistic')
        })
    })

    //Verify cancelled subtab is visible in process order
    it.skip ('process_order_12', () => {
        cy.reload()
        cy.wait(5000)
        cy.get('[class = "NavigateTabGroup_tabgroup-container__SOWwd"]').should('contain.text' , 'Cancelled')
    })

    //Verify group by SKU ID should be enabled for single order
    it.skip ('process_order_13', () => {
        cy.reload()
        cy.wait(5000)
        cy.get('[class = "rs-stack-item"]').contains('Group By SKU ID').should('have.attr' , 'enabled')
    })

    //Verify group by SKU ID should be disabled for clubbed order
    it.skip ('process_order_14', () => {
        cy.reload()
        cy.wait(5000)
        cy.get('[class = "rs-stack-item"]').contains('Clubbed').click()
        cy.get('[class = "rs-stack-item"]').contains('Group By SKU ID').should('have.attr' , 'disabled')


        // cy.get('.rs-input').clear().type('negative testing').type('{enter}')
        // cy.get('.Text_body2__0FftJ.Text_mb-md__B0Lt4').should('contain.text', 'There are currently no result available based on selected filter criteria.')
    })

    //Verify applying potential duplicate filter will only display the potential duplicate orders
    it.skip ('process_order_15', () => {
        cy.reload()
        cy.wait(5000)
        cy.get('.Text_body2__0FftJ.Text_subtitles-colored__s5ggG').each(($el, index, $lis) => {
            const text = $el.text()
            if (text.includes('Duplicate')) {
                cy.wrap($el).click()
                cy.get('.rs-radio-checker').eq(0).click()
                cy.get('.Button_button-ghost__rieSu.button-loading-undefined.rs-btn.rs-btn-ghost.rs-btn-sm').contains('Apply Filters').click()
                cy.get('[class = "Label_label-type-secondary__OQZ2g Label_label-state-failure__lE+CF"]').should('contain.text', 'Potential Duplicate!')
                cy.get('.button-link.button-loading-undefined.rs-btn.rs-btn-link.rs-btn-red.rs-btn-sm').contains('Clear All').click()
            }
        })
    })

    //Verify removing potential duplicate filter will not show any potential duplicate orders
    it.skip ('process_order_16', () => {
        cy.reload()
        cy.wait(5000)
        cy.get('.rs-picker-toggle.rs-btn.rs-btn-default.rs-btn-md').each(($el, index, $lis) => {
            const text = $el.text()
            cy.log(text)
            if (text.includes('Duplicate')) {
                cy.wrap($el).click()
                cy.get('.rs-radio-checker').eq(1).click()
                cy.get('.Button_button-ghost__rieSu.button-loading-undefined.rs-btn.rs-btn-ghost.rs-btn-sm').contains('Apply Filters').click()
                cy.wait(5000)
                cy.get('.button-link.button-loading-undefined.rs-btn.rs-btn-link.rs-btn-red.rs-btn-sm').should('not.contain', 'Potential Duplicate!')
            }
        })
    })

    //Select delivery surface filter and verify only delivery surface LP is displayed
    it.skip ('process_order_17', () => {
        cy.reload()
        cy.wait(5000)
        cy.get('.rs-picker-toggle.rs-btn.rs-btn-default.rs-btn-md').each(($el, index, $lis) => {
            const text = $el.text()
            // cy.log(text)
            if (text.includes('Shipping Partner')) {
                cy.wrap($el).click()
                cy.wait(5000)
                cy.get('[data-key = "delhivery_surface"]').click()
                cy.get('.Button_button-ghost__rieSu.button-loading-undefined.rs-btn.rs-btn-ghost.rs-btn-sm').contains('Apply Filters').click()
                cy.get('.PrintPackViewCard_card-border__Qk1I3').should('contain.text', 'DELHIVERY SURFACE')
            }
        })
    })

    //Single order cancellation from print state
    it.skip ('process_order_18', () => {

        cy.reload()
        cy.wait(5000)

        //capture the AWB
        let singleorderAWB;
        cy.get('[class = "action-btns-wrapper"]').eq(0).contains('Cancel').as('cancelbtn')

        //Cancel first line item order
        cy.get('[class = "PrintPackViewCard_card__Y4Iaa"]').each(($el, index, $lis) => {
            index = 0;
            const orderType = $el.text()
            cy.get('[class = "Text_body2__0FftJ Text_subtitles-colored__s5ggG Text_underline__aG3Cq Text_cursor-pointer__vwE5X"]').eq(index).invoke('text').then((orderAWB) => {
                singleorderAWB = orderAWB.substring(5, 17)
                cy.log(singleorderAWB)

                //check for different types of orders
                if (orderType.includes('COD') || orderType.includes('Prepaid') && !orderType.includes('Partial COD')) {

                    //cancel the order
                    cy.get('@cancelbtn').click()
                    cy.get('[class = "rs-modal-content"]').contains('Cancel Order').click()
                    cy.get('[class = "rs-modal-body"]').contains('Customer cancelled the order').click()
                    cy.get('[class = "rs-modal-content"]').contains('Submit').click()

                    //assert the order there in cancelled tab
                    cy.get('[class = "NavigateTabGroup_tabgroup-container__SOWwd"]').contains('Cancelled').click()
                    cy.get('[class = "InputSearch_select__QuvGO rs-picker rs-picker-input rs-picker-default rs-picker-toggle-wrapper rs-picker-has-value"]').click()
                    cy.get('[class = "rs-picker-select-menu-item"]').contains('AWB Number').click()
                    cy.get('[class = "rs-input"]').type(singleorderAWB)
                    cy.get('[class = "rs-input-group-addon rs-input-group-btn rs-btn rs-btn-default"]').click()
                    cy.get('[class = "Flexbox_flex-row__aKbHb Flexbox_align-stretch__jf368 Flexbox_nowrap__8vOkG rs-flex-box-grid rs-flex-box-grid-top rs-flex-box-grid-start"]').should('include.text', singleorderAWB)


                    //assert the order is not there in print
                    cy.get('[class = "NavigateTabGroup_tabgroup-container__SOWwd"]').contains('Non-Dispatched Orders').click()
                    cy.get('[class = "InputSearch_select__QuvGO rs-picker rs-picker-input rs-picker-default rs-picker-toggle-wrapper rs-picker-has-value"]').click()
                    cy.get('[class = "rs-picker-select-menu-item"]').contains('AWB Number').click()
                    cy.get('[class = "rs-input"]').type(singleorderAWB)
                    cy.get('[class = "rs-input-group-addon rs-input-group-btn rs-btn rs-btn-default"]').click()
                    cy.get('[class = "TableContainerWithPagination_data-holder__8-1Mo"]').should('include.text', 'No result found')
                    cy.get('[class = "Button_button-primary__9i0Rz button-loading-undefined rs-btn rs-btn-primary rs-btn-md"]').contains('Reset All Filters').click()


                } else {

                    //cancel the order
                    cy.get('@cancelbtn').click()
                    cy.get('[class = "rs-modal-content"]').contains('Cancel Order').click()
                    cy.get('[class = "rs-modal-body"]').contains('Customer cancelled the order').click()
                    cy.get('[class = "rs-modal-content"]').contains('Next').click()
                    cy.wait(5000)
                    cy.get('[class = "rs-modal-content"]').contains('Submit').click()

                    //assert order is there in cancelled tab
                    cy.get('[class = "NavigateTabGroup_tabgroup-container__SOWwd"]').contains('Cancelled').click()
                    cy.get('[class = "InputSearch_select__QuvGO rs-picker rs-picker-input rs-picker-default rs-picker-toggle-wrapper rs-picker-has-value"]').click()
                    cy.get('[class = "rs-picker-select-menu-item"]').contains('AWB Number').click()
                    cy.get('[class = "rs-input"]').type(singleorderAWB)
                    cy.get('[class = "rs-input-group-addon rs-input-group-btn rs-btn rs-btn-default"]').click()
                    cy.get('[class = "Flexbox_flex-row__aKbHb Flexbox_align-stretch__jf368 Flexbox_nowrap__8vOkG rs-flex-box-grid rs-flex-box-grid-top rs-flex-box-grid-start"]').should('include.text', singleorderAWB)

                    //assert the order is not there in print
                    cy.get('[class = "NavigateTabGroup_tabgroup-container__SOWwd"]').contains('Non-Dispatched Orders').click()
                    cy.get('[class = "InputSearch_select__QuvGO rs-picker rs-picker-input rs-picker-default rs-picker-toggle-wrapper rs-picker-has-value"]').click()
                    cy.get('[class = "rs-picker-select-menu-item"]').contains('AWB Number').click()
                    cy.get('[class = "rs-input"]').type(singleorderAWB)
                    cy.get('[class = "rs-input-group-addon rs-input-group-btn rs-btn rs-btn-default"]').click()
                    cy.get('[class = "TableContainerWithPagination_data-holder__8-1Mo"]').should('include.text', 'No result found')
                    cy.get('[class = "Button_button-primary__9i0Rz button-loading-undefined rs-btn rs-btn-primary rs-btn-md"]').contains('Reset All Filters').click()
                }
            })
        })
    })


    //Clubbed order cancellation from print state
    it.skip ('process_order_19', () => {

        cy.reload()
        cy.wait(5000)

        //capture the clubbedAWB and orderid
        let clubbedAWB;
        let orderid;

        cy.get('[class = "action-btns-wrapper"]').eq(0).contains('Cancel').as('cancelbtn')
        cy.get('[class = "Flexbox_flex-row__aKbHb Flexbox_align-middle__-J0b5 NonDispatchedOrders_non-dispatched-orders-tab__DwAoh rs-flex-box-grid rs-flex-box-grid-top rs-flex-box-grid-space-between"]').contains('Clubbed').click()


        //loop and cancel the first clubbed order
        cy.get('[class = "PrintPackViewCard_card-border__Qk1I3"]').each(($el, index, $lis) => {

            index = 0;
            const card = $el.text()


            cy.get('[class = "Text_body2__0FftJ Text_subtitles-colored__s5ggG Text_underline__aG3Cq Text_cursor-pointer__vwE5X"]').eq(index).invoke('text').then((AWB) => {

                clubbedAWB = AWB.substring(5, 17)
                cy.log(clubbedAWB)

                //check for duplicate/non-duplicate

                if (card.includes('Potential Duplicate!')) {

                    cy.get('[class = "Flexbox_flex-row__aKbHb Flexbox_align-middle__-J0b5 NonDispatchedOrders_non-dispatched-orders-tab__DwAoh rs-flex-box-grid rs-flex-box-grid-top rs-flex-box-grid-space-between"]').contains('Clubbed').click()
                    cy.get('@cancelbtn').click()
                    cy.get('[class = "rs-modal-content"]').contains('Cancel Order').click()
                    cy.get('[class = "rs-drawer-body"]').find('[class = "rs-checkbox-inner"]').eq(index).click({ force: true })
                    cy.get('[class = "rs-drawer-header"]').contains('Cancel Order').click()

                    //going to cancel and checking
                    cy.get('[class = "NavigateTabGroup_tabgroup-container__SOWwd"]').contains('Cancelled').click()
                    cy.get('[class = "InputSearch_select__QuvGO rs-picker rs-picker-input rs-picker-default rs-picker-toggle-wrapper rs-picker-has-value"]').click()
                    cy.get('[class = "rs-picker-select-menu-item"]').contains('AWB Number').click()
                    cy.get('[class = "rs-input"]').type(clubbedAWB)
                    cy.get('[class = "rs-input-group-addon rs-input-group-btn rs-btn rs-btn-default"]').click()
                    cy.get('[class = "Flexbox_flex-row__aKbHb Flexbox_align-stretch__jf368 Flexbox_nowrap__8vOkG rs-flex-box-grid rs-flex-box-grid-top rs-flex-box-grid-start"]').eq(index).should('include.text', clubbedAWB)

                    //again coming to print and search with order id and assert that AWB not matching
                    cy.get('[class = "NavigateTabGroup_tabgroup-container__SOWwd"]').contains('Non-Dispatched Orders').click()
                    cy.get('[class = "InputSearch_select__QuvGO rs-picker rs-picker-input rs-picker-default rs-picker-toggle-wrapper rs-picker-has-value"]').click()
                    cy.get('[class = "rs-picker-select-menu-item"]').contains('AWB Number').click()
                    cy.get('[class = "rs-input"]').type(clubbedAWB)
                    cy.get('[class = "rs-input-group-addon rs-input-group-btn rs-btn rs-btn-default"]').click()
                    cy.get('[class = "TableContainerWithPagination_data-holder__8-1Mo"]').should('include.text', 'No result found')
                    cy.get('[data-sd-event = "resetAllFilter"]').click()

                } else {

                    cy.get('[class = "Flexbox_flex-row__aKbHb Flexbox_align-middle__-J0b5 NonDispatchedOrders_non-dispatched-orders-tab__DwAoh rs-flex-box-grid rs-flex-box-grid-top rs-flex-box-grid-space-between"]').contains('Clubbed').click()
                    cy.get('@cancelbtn').click()
                    cy.get('[class = "rs-modal-content"]').contains('Cancel Order').click()
                    cy.get('[class = "rs-drawer-body"]').find('[class = "rs-checkbox-inner"]').eq(index).click({ force: true })
                    cy.get('[class = "rs-picker-toggle-placeholder"]').contains('Select One Reason').click()
                    cy.get('[class = "rs-picker-select-menu-item"]').contains('Duplicate order').click()
                    cy.get('[class = "rs-drawer-header"]').contains('Cancel Order').click()

                    //going to cancel and checking
                    cy.get('[class = "NavigateTabGroup_tabgroup-container__SOWwd"]').contains('Cancelled').click()
                    cy.get('[class = "InputSearch_select__QuvGO rs-picker rs-picker-input rs-picker-default rs-picker-toggle-wrapper rs-picker-has-value"]').click()
                    cy.get('[class = "rs-picker-select-menu-item"]').contains('AWB Number').click()
                    cy.get('[class = "rs-input"]').type(clubbedAWB)
                    cy.get('[class = "rs-input-group-addon rs-input-group-btn rs-btn rs-btn-default"]').click()
                    cy.get('[class = "Flexbox_flex-row__aKbHb Flexbox_align-stretch__jf368 Flexbox_nowrap__8vOkG rs-flex-box-grid rs-flex-box-grid-top rs-flex-box-grid-start"]').eq(index).should('include.text', clubbedAWB)

                    //again coming to print and search with order id and assert that AWB not matching
                    cy.get('[class = "NavigateTabGroup_tabgroup-container__SOWwd"]').contains('Non-Dispatched Orders').click()
                    cy.get('[class = "InputSearch_select__QuvGO rs-picker rs-picker-input rs-picker-default rs-picker-toggle-wrapper rs-picker-has-value"]').click()
                    cy.get('[class = "rs-picker-select-menu-item"]').contains('AWB Number').click()
                    cy.get('[class = "rs-input"]').type(clubbedAWB)
                    cy.get('[class = "rs-input-group-addon rs-input-group-btn rs-btn rs-btn-default"]').click()
                    cy.get('[class = "TableContainerWithPagination_data-holder__8-1Mo"]').should('include.text', 'No result found')
                    cy.get('[data-sd-event = "resetAllFilter"]').click()
                }
            })
        })
    })

    //Verify expired single order AWB regenerate
    it ('process_order_20', () => {

        cy.reload()
        cy.wait(5000)

        //capture the AWB
        let expiredAWB;

        cy.get('[class = "NavigateTabGroup_tabgroup-container__SOWwd"]').contains('Expired AWB Orders').click()
        cy.get('[class = "ExpiredAWBOrdersCard_card__2yYch"]').eq(0).contains('Regenerate').as('Regenerate')

        //regenerate every first line item AWB
        cy.get('[class = "ExpiredAWBOrdersCard_card__2yYch"]').each(($card, index, $lis) => {

            index = 0;
            cy.get('[class = "Text_body2__0FftJ Text_subtitles-colored__s5ggG Text_underline__aG3Cq Text_cursor-pointer__vwE5X"]').invoke('text').then((text) => {

                expiredAWB = text.substring(5, 17)
                cy.log(expiredAWB)

                cy.get('@Regenerate').click()
                cy.get('[class = "rs-modal-content"]').contains('Confirm').click()

                //verify that the AWB is not present in expired tab
                cy.wait(5000)
                cy.get('[class = "InputSearch_input-search__utz3W rs-input-group"]').type(expiredAWB)
                cy.get('[class = "rs-input-group-addon rs-input-group-btn rs-btn rs-btn-default"]').click()
                cy.get('[class = "Flexbox_flex-column__cNkZ2 Flexbox_align-middle__-J0b5 NoFilterFound_wrapper__haM12 rs-flex-box-grid rs-flex-box-grid-top rs-flex-box-grid-center"]').should('include.text', 'No result found')

                //go to print section and assert that AWB is not there
                cy.get('[class = "NavigateTabGroup_tabgroup-container__SOWwd"]').contains('Non-Dispatched Orders').click()
                cy.get('[class = "InputSearch_select__QuvGO rs-picker rs-picker-input rs-picker-default rs-picker-toggle-wrapper rs-picker-has-value"]').click()
                cy.get('[class = "rs-picker-select-menu-item"]').contains('AWB Number').click()
                cy.get('[class = "rs-input"]').type(expiredAWB)
                cy.get('[class = "rs-input-group-addon rs-input-group-btn rs-btn rs-btn-default"]').click()
                cy.get('[class = "TableContainerWithPagination_data-holder__8-1Mo"]').should('include.text', 'No result found')
                cy.get('[class = "NavigateTabGroup_tabgroup-container__SOWwd"]').contains('Expired AWB Orders').click()
            })
        })
    })

    //Verify single order end to end flow
    it.skip ('process_order_21', () => {

        cy.reload()
        cy.wait(5000)

        //capture the AWB
        let orderAWB;
        cy.get('[class = "PrintPackViewCard_card-border__Qk1I3"]').eq(0).contains('Label').as('label')

        //Take an order and click on label
        cy.get('[class = "PrintPackViewCard_card-border__Qk1I3"]').each(($el, index, $lis) => {

            index = 0;
            const card = $el.text()

            cy.get('[class = "Text_body2__0FftJ Text_subtitles-colored__s5ggG Text_underline__aG3Cq Text_cursor-pointer__vwE5X"]').invoke('text').then((text) => {

                orderAWB = text.substring(5, 17)
                cy.log(orderAWB)

                //check for duplicate and non duplicate

                if (card.includes('Potential Duplicate!')) {

                    cy.get('@label').click()
                    cy.get('[class = "rs-modal-content"]').contains('Print Anyways').click()

                    //click on pack and assert that the same AWB is in pack

                    cy.get('[data-sd-event = "nonDispatchedOrder"]').contains('Pack').click()
                    cy.get('[class = "InputSearch_select__QuvGO rs-picker rs-picker-input rs-picker-default rs-picker-toggle-wrapper rs-picker-has-value"]').click()
                    cy.get('[class = "rs-picker-select-menu-item"]').contains('AWB Number').click()
                    cy.get('[class = "rs-input"]').type(orderAWB)
                    cy.get('[class = "rs-input-group-addon rs-input-group-btn rs-btn rs-btn-default"]').click()
                    cy.get('[class = "PrintPackViewCard_card-border__Qk1I3"]').eq(index).should('contain.text', orderAWB)
                    cy.get('[class = "PrintPackViewCard_card-border__Qk1I3"]').contains('Handover').click()


                    //assert that it's present in handover

                    cy.get('[data-sd-event = "nonDispatchedOrder"]').contains('Handover').click()
                    cy.get('[class = "InputSearch_select__QuvGO rs-picker rs-picker-input rs-picker-default rs-picker-toggle-wrapper rs-picker-has-value"]').click()
                    cy.get('[class = "rs-picker-select-menu-item"]').contains('AWB Number').click()
                    cy.get('[class = "rs-input"]').type(orderAWB)
                    cy.get('[class = "rs-input-group-addon rs-input-group-btn rs-btn rs-btn-default"]').click()
                    cy.get('[class = "HandoverChildViewCard_card__6hKXd"]').eq(index).should('contain.text', orderAWB)

                    //repeat the loop

                    cy.get('[data-sd-event = "nonDispatchedOrder"]').contains('Print').click()

                } else {

                    cy.get('@label').click()

                    //click on pack and assert that the same AWB is in pack

                    cy.get('[data-sd-event = "nonDispatchedOrder"]').contains('Pack').click()
                    cy.get('[class = "InputSearch_select__QuvGO rs-picker rs-picker-input rs-picker-default rs-picker-toggle-wrapper rs-picker-has-value"]').click()
                    cy.get('[class = "rs-picker-select-menu-item"]').contains('AWB Number').click()
                    cy.get('[class = "rs-input"]').type(orderAWB)
                    cy.get('[class = "rs-input-group-addon rs-input-group-btn rs-btn rs-btn-default"]').click()
                    cy.get('[class = "PrintPackViewCard_card-border__Qk1I3"]').eq(index).should('contain.text', orderAWB)


                    //move the same AWB to handover and assert that it's present in handover

                    cy.get('[class = "PrintPackViewCard_card-border__Qk1I3"]').contains('Handover').click()
                    cy.get('[data-sd-event = "nonDispatchedOrder"]').contains('Handover').click()
                    cy.get('[class = "InputSearch_select__QuvGO rs-picker rs-picker-input rs-picker-default rs-picker-toggle-wrapper rs-picker-has-value"]').click()
                    cy.get('[class = "rs-picker-select-menu-item"]').contains('AWB Number').click()
                    cy.get('[class = "rs-input"]').type(orderAWB)
                    cy.get('[class = "rs-input-group-addon rs-input-group-btn rs-btn rs-btn-default"]').click()
                    cy.get('[class = "HandoverChildViewCard_card__6hKXd"]').eq(index).should('contain.text', orderAWB)

                    //repeat the loop

                    cy.get('[data-sd-event = "nonDispatchedOrder"]').contains('Print').click()
                }

            })
        })
    })

    //Verify clubbed order end to end flow
    it.skip ('process_order_22', () => {

        cy.reload()
        cy.wait(5000)

        //capture the AWB
        let orderAWB;
        cy.get('[class = "PrintPackViewCard_card-border__Qk1I3"]').eq(0).contains('Label').as('label')

        cy.get('[class = "Flexbox_flex-row__aKbHb Flexbox_align-middle__-J0b5 NonDispatchedOrders_non-dispatched-orders-tab__DwAoh rs-flex-box-grid rs-flex-box-grid-top rs-flex-box-grid-space-between"]').contains('Clubbed').click()

        //Take an order and click on label
        cy.get('[class = "PrintPackViewCard_card-border__Qk1I3"]').each(($el, index, $lis) => {

            index = 0;
            const card = $el.text()

            cy.get('[class = "Text_body2__0FftJ Text_subtitles-colored__s5ggG Text_underline__aG3Cq Text_cursor-pointer__vwE5X"]').invoke('text').then((text) => {

                orderAWB = text.substring(5, 17)
                cy.log(orderAWB)

                //check for duplicate and non duplicate

                if (card.includes('Potential Duplicate!')) {

                    cy.get('@label').click()
                    cy.get('[class = "rs-modal-content"]').contains('Print All').click()

                    //click on pack and assert that the same AWB is in pack

                    cy.get('[data-sd-event = "nonDispatchedOrder"]').contains('Pack').click()
                    cy.get('[class = "InputSearch_select__QuvGO rs-picker rs-picker-input rs-picker-default rs-picker-toggle-wrapper rs-picker-has-value"]').click()
                    cy.get('[class = "rs-picker-select-menu-item"]').contains('AWB Number').click()
                    cy.get('[class = "rs-input"]').type(orderAWB)
                    cy.get('[class = "rs-input-group-addon rs-input-group-btn rs-btn rs-btn-default"]').click()
                    cy.get('[class = "PrintPackViewCard_card-border__Qk1I3"]').eq(index).should('contain.text', orderAWB)
                    cy.get('[class = "PrintPackViewCard_card-border__Qk1I3"]').contains('Handover').click()


                    //assert that it's present in handover

                    cy.get('[data-sd-event = "nonDispatchedOrder"]').contains('Handover').click()
                    cy.get('[class = "InputSearch_select__QuvGO rs-picker rs-picker-input rs-picker-default rs-picker-toggle-wrapper rs-picker-has-value"]').click()
                    cy.get('[class = "rs-picker-select-menu-item"]').contains('AWB Number').click()
                    cy.get('[class = "rs-input"]').type(orderAWB)
                    cy.get('[class = "rs-input-group-addon rs-input-group-btn rs-btn rs-btn-default"]').click()
                    cy.get('[class = "HandoverChildViewCard_card__6hKXd"]').eq(index).should('contain.text', orderAWB)

                    //repeat the loop

                    cy.get('[data-sd-event = "nonDispatchedOrder"]').contains('Print').click()

                } else {

                    cy.get('@label').click()

                    //click on pack and assert that the same AWB is in pack

                    cy.get('[data-sd-event = "nonDispatchedOrder"]').contains('Pack').click()
                    cy.get('[class = "InputSearch_select__QuvGO rs-picker rs-picker-input rs-picker-default rs-picker-toggle-wrapper rs-picker-has-value"]').click()
                    cy.get('[class = "rs-picker-select-menu-item"]').contains('AWB Number').click()
                    cy.get('[class = "rs-input"]').type(orderAWB)
                    cy.get('[class = "rs-input-group-addon rs-input-group-btn rs-btn rs-btn-default"]').click()
                    cy.get('[class = "PrintPackViewCard_card-border__Qk1I3"]').eq(index).should('contain.text', orderAWB)


                    //move the same AWB to handover and assert that it's present in handover

                    cy.get('[class = "PrintPackViewCard_card-border__Qk1I3"]').contains('Handover').click()
                    cy.get('[data-sd-event = "nonDispatchedOrder"]').contains('Handover').click()
                    cy.get('[class = "InputSearch_select__QuvGO rs-picker rs-picker-input rs-picker-default rs-picker-toggle-wrapper rs-picker-has-value"]').click()
                    cy.get('[class = "rs-picker-select-menu-item"]').contains('AWB Number').click()
                    cy.get('[class = "rs-input"]').type(orderAWB)
                    cy.get('[class = "rs-input-group-addon rs-input-group-btn rs-btn rs-btn-default"]').click()
                    cy.get('[class = "HandoverChildViewCard_card__6hKXd"]').eq(index).should('contain.text', orderAWB)

                    //repeat the loop

                    cy.get('[data-sd-event = "nonDispatchedOrder"]').contains('Print').click()
                }

            })
        })
    })

    //change LP
    it.skip ('process_order_23', () => {
        cy.reload()
        cy.wait(5000)

        //capture initial AWB
        let initialAWB;
        let currentAWB;

        cy.get('[class = "PrintPackViewCard_card__Y4Iaa"]').each(($el, index, $list) => {

            cy.get('[class = "Text_body2__0FftJ Text_subtitles-colored__s5ggG Text_underline__aG3Cq Text_cursor-pointer__vwE5X"]').eq(index).invoke('text').then((AWB) => {

                initialAWB = AWB.substring(5, 17)

                cy.log('initialAWB', initialAWB)

                cy.get('[class = "action-btns-wrapper"]').eq(index).contains('Logistic').then(($btn) => {

                    //check for LP button disabled state
                    if (!$btn.is(':disabled')) {

                        //change LP for every line item
                        cy.get('[class = "PrintPackViewCard_card__Y4Iaa"]').eq(index).contains('Logistic').click()
                        cy.get('[placeholder = "Street/Area/Colony/Locality"]').type('change adressss long adress long adress')
                        cy.get('[placeholder = "Landmark"]').type('change landmark long adress long adress')
                        cy.get('[class = "ShippingPartner_card-content-wrapper__NHAQH"]').eq(2).click()
                        cy.get('[class = "rs-drawer-actions"]').contains('Save').click()
                        cy.get('[class = "rs-modal-content"]').contains('Yes,Change').click()

                        cy.wait(9000)

                        cy.get('[class = "Text_body2__0FftJ Text_subtitles-colored__s5ggG Text_underline__aG3Cq Text_cursor-pointer__vwE5X"]').eq(index).invoke('text').then((updatedAWB) => {

                            currentAWB = updatedAWB.substring(5, 17)

                            cy.log('currentAWB', currentAWB)

                            expect(initialAWB).not.to.equal(currentAWB)
                        })

                    } else {

                        cy.log('LP button disabled skipping this line item')
                    }
                })
            })
        })
    })

    //Change LP five times
    it.skip ('process_order_24', () => {

        cy.reload()
        cy.wait(5000)
        cy.get('[class = "PrintPackViewCard_card__Y4Iaa"]').contains('Logistic').as('LP')
        cy.get('[class = "PrintPackViewCard_card__Y4Iaa"]').each(($el, index, $lis) => {

            index = 0;

            cy.get('[class = "PrintPackViewCard_card__Y4Iaa"]').contains('Logistic').then((LP) => {

                //After 5 times assert that LP button is disabled and stop
                if (LP.is(':disabled')) {
                    cy.log('LP button is disabled')
                    cy.get('@LP').should('be.disabled')
                    return false;
                }

                cy.get('@LP').click()
                cy.get('[placeholder = "Street/Area/Colony/Locality"]').type('change adressss long adress long adress')
                cy.get('[placeholder = "Landmark"]').type('change landmark long adress long adress')
                cy.get('[class = "ShippingPartner_card-content-wrapper__NHAQH"]').eq(2).click()
                cy.get('[class = "rs-drawer-actions"]').contains('Save').click()
                cy.get('[class = "rs-modal-content"]').contains('Yes,Change').click()
            })
        })
    })
})