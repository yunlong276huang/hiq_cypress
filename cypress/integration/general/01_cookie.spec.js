describe(Cypress.env('brand').toUpperCase() + ' - cookie', function () {

        before(function () {
            cy.visit('/', { timeout: 120000 })
            cy.clearCookie('hiqCookie')        
        })

        after(function () {
            cy.clearCookie('hiqCookie') 
        })

        it('Verify cookie banner', function () {
            cy.addTestContext(
                'Test Description',
                'Test Steps: ' +
                '\n1. Visit landing page for the first time' +
                '\n2. Check cookie banner is visible' +
                '\n3. Click OK button to approve cookie consent' +
                '\n4. Verify cookie hiqCookie value is set to 1 and the cookie banner disappears' +
                '\n\nTest Script last modified by: Yunlog Huang'
            )

            // Verify cookie banner visible and accept it
            cy.get('div#cookie-info').scrollIntoView({ force: true }).should('be.visible')
            cy.get('div#cookie-info > div > a').click()

            // Verify cookie value udpated and banner disappears
            cy.getCookie('hiqCookie').should('have.property', 'value', '1')
            cy.get('div#cookie-info').should('not.visible')

        })

})