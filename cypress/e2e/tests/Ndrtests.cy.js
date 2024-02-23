import { LoginPage } from "../../pages/LoginPage.cy"
import loginData from "../../fixtures/loginData.json"
import { NDRpage } from "../../pages/NDRpage.cy"
const loginObj = new LoginPage()
const ndrObj = new NDRpage()

beforeEach(() => {
    loginObj.openUrl()
    loginObj.login(loginData.loginPhnNumber, loginData.otp)
    ndrObj.launching_ndr()
})

describe('NDR tab test cases', () => {
    let awb = "DUMYGV3K9F25";
    it.skip ('NDR_tab_01', () => {

        cy.reload()

        //NDR url verification
        cy.url().should('eq', 'http://v2.nushop-dashboard.kaip.in/orders/ndr')

        //Search with wrong order id
        cy.get('.rs-input').type('negative testing')
        cy.get('.rs-input-group-addon.rs-input-group-btn.rs-btn.rs-btn-default').click()
        cy.get('[class="Flexbox_flex-column__cNkZ2 Flexbox_align-middle__-J0b5 NoFilterFound_wrapper__haM12 rs-flex-box-grid rs-flex-box-grid-top rs-flex-box-grid-center"]').should('contain.text', 'No result found')

        //Search with wrong AWB number
        cy.get('.rs-picker-toggle.rs-btn.rs-btn-default').eq(0).click()
        cy.get('.rs-picker-select-menu-item').contains('AWB Number').click()
        cy.get('.rs-input').clear().type('negative testing')
        cy.get('.rs-input-group-addon.rs-input-group-btn.rs-btn.rs-btn-default').click()
        cy.get('[class="Flexbox_flex-column__cNkZ2 Flexbox_align-middle__-J0b5 NoFilterFound_wrapper__haM12 rs-flex-box-grid rs-flex-box-grid-top rs-flex-box-grid-center"]').should('contain.text', 'No result found')

        //Search with wrong customer number
        cy.get('.rs-picker-toggle.rs-btn.rs-btn-default').eq(0).click()
        cy.get('.rs-picker-select-menu-item').contains('Customer No.').click()
        cy.get('.rs-input').clear().type('89499')
        cy.get('.rs-input-group-addon.rs-input-group-btn.rs-btn.rs-btn-default').click()
        cy.get('[class="Flexbox_flex-column__cNkZ2 Flexbox_align-middle__-J0b5 NoFilterFound_wrapper__haM12 rs-flex-box-grid rs-flex-box-grid-top rs-flex-box-grid-center"]').should('contain.text', 'No result found')
        cy.get('[class = "Flexbox_flex-row__aKbHb Flexbox_align-top__Nx4Aj Flexbox_gutter-lg__kVhG3 FiltersCard_filters__4sMjG rs-flex-box-grid rs-flex-box-grid-top rs-flex-box-grid-space-between"]').contains('Clear All').click()

        //Verify NDR attempt filter is working fine
        cy.get('[aria-haspopup = "listbox"]').contains('NDR Attempt').click()
        cy.get('[class = "rs-checkbox-checker"]').contains('1').click()
        cy.get('[class = "Flexbox_flex-row__aKbHb Flexbox_align-top__Nx4Aj Flexbox_gutter-lg__kVhG3 FiltersCard_filters__4sMjG rs-flex-box-grid rs-flex-box-grid-top rs-flex-box-grid-space-between"]').contains('Apply Filters').click()
        cy.get('[class = "Table_card-cell__MSHm0 Table_padding-horizontal-lg__hWECV rs-flex-box-grid-item rs-flex-box-grid-item-0 rs-col rs-col-xl-3 rs-col-lg-4 rs-col-md-5 rs-col-sm-7"]').should('contain.text', 1)
        cy.get('[class = "Flexbox_flex-row__aKbHb Flexbox_align-top__Nx4Aj Flexbox_gutter-lg__kVhG3 FiltersCard_filters__4sMjG rs-flex-box-grid rs-flex-box-grid-top rs-flex-box-grid-space-between"]').contains('Clear All').click()

        //Verify NDR reason filter is working fine
        cy.get('[aria-haspopup = "listbox"]').contains('NDR Reason').click()
        cy.get('[class = "rs-picker-check-menu rs-picker-check-menu-items"]').contains('Customer Wants Open Delivery').click()
        cy.get('[class = "Flexbox_flex-row__aKbHb Flexbox_align-top__Nx4Aj Flexbox_gutter-lg__kVhG3 FiltersCard_filters__4sMjG rs-flex-box-grid rs-flex-box-grid-top rs-flex-box-grid-space-between"]').contains('Apply Filters').click()
        cy.get('[class = "Flexbox_flex-row__aKbHb Flexbox_align-stretch__jf368 Flexbox_nowrap__8vOkG rs-flex-box-grid rs-flex-box-grid-top rs-flex-box-grid-start"]').should('contain.text', 'Customer Wants Open Delivery')
        cy.get('[class = "Flexbox_flex-row__aKbHb Flexbox_align-top__Nx4Aj Flexbox_gutter-lg__kVhG3 FiltersCard_filters__4sMjG rs-flex-box-grid rs-flex-box-grid-top rs-flex-box-grid-space-between"]').contains('Clear All').click()

        cy.get('[data-sd-event = "moreFilter"]').click()

        //Verify shipping partner filter is working fine
        cy.get('[aria-haspopup = "listbox"]').contains('Shipping Partner').click()
        cy.get('[class = "rs-picker-check-menu rs-picker-check-menu-items"]').contains('Ekart').click()
        cy.get('[class = "Flexbox_flex-row__aKbHb Flexbox_align-top__Nx4Aj Flexbox_gutter-lg__kVhG3 FiltersCard_filters__4sMjG rs-flex-box-grid rs-flex-box-grid-top rs-flex-box-grid-space-between"]').contains('Apply Filters').click()
        cy.get('[data-sd-event = "ndrTableShowHistory"]').eq(0).click()
        cy.get('[class = "NDRHistory_history-wrapper__Cx2Eh"]').should('contain.text', 'EKART')
        cy.get('[class = "rs-drawer-header-close rs-btn-icon rs-btn-icon-placement-left rs-btn rs-btn-subtle rs-btn-sm"]').click()
        cy.get('[class = "Flexbox_flex-row__aKbHb Flexbox_align-top__Nx4Aj Flexbox_gutter-lg__kVhG3 FiltersCard_filters__4sMjG rs-flex-box-grid rs-flex-box-grid-top rs-flex-box-grid-space-between"]').contains('Clear All').click()

        //Verify payment method filter is working fine
        cy.get('[aria-haspopup = "listbox"]').contains('Payment Method').click()
        cy.get('[class = "rs-picker-check-menu rs-picker-check-menu-items"]').contains('ONLINE').click()
        cy.get('[class = "Flexbox_flex-row__aKbHb Flexbox_align-top__Nx4Aj Flexbox_gutter-lg__kVhG3 FiltersCard_filters__4sMjG rs-flex-box-grid rs-flex-box-grid-top rs-flex-box-grid-space-between"]').contains('Apply Filters').click()
        cy.get('[class = "Table_card-cell__MSHm0 Table_padding-horizontal-lg__hWECV rs-flex-box-grid-item rs-flex-box-grid-item-0 rs-col rs-col-xl-3 rs-col-lg-4 rs-col-md-5 rs-col-sm-7"]').should('contain.text', 'ONLINE')
        cy.get('[class = "Flexbox_flex-row__aKbHb Flexbox_align-top__Nx4Aj Flexbox_gutter-lg__kVhG3 FiltersCard_filters__4sMjG rs-flex-box-grid rs-flex-box-grid-top rs-flex-box-grid-space-between"]').contains('Clear All').click()

    })

    it.skip('NDR_tab_02', () => {
        cy.reload()
        cy.get('[data-sd-event = "ndrTableEscalate"]').eq(0).click()
        cy.get('[class = "ReAttemptForm_date-container__lVcGm"]').contains('Today').click()
        cy.get('[data-sd-event = "submitForm"]').click()
        cy.get('[class = "NDR_tabgroup-holder__HLlxf"]').contains('Re-Attempt Requested').click()

    })

    it.skip('NDR_tab_03', () => {

        let orderidOld;
        let orderidNew;

        cy.reload()

        cy.get('[class = "Flexbox_flex-row__aKbHb Flexbox_align-stretch__jf368 Flexbox_nowrap__8vOkG rs-flex-box-grid rs-flex-box-grid-top rs-flex-box-grid-start"]').eq(0).invoke('text').then((text) => {
            orderidOld = text.substring(16, 33)

            cy.log(orderidOld)

            cy.get('[data-sd-event = "ndrTableEscalate"]').eq(0).click()
            cy.get('[class = "rs-drawer-content"]').contains('RTO').click()
            cy.get('[placeholder = "Add your remarks (max 100 characters)"]').type('dddddddddddddddddddddd')
            cy.get('[class = "rs-drawer-content"]').contains('Submit').click()
            cy.get('[class = "NavigateTabGroup_tabgroup-container__SOWwd"]').contains('RTO').click()
            cy.get('[class = "Flexbox_flex-row__aKbHb Flexbox_align-stretch__jf368 Flexbox_nowrap__8vOkG rs-flex-box-grid rs-flex-box-grid-top rs-flex-box-grid-start"]').eq(0).should('contain.text', orderidOld)

            // cy.get('[class = "Flexbox_flex-row__aKbHb Flexbox_align-stretch__jf368 Flexbox_nowrap__8vOkG rs-flex-box-grid rs-flex-box-grid-top rs-flex-box-grid-start"]').eq(0).invoke('text').then((textnew) => {
            //     orderidNew = textnew.substring(16, 33)

            //     cy.log(orderidNew)

            //     if (orderidOld === orderidNew) {
            //         cy.log("Passed")

            //     } else {
            //         cy.log("Failed")

            //     }
            // })
        })
    })
    it.skip ('NDR_tab_04', function() {
        cy.get('[class = "NavigateTabGroup_tabgroup-container__SOWwd"]').contains('RTO Requested').click()
        cy.get('[class = "Flexbox_flex-row__aKbHb Flexbox_align-stretch__jf368 Flexbox_nowrap__8vOkG rs-flex-box-grid rs-flex-box-grid-top rs-flex-box-grid-start"]').should('contain.text' , 'RTO Requested')
    })

    it.skip ('NDR_tab_05', function() {
        cy.get('[class = "NavigateTabGroup_tabgroup-container__SOWwd"]').contains('Re-Attempt Requested').click()
        cy.get('[class = "Flexbox_flex-row__aKbHb Flexbox_align-stretch__jf368 Flexbox_nowrap__8vOkG rs-flex-box-grid rs-flex-box-grid-top rs-flex-box-grid-start"]').should('contain.text' , 'UNDELIVERED')
    })

    it ('NDR_tab_06' , function() {
        cy.get('[class = "NavigateTabGroup_tabgroup-container__SOWwd"]').contains('Re-Attempt Requested').click()
        cy.get('[class = "Flexbox_flex-row__aKbHb Flexbox_align-stretch__jf368 Flexbox_nowrap__8vOkG rs-flex-box-grid rs-flex-box-grid-top rs-flex-box-grid-start"]').should('contain.text' , 'UNDELIVERED')
        cy.get('[data-sd-event = ndrTableShowHistory]').eq(0).click()
        cy.get('[class = "rs-drawer-right rs-drawer-sm rs-anim-slide-in rs-anim-right rs-drawer"]').should('contain.text' , 'NDR Raised')
    })

    it.skip ('intransit', function () {
        const payload = {
            "location": "Rajkot_Amargadh_H (Gujarat)",
            "additional": {
                "courier_partner_edd": null,
                "destination_hub_inscan_ts": null,
                "order_id": "NCAX1686919940188",
                "latest_status": {
                    "status": "In Transit",
                    "clickpost_status_description": "PickedUp",
                    "clickpost_status_bucket": 2,
                    "reference_number": "NCAX1686919940188",
                    "clickpost_status_bucket_description": "Shipped",
                    "remark": "Shipment picked up",
                    "timestamp": "2023-06-10T18:28:00Z",
                    "location": "Rajkot_Amargadh_H (Gujarat)",
                    "clickpost_city": "",
                    "clickpost_status_code": 4
                },
                "is_rvp": false,
                "ndr_status_code": null,
                "ndr_status_description": null,
                "account_code": "DELHIVERY SURFACE",
                "npr_status_code": null,
                "npr_status_description": null
            },
            "status": "In Transit",
            "clickpost_city": "",
            "clickpost_status_code": 4,
            "clickpost_status_description": "PickedUp",
            "cp_id": 4,
            "remark": "Shipment picked up",
            "account_code": "DELHIVERY SURFACE",
            "waybill": awb,
            "timestamp": "2023-10-05T13:15:00Z"
        };

        cy.request({
            method: 'PUT',
            url: 'http://nushop-dashboard.kaip.in/api/order/order/status-event',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Server': 'nginx',
                'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
                'ETag': 'W/"20-tj8FR1AyEiO2Z6YPDa60CyElEJU"'
            },
            body: payload
        }).then((response) => {
            expect(response.status).to.equal(200);
            cy.log(JSON.stringify(response.body));
        });
    });

    it.skip ('ndr', function () {
        const payload = {
            "location": "Kothakota_Vidyanagar_DPP (Telangana)",
            "additional": {
                "courier_partner_edd": "2023-04-23",
                "destination_hub_inscan_ts": null,
                "order_id": "NCAX1686919940188",
                "latest_status": {
                    "status": "Pending",
                    "clickpost_status_description": "FailedDelivery",
                    "clickpost_status_bucket": 5,
                    "reference_number": "NCAX1686919940188",
                    "clickpost_status_bucket_description": "Failed delivery",
                    "remark": "Customer asked for open delivery",
                    "timestamp": "2023-12-21T18:50:00Z",
                    "location": "Kothakota_Vidyanagar_DPP (Telangana)",
                    "clickpost_city": awb,
                    "clickpost_status_code": 9
                },
                "is_rvp": false,
                "ndr_status_code": 12,
                "ndr_status_description": "Customer wants open delivery",
                "account_code": "DELHIVERY SURFACE",
                "npr_status_code": null,
                "npr_status_description": null
            },
            "status": "Pending",
            "clickpost_city": "",
            "clickpost_status_code": 9,
            "clickpost_status_description": "FailedDelivery",
            "cp_id": 4,
            "remark": "Customer asked for open delivery",
            "account_code": "DELHIVERY SURFACE",
            "waybill": "",
            "timestamp": "2023-12-21T15:14:00Z"
        };

        cy.request({
            method: 'PUT',
            url: 'http://nushop-dashboard.kaip.in/api/order/order/status-event',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Server': 'nginx',
                'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
                'ETag': 'W/"20-tj8FR1AyEiO2Z6YPDa60CyElEJU"'
            },
            body: payload
        }).then((response) => {
            expect(response.status).to.equal(200);
            cy.log(JSON.stringify(response.body));
        });
    });
})