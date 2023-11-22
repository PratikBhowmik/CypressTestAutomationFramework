import { LoginPage } from "../../pages/LoginPage.cy"
import loginData from "../../fixtures/loginData.json"
import { ProcessOrderPage } from "../../pages/ProcessOrderPage.cy"
const loginObj = new LoginPage()
const processOrderObj = new ProcessOrderPage()

beforeEach(() => {
    loginObj.openUrl()
    loginObj.login(loginData.loginPhnNumber, loginData.otp)
    processOrderObj.launching_processOrder()
})

describe('process order test cases', () => {

    it.skip('process_order_01', () => {
        cy.reload()
        cy.url().should('eq', 'http://v2.nushop-dashboard.kaip.in/orders/process-orders/non-dispatched')
    })

    it.skip('process_order_02', () => {
        cy.reload()
        cy.get('.Body_content__M-5ln').should('contain.text', 'Expired AWB')
        cy.get(':nth-child(2) > .tab').click()
        cy.get('[class = "ExpiredAWBOrdersCard_card__2yYch"]').then(($lis) => {
            expect($lis, 'all items').to.contain('EXPIRED')
        })
    })

    it.skip('process_order_03', () => {
        cy.reload()
        cy.get('.Body_content__M-5ln').should('contain.text', 'PG Pending Orders')
        cy.get(':nth-child(3) > .tab').click()
        cy.get('.PgPending_pg-pending-header__wXBL9').should('contain.text', 'Pending Orders')
    })

    it.skip('process_order_04', () => {
        cy.reload()
        cy.wait(5000)
        cy.get('.Button_button-primary__9i0Rz.button-loading-undefined.rs-btn.rs-btn-primary.rs-btn-sm.rs-btn-block').then(($lis) => {
            expect($lis, 'all items').to.contain('Label')
        })
    })

    it.skip('process_order_05', () => {
        cy.reload()
        cy.wait(5000)
        cy.get('.Button_button-ghost__rieSu.button-loading-undefined.rs-btn.rs-btn-ghost.rs-btn-sm.rs-btn-block').then(($lis) => {
            expect($lis, 'all items').to.contain('Invoice')

        })
    })

    it.skip('process_order_06', () => {
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

    it.skip('process_order_07', () => {
        cy.reload()
        processOrderObj.verifyTextPrintSection()
    })

    it.skip('process_order_08', () => {
        cy.reload()
        processOrderObj.verifyTextPackSection()
    })

    it.skip('process_order_09', () => {
        cy.reload()
        cy.get('.Button_button-default__NeJ4p.button-loading-undefined.rs-btn.rs-btn-default.rs-btn-md').eq(4).click({ force: true })
        cy.get('body > div:nth-child(2) > section:nth-child(1) > section:nth-child(3) > div:nth-child(2) > div:nth-child(4) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > h5:nth-child(2)').should('be.visible')

    })

    it.skip('process_order_10', () => {
        cy.reload()
        cy.wait(5000)
        cy.get('.ChipButton_chip-button__xXNaz.ChipButton_md__wXNXM.ChipButton_hoverable__WTVOV').eq(0).click()
        cy.get('[class = "Label_label-type-primary__zRewS Label_label-state-failure__lE+CF"]').should('contain.text', 'DELAYED')

    })

    it.skip('process_order_11', () => {
        cy.reload()
        cy.get('[class = "action-btns-wrapper"]').then(($btntxt) => {
            const text = $btntxt.text()
            cy.log(text)
            expect(text).to.include('Label')
            expect(text).to.include('Invoice')
            expect(text).to.include('Logistic')
        })
    })

    it.skip('process_order_14', () => {
        cy.reload()
        cy.wait(5000)
        cy.get('[class = "Button_button-default__NeJ4p button-loading-undefined rs-btn rs-btn-default rs-btn-md"]').each(($el, index, $lis) => {
            const text1 = $el.text()
            cy.log(text1)
            if (text1.includes('Clubbed')) {
                cy.wrap($el).click({ force: true })
            }
        })
    })

    it.skip('process_order_15', () => {
        cy.reload()
        cy.wait(5000)
        cy.get('.ChipButton_chip-button__xXNaz.ChipButton_md__wXNXM.ChipButton_hoverable__WTVOV').each(($el, index, $lis) => {
            const text = $el.text()
            if (text.includes('Delayed Order')) {
                cy.wrap($el).click()
                cy.get('[class = "Label_label-type-primary__zRewS Label_label-state-failure__lE+CF"]').should('contain.text', 'DELAYED')
            }
        })
    })

    it.skip('process_order_16', () => {
        cy.reload()
        cy.wait(5000)
        cy.get('.rs-input').clear().type('negative testing').type('{enter}')
        cy.get('.Text_body2__0FftJ.Text_mb-md__B0Lt4').should('contain.text', 'There are currently no result available based on selected filter criteria.')
    })

    it.skip('process_order_17', () => {
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

    it.skip('process_order_18', () => {
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

    it.skip('process_order_19', () => {
        cy.reload()
        cy.wait(5000)
        cy.get('.rs-picker-toggle.rs-btn.rs-btn-default.rs-btn-md').each(($el, index, $lis) => {
            const text = $el.text()
            // cy.log(text)
            if (text.includes('Shipping Partner')) {
                cy.wrap($el).click()
                cy.wait(5000)
                cy.get('[data-key = "bluedart"]').click()
                cy.get('[data-key = "delhivery_surface"]').click()
                cy.get('.Button_button-ghost__rieSu.button-loading-undefined.rs-btn.rs-btn-ghost.rs-btn-sm').contains('Apply Filters').click()
                cy.get('.PrintPackViewCard_card-border__Qk1I3').should('contain.text', 'DELHIVERY SURFACE')
            }
        })
    })

    //cancellation of cod order
    //need to change order id everytime and cancel order and also use order id
    it.skip('process_order_20', () => {
        cy.reload()
        cy.wait(5000)
        cy.get('.Text_body2__0FftJ.Text_subtitles-colored__s5ggG').each(($el, index, $lis) => {
            const text = $el.text()
            // cy.log(text)
            if (text.includes('NS0VM1700549025689')) {
                cy.get('.rs-input').clear().type('NS0VM1700549025689')
                cy.get('.rs-input-group-addon.rs-input-group-btn.rs-btn.rs-btn-default').click()
                cy.get('.button-link.button-loading-undefined.rs-btn.rs-btn-link.rs-btn-red.rs-btn-sm.rs-btn-block').eq(0).click()
                cy.get('.Button_button-ghost__rieSu.button-loading-undefined.rs-btn.rs-btn-ghost.rs-btn-md').contains('Cancel Order').click()
                cy.get('.CancellationReason_cancellationReasons__PXAuT').eq(0).click()
                cy.get('.ChipButton_chip-button__xXNaz.ChipButton_md__wXNXM.ChipButton_hoverable__WTVOV').contains('Product out of stock').click()
                cy.get('.Button_button-primary__9i0Rz.button-loading-false.rs-btn.rs-btn-primary.rs-btn-md').click()
                cy.wait(5000)
                cy.get('.rs-input').clear().type('NS0VM1700549025689')
                cy.get('.rs-input-group-addon.rs-input-group-btn.rs-btn.rs-btn-default').click()
                cy.get('.Text_body2__0FftJ.Text_mb-md__B0Lt4').should('contain.text', 'There are currently no result available based on selected filter criteria.')


                //check on cancelled tab that the awb is there
                // cy.get('.TabGroup_tabgroup-container__6e34g').contains('Cancelled').click()
                // cy.wait(5000)
                // cy.get('.rs-input').clear().type('')
                // cy.get('.rs-input-group-addon.rs-input-group-btn.rs-btn.rs-btn-default').click()
                // cy.get('.Text_body2__0FftJ.Text_subtitles-colored__s5ggG').should('contain.text', 'NST1700161068063')
            }
        })
    })


    //cancellation of online order
    it.skip('process_order_21', () => {
        cy.reload()
        cy.wait(5000)
        cy.get('.PrintPackViewCard_card-cell__0Vrno.rs-flex-box-grid-item.rs-flex-box-grid-item-0.rs-col.rs-col-xl-3.rs-col-lg-4.rs-col-md-5.rs-col-sm-7').each(($el, index, $lis) => {
            const text = $el.text()
            // cy.log(text)
            if (text.includes('NS0AQ1700458725310')) {
                cy.get('.rs-input').clear().type('NS0AQ1700458725310')
                cy.get('.rs-input-group-addon.rs-input-group-btn.rs-btn.rs-btn-default').click()
                cy.get('.button-link.button-loading-undefined.rs-btn.rs-btn-link.rs-btn-red.rs-btn-sm.rs-btn-block').click()
                cy.get('.Button_button-ghost__rieSu.button-loading-undefined.rs-btn.rs-btn-ghost.rs-btn-md').contains('Cancel Order').click()
                cy.get('.CancellationReason_cancellationReasons__PXAuT').eq(0).click()
                cy.get('.ChipButton_chip-button__xXNaz.ChipButton_md__wXNXM.ChipButton_hoverable__WTVOV').contains('Product out of stock').click()
                cy.get('.Button_button-ghost__rieSu.button-loading-false.rs-btn.rs-btn-ghost.rs-btn-md').contains('Next').click()
                cy.get('.Button_button-primary__9i0Rz.button-loading-false.rs-btn.rs-btn-primary.rs-btn-md').contains('Submit').click()
                cy.wait(5000)
                cy.get('.rs-input').clear().type('NS0AQ1700458725310')
                cy.get('.rs-input-group-addon.rs-input-group-btn.rs-btn.rs-btn-default').click()
                cy.get('.Text_body2__0FftJ.Text_mb-md__B0Lt4').should('contain.text', 'There are currently no result available based on selected filter criteria.')



                // cy.get('.TabGroup_tabgroup-container__6e34g').contains('Cancelled').click()
                // cy.wait(5000)
                // cy.get('.rs-input').clear().type('')
                // cy.get('.rs-input-group-addon.rs-input-group-btn.rs-btn.rs-btn-default').click()
                // cy.get('.Text_body2__0FftJ.Text_subtitles-colored__s5ggG').should('contain.text', '')
            }
        })
    })

    //Verify regenerating expired AWB will be generating new AWB but order id will be same
    it.skip('process_order_22', () => {

        cy.reload()
        cy.wait(5000)
        cy.get('[class = "heading5 Text_subtitles-colored__s5ggG Text_mr-lg__egpT+"]').eq(0).click()

        cy.get('[class = "rs-input"]').type('DUMM8Y35ZJIB')
        cy.get('[class = "rs-input-group-addon rs-input-group-btn rs-btn rs-btn-default"]').click()

        cy.get('[class = "Button_button-primary__9i0Rz button-loading-undefined rs-btn rs-btn-primary rs-btn-sm rs-btn-block"]').click()

        cy.get('[class = "Button_button-ghost__rieSu button-loading-undefined rs-btn rs-btn-ghost rs-btn-md"]').contains('Confirm').click()

    })

    //Verify non duplicate order end to end flow from print to pack to handover
    it.skip('process_order_23', () => {
        cy.reload()
        cy.wait(5000)
        cy.get('[class = "rs-input"]').type('NSZ1700414536712')
        cy.get('[class = "rs-input-group-addon rs-input-group-btn rs-btn rs-btn-default"]').click()
        cy.get('[class = "Button_button-primary__9i0Rz button-loading-undefined rs-btn rs-btn-primary rs-btn-sm rs-btn-block"]').click()
        cy.get('[class = "rs-input"]').type('NSZ1700414536712')
        cy.get('[class = "rs-input-group-addon rs-input-group-btn rs-btn rs-btn-default"]').click()
        cy.get('[class = "Text_body2__0FftJ Text_mb-md__B0Lt4"]').should('include.text', 'There are currently no result available based on selected filter criteria')

        cy.get('[class = "Button_button-default__NeJ4p button-loading-undefined rs-btn rs-btn-default rs-btn-md"]').contains('Pack').click()
        cy.get('[class = "rs-input"]').type('NSZ1700414536712')
        cy.get('[class = "rs-input-group-addon rs-input-group-btn rs-btn rs-btn-default"]').click()
        cy.get('[class = "PrintPackViewCard_card-cell__0Vrno rs-flex-box-grid-item rs-flex-box-grid-item-0 rs-col rs-col-xl-3 rs-col-lg-4 rs-col-md-5 rs-col-sm-7"]').invoke('text').should('match', /NSZ1700414536712/)
        cy.get('[class = "Button_button-primary__9i0Rz button-loading-undefined Pack_handover-button__rkwYV rs-btn rs-btn-primary rs-btn-sm rs-btn-block"]').click()
        cy.get('[class = "rs-input"]').type('NSZ1700414536712')
        cy.get('[class = "rs-input-group-addon rs-input-group-btn rs-btn rs-btn-default"]').click()
        cy.get('[class = "Text_body2__0FftJ Text_mb-md__B0Lt4"]').should('include.text', 'There are currently no result available based on selected filter criteria')

        cy.get('[class = "Button_button-default__NeJ4p button-loading-undefined rs-btn rs-btn-default rs-btn-md"]').contains('Handover').click()
        cy.get('[class = "rs-input"]').type('NSZ1700414536712')
        cy.get('[class = "rs-input-group-addon rs-input-group-btn rs-btn rs-btn-default"]').click()
        cy.get('[class = "HandoverChildViewCard_card__6hKXd"]').invoke('text').should('match', /NSZ1700414536712/)



    })

    //Verify duplicate order end to end flow from print to pack to handover
    it.skip('process_order_24', () => {
        cy.reload()
        cy.wait(5000)
        cy.get('[class = "rs-input"]').type('NS05L1700118455673')
        cy.get('[class = "rs-input-group-addon rs-input-group-btn rs-btn rs-btn-default"]').click()
        cy.get('[class = "Button_button-primary__9i0Rz button-loading-undefined rs-btn rs-btn-primary rs-btn-sm rs-btn-block"]').click()
        cy.get('[class = "Button_button-ghost__rieSu button-loading-undefined rs-btn rs-btn-ghost rs-btn-md"]').contains('Print Anyways').click()
        cy.get('[class = "rs-input"]').type('NS05L1700118455673')
        cy.get('[class = "rs-input-group-addon rs-input-group-btn rs-btn rs-btn-default"]').click()
        cy.get('[class = "Text_body2__0FftJ Text_mb-md__B0Lt4"]').should('include.text', 'There are currently no result available based on selected filter criteria')

        cy.get('[class = "Button_button-default__NeJ4p button-loading-undefined rs-btn rs-btn-default rs-btn-md"]').contains('Pack').click()
        cy.get('[class = "rs-input"]').type('NS05L1700118455673')
        cy.get('[class = "rs-input-group-addon rs-input-group-btn rs-btn rs-btn-default"]').click()
        cy.get('[class = "PrintPackViewCard_card-cell__0Vrno rs-flex-box-grid-item rs-flex-box-grid-item-0 rs-col rs-col-xl-3 rs-col-lg-4 rs-col-md-5 rs-col-sm-7"]').invoke('text').should('match', /NS05L1700118455673/)
        cy.get('[class = "Button_button-primary__9i0Rz button-loading-undefined Pack_handover-button__rkwYV rs-btn rs-btn-primary rs-btn-sm rs-btn-block"]').click()
        cy.get('[class = "rs-input"]').type('NS05L1700118455673')
        cy.get('[class = "rs-input-group-addon rs-input-group-btn rs-btn rs-btn-default"]').click()
        cy.get('[class = "Text_body2__0FftJ Text_mb-md__B0Lt4"]').should('include.text', 'There are currently no result available based on selected filter criteria')

        cy.get('[class = "Button_button-default__NeJ4p button-loading-undefined rs-btn rs-btn-default rs-btn-md"]').contains('Handover').click()
        cy.get('[class = "rs-input"]').type('NS05L1700118455673')
        cy.get('[class = "rs-input-group-addon rs-input-group-btn rs-btn rs-btn-default"]').click()
        cy.get('[class = "HandoverChildViewCard_card__6hKXd"]').invoke('text').should('match', /NS05L1700118455673/)

    })

    //Verify clubbed duplicate order flow from print to pack to handover
    it('process_order_25', () => {
        cy.reload()
        cy.wait(5000)
        cy.get('[class = "Button_button-default__NeJ4p button-loading-undefined rs-btn rs-btn-default rs-btn-md"]').contains('Clubbed').click()
        cy.get('[class = "InputSearch_select__QuvGO rs-picker rs-picker-input rs-picker-default rs-picker-toggle-wrapper rs-picker-has-value"]').click()



        cy.get('[class = "rs-picker-select-menu-item"]').each(($el, index, $lis) => {
            if ($el.text().includes('AWB Number')) {
                //    cy.get('[class = "rs-picker-select-menu-item"]').eq(index).click()
                $el.click()

            }
        })
        cy.get('[class = "rs-input"]').type('DUMY16QFBEYQ')
        cy.get('[class = "rs-input-group-addon rs-input-group-btn rs-btn rs-btn-default"]').click()
        cy.get('[class = "Button_button-primary__9i0Rz button-loading-undefined rs-btn rs-btn-primary rs-btn-sm rs-btn-block"]').click()
        cy.get('[class = "rs-modal-footer"]').contains('Print All').click()
        cy.get('[class = "rs-input"]').type('DUMY16QFBEYQ')
        cy.get('[class = "rs-input-group-addon rs-input-group-btn rs-btn rs-btn-default"]').click()
        cy.get('[class = "Text_body2__0FftJ Text_mb-md__B0Lt4"]').should('include.text', 'There are currently no result available based on selected filter criteria')

        cy.get('[class = "Button_button-default__NeJ4p button-loading-undefined rs-btn rs-btn-default rs-btn-md"]').contains('Pack').click()
        cy.get('[class = "InputSearch_select__QuvGO rs-picker rs-picker-input rs-picker-default rs-picker-toggle-wrapper rs-picker-has-value"]').click()
        cy.get('[class = "rs-picker-select-menu-item"]').eq(0).click()
        cy.get('[class = "rs-input"]').type('DUMY16QFBEYQ')
        cy.get('[class = "rs-input-group-addon rs-input-group-btn rs-btn rs-btn-default"]').click()
        cy.get('[class = "PrintPackViewCard_card-cell__0Vrno rs-flex-box-grid-item rs-flex-box-grid-item-0 rs-col rs-col-xl-3 rs-col-lg-4 rs-col-md-5 rs-col-sm-7"]').invoke('text').should('match', /DUMY16QFBEYQ/)
        cy.get('[class = "Button_button-primary__9i0Rz button-loading-undefined Pack_handover-button__rkwYV rs-btn rs-btn-primary rs-btn-sm rs-btn-block"]').click()
        cy.get('[class = "rs-input"]').type('DUMY16QFBEYQ')
        cy.get('[class = "rs-input-group-addon rs-input-group-btn rs-btn rs-btn-default"]').click()
        cy.get('[class = "Text_body2__0FftJ Text_mb-md__B0Lt4"]').should('include.text', 'There are currently no result available based on selected filter criteria')

        cy.get('[class = "Button_button-default__NeJ4p button-loading-undefined rs-btn rs-btn-default rs-btn-md"]').contains('Handover').click()
        cy.get('[class = "InputSearch_select__QuvGO rs-picker rs-picker-input rs-picker-default rs-picker-toggle-wrapper rs-picker-has-value"]').click()
        cy.get('[class = "rs-picker-select-menu-item"]').eq(0).click()
        cy.get('[class = "rs-input"]').type('DUMY16QFBEYQ')
        cy.get('[class = "rs-input-group-addon rs-input-group-btn rs-btn rs-btn-default"]').click()
        cy.get('[class = "HandoverChildViewCard_card__6hKXd"]').invoke('text').should('match', /DUMY16QFBEYQ/)

    })
})