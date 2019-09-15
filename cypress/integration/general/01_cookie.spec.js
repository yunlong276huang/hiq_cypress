describe(Cypress.env('brand').toUpperCase() + ' - cookie', function () {
	
	beforeEach(function() {
        cy.visit('/',{failOnStatusCode:false})
        cy.clearCookie('hiqCookie')
	})
    
	after(function() {
		
	})

	it('Verify cookie banner', function()
	{	
        // Verify cookie banner visible and accept it
        cy.get('div#cookie-info').scrollIntoView({force: true}).should('be.visible')
        cy.get('div#cookie-info > div > a').click()
        
        // Verify cookie value udpated and banner disappears
        cy.getCookie('hiqCookie').should('have.property', 'value', '1')
        cy.get('div#cookie-info').scrollIntoView({force: true}).should('not.visible')
	})
	
})