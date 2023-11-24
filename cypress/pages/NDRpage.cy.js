export class NDRpage {

    weblocators = {
        mouseOverElement: 'nav div:nth-child(3)',
        orderElement: 'body > div:nth-child(2) > section:nth-child(1) > div:nth-child(1) > nav:nth-child(2) > div:nth-child(1) > div:nth-child(4)'
        
    }
    launching_ndr() {
        cy.get(this.weblocators.mouseOverElement).trigger('mouseover')
        cy.get(this.weblocators.orderElement).click()
        cy.get('.SideNav_sidenav-item-container__PAVyt').contains('NDR').click()
    }
}