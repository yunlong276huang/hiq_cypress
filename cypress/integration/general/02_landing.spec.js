describe(Cypress.env('brand').toUpperCase() + ' - landing page', function () {

	beforeEach(function () {
		cy.visit('/', { failOnStatusCode: false })
		// accept cookie by default
		cy.setCookie('hiqCookie', '1')
	})

	afterEach(function () {
		cy.clearCookie('hiqCookie')
	})

	it('Verify header section', function () {
		// Verify HIQ logo visible
		cy.get('.header-bg-left').scrollIntoView({ force: true }).should('be.visible')

		// Verify language button visible
		cy.get('button#trigger-langoverlay').should('be.visible')

		// Verify search icon visible
		cy.get('button#trigger-searchoverlay').should('be.visible')

		// Verify meny visible
		cy.get('.hamburger-box').should('be.visible')

		// Verify page scroller visible
		cy.get('.scroll-msg-wheel').should('be.visible')

		// Verify hero text & link visible
		cy.get('.hero-text > .font-hiq-rough').should('be.visible')
		cy.get('.hero-text > .small-12').should('be.visible')
		cy.get('.overflow-hidden > div > .hero-text > .link-arrow > a').should('be.visible')
			.should('have.attr', 'href', '/case/').click({ force: true })
		cy.url().should('include', '/case/').end()
		cy.go('back')
	})

	it('Verify header language switch', function () {
		cy.get('button#trigger-langoverlay').scrollIntoView({ force: true }).should("be.visible")

		var items = Number(Cypress.env('landing-language-options'))
		var i
		cy.get('.overlaylang > div').should('have.length', Number(Cypress.env('landing-language-options')))
		for (i = 0; i < items; i++) {
			cy.get('button#trigger-langoverlay').click()
			cy.get('.overlaylang').should('be.visible')
			cy.get('.overlaylang > div')
				.eq(i)
				.find('.lang > a')
				.should("be.visible")
				.should('have.attr', 'href', Cypress.env('landing-language-option-' + i))
				.click()
			cy.url().should('eq', Cypress.env('landing-language-option-' + i))
		}
	})

	it('Verify lanuage page close button', function () {
		cy.get('button#trigger-langoverlay').scrollIntoView({ force: true }).click()
		cy.get('button#trigger-langoverlay > .fa').click()
		cy.get('.overlaylang').should('not.visible')
	})

	const search_keyword = ['development', 'frontend', 'devops', 'cloud', 'testautomatiserare']
	search_keyword.forEach((keyword) => {
		it('C2429 Verify page search with keyword ' + keyword, function () {
			cy.get('button#trigger-searchoverlay').scrollIntoView({ force: true }).click()
			cy.get('input#query-layer').type(keyword)
			cy.get('.query-button').click()
			cy.url().should('include', '?q=' + keyword).end()
			cy.get('.input-search').should('have.attr', 'value', keyword)
		})
	})

	it('Verify search page close button', function () {
		cy.get('button#trigger-searchoverlay').scrollIntoView({ force: true }).click()
		cy.get('button#trigger-searchoverlay > .fa').click()
		cy.get('.overlaysearch').should('not.visible')
	})

	it('Verify hamburger menu', function () {
		cy.get('button#trigger-menuoverlay').scrollIntoView({ force: true }).should("be.visible")

		var items = Number(Cypress.env('hamburger-menu-items'))
		var i
		cy.get('.overlaymenu > nav > ul > li').should('have.length', Number(Cypress.env('hamburger-menu-items')))
		for (i = 0; i < items; i++) {
			cy.get('button#trigger-menuoverlay').scrollIntoView({ force: true }).click()
			cy.get('.overlaymenu > nav > ul > li')
				.eq(i)
				.find('a')
				.should("be.visible")
				.should('have.attr', 'href', Cypress.env('hamburger-menu-item-' + i))
				.click()
			cy.url().should('include', Cypress.env('hamburger-menu-item-' + i))
			cy.go('back')
		}

	})

	it('Verify hamburger menu page close button', function () {
		cy.get('button#trigger-menuoverlay').scrollIntoView({ force: true }).click()
		cy.get('.hamburger').click()
		cy.get('.overlaymenu').should('not.visible')
	})

	it('Verify main culture section', function () {
		// Verify culture talk  
		cy.get('main#main-content > div:eq(0)').scrollIntoView({ force: true }).should('be.visible')

		cy.get('main#main-content > div:eq(0) > div > div:eq(0) > div > section').should('be.visible')
		cy.get('main#main-content > div:eq(0) > div > div:eq(0) > div > section > .orbit > .orbit-next').click()
		cy.get('main#main-content > div:eq(0) > div > div:eq(0) > div > section > .orbit > .orbit-next').click()
		cy.get('main#main-content > div:eq(0) > div > div:eq(0) > div > section > .orbit > .orbit-previous').click()
		cy.get('main#main-content > div:eq(0) > div > div:eq(0) > div > section > .orbit > .orbit-bullets-wrapper > nav > button:eq(1)')
			.should('have.attr', 'class', 'is-active')
		cy.get('main#main-content > div:eq(0) > div > div:eq(1) > div > a').should('have.attr', 'href', '/jobb/').click()
		cy.url().should('include', '/jobb/').end()
		cy.go('back')
	})

	it('Verify main case section', function () {
		// Verify three cases
		cy.get('main#main-content > div:eq(1)').scrollIntoView({ force: true }).should('be.visible')

		var items = Number(Cypress.env('main-case-items'))
		var i
		cy.get('main#main-content > div:eq(1) > div').should('have.length', Number(Cypress.env('main-case-items')))
		for (i = 0; i < items; i++) {
			cy.get('main#main-content > div:eq(1) > div')
				.eq(i).scrollIntoView({ force: true })
				.find('> div > div > a')
				.should("be.visible")
				.should('have.attr', 'href', Cypress.env('main-case-item-' + i))
				.click()
			cy.url().should('include', Cypress.env('main-case-item-' + i))
			cy.go('back')
		}
	})

	it('Verify main news section', function () {
		// Verify news section
		cy.get('main#main-content > div:eq(2)').scrollIntoView({ force: true }).should('be.visible')

		cy.get('main#main-content > div:eq(2) > div > div:eq(0) > a').first().should('be.visible').click()
		cy.url().should('include', '/nyheter/')
		cy.go('back')
		cy.get('main#main-content > div:eq(2) > div > div:eq(1) > div > a').scrollIntoView({ force: true })
			.should('be.visible')
			.should('have.attr', 'href', '/nyheter/').click()
		cy.url().should('include', '/nyheter/').end()
		cy.go('back')
	})

	it('Verify footer social media', function () {
		cy.get('footer#main-footer > div').scrollIntoView({ force: true }).should('be.visible')

		var items = Number(Cypress.env('footer-social-media-items'))
		var i
		cy.get('footer#main-footer > div > div > div > div:eq(0) > div')
			.should('have.length', Number(Cypress.env('footer-social-media-items')) + 1)
		for (i = 0; i < items; i++) {
			if (i != 2) {
				cy.get('footer#main-footer > div > div > div > div:eq(0) > div')
					.eq(i)
					.find('a')
					.should("be.visible")
					.should('have.attr', 'href', Cypress.env('footer-social-media-item-' + i))
			}
		}

	})

	it('Verify footer links', function () {
		cy.get('footer#main-footer > div').scrollIntoView({ force: true })

		var items = Number(Cypress.env('footer-link-items'))
		var i
		cy.get('footer#main-footer > div > div > div > div:eq(1) > ul > li').should('have.length', Number(Cypress.env('footer-link-items')))
		for (i = 0; i < items; i++) {
			if (i != 3) {
				cy.get('footer#main-footer > div').scrollIntoView({ force: true })
				cy.get('footer#main-footer > div > div > div > div:eq(1) > ul > li')
					.eq(i)
					.find('a')
					.should("be.visible")
					.should('have.attr', 'href', Cypress.env('footer-link-item-' + i))
					.click()
				cy.url().should('include', Cypress.env('footer-link-item-' + i))
				cy.go('back')
			}
		}
	})

	it('Verify footer projects', function () {
		cy.get('.footer-projects-left').scrollIntoView({ force: true }).should('be.visible')
		cy.get('.footer-projects-right > a').scrollIntoView({ force: true }).should('be.visible')

	})

	it('Verify open application form', function () {
		cy.get('.footer-projects-right > a').scrollIntoView({ force: true }).should('be.visible').click()
		cy.get('div#openApplicationFooter').should('be.visible')
		cy.get('.Form__MainBody > section > div:eq(0) > input').type("Test Test")
		cy.get('.Form__MainBody > section > div:eq(1) > input').type("testare@gmail.com")
		cy.get('.Form__MainBody > section > div:eq(2) > input').type("070110120")
		cy.get('.Form__MainBody > section > div:eq(3) > textarea').type("Åh vad fint!")
		cy.get('.Form__MainBody > section > button').scrollIntoView({ force: true }).should('be.visible')
		cy.get('div#openApplicationFooter > .close-button').scrollIntoView({ force: true }).click()
	})
})