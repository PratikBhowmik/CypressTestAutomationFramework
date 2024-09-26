export class NDRpage {

    weblocators = {
        mouseOverElement: 'nav div:nth-child(3)',
        orderElement: '[class = "Flexbox_flex-row__aKbHb Flexbox_align-middle__-J0b5 rs-flex-box-grid rs-flex-box-grid-top rs-flex-box-grid-space-between"]'
        
    }
    launching_ndr() {
        cy.get(this.weblocators.mouseOverElement).trigger('mouseover');
        cy.get(this.weblocators.orderElement).contains('Orders').click();
        cy.get('[class = "SideNav_submenuitem-holder__dRus9"]').contains('NDR').click();
    }
}