describe(Cypress.env('brand').toUpperCase() + ' - contact oss page', function () {

	beforeEach(function () {
		cy.visit('/kontakta-oss/', { timeout: 120000 })
		// accept cookie by default
		cy.setCookie('hiqCookie', '1')
	})

	afterEach(function () {
		cy.clearCookie('hiqCookie')
	})


	it('Verify contact us header', function () {
		cy.get('.page-head').scrollIntoView({ force: true }).should('be.visible')
		cy.get('.page-head > h1 > span').should('contain.text', 'KONTAKTA OSS')
		cy.get('.page-head > div > p').should('contain.text', 'What\'s up?')

	})

	it('Verify main content block', function () {
		cy.get('main#main-content > div').scrollIntoView({ force: true }).should('be.visible')

		// Verify promotion questions
		var items = Number(Cypress.env('contact-us-content-blocks'))
		var i
		cy.get('main#main-content > div > div').should('have.length', Number(Cypress.env('contact-us-content-blocks')) + 1)

		for (i = 0; i < items; i++) {
			if (i != 3) {
				cy.get('main#main-content > div > div')
					.eq(i)
					.find('div > div > div > div > div > span')
					.should("be.visible")
					.should('have.text', Cypress.env('contact-us-content-block-' + i + '-text'))
			}
			cy.get('main#main-content > div > div')
				.eq(i)
				.find('div > div > div > div > div > h2')
				.should("be.visible")
				.should('contain.text', Cypress.env('contact-us-content-block-' + i + '-header'))
		}

	})

	it('Verify offices block', function () {
		cy.get('main#main-content > div > div:eq(4)').scrollIntoView({ force: true }).should('be.visible')

		// Verify promotion questions
		var items = Number(Cypress.env('footer-offices'))
		var i
		cy.get('.offices > div > div').should('have.length', Number(Cypress.env('footer-offices')) + 1)

		for (i = 0; i < items; i++) {
			if (i != 2) {
				cy.get('.offices > div > div')
					.eq(i)
					.find('div > a')
					.should("be.visible")
					.should('have.attr', 'href', Cypress.env('footer-office-' + i + '-job-url'))
			}
		}

	})


})