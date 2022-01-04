describe(Cypress.env('brand').toUpperCase() + ' - landing page', function () {

	beforeEach(function () {
		cy.visit('/', { timeout: 120000 })
		// accept cookie by default
		cy.setCookie('hiqCookie', '1')
	})

	afterEach(function () {
		cy.clearCookie('hiqCookie')
	})

	it('Verify header sections', function () {
		// Verify HIQ logo visible
		cy.get('.header-bg-left > img').scrollIntoView({ force: true }).should('be.visible')

		// Verify language button visible
		cy.get('button#trigger-langoverlay').should('be.visible')

		// Verify search icon visible
		cy.get('button#trigger-searchoverlay').should('be.visible')

		// Verify meny visible
		cy.get('.hamburger-box').should('be.visible')
	})

	it('Verify header language options', function () {
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
		}
	})

	it('Verify lanuage page close button', function () {
		cy.get('button#trigger-langoverlay').scrollIntoView({ force: true }).click()
		cy.get('button#trigger-langoverlay > .fa').click()
		cy.get('.overlaylang').should('not.visible')
	})

	const search_keyword = ['autonomous', 'frontend', 'devops', 'cloud', 'smart']
	search_keyword.forEach((keyword) => {
		it('Verify page search with keyword ' + keyword, function () {
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

	it('Verify hello world block', function () {
		cy.get('.promotion-block:eq(0)').scrollIntoView({ force: true }).should('be.visible')

		// Verify hello world block header and description
		cy.get('.promotion-block:eq(0) > div:eq(0) > h1').should('be.visible').should('contain.text', 'Hello world!')
		cy.get('.promotion-block:eq(0) > div:eq(1) > div').should('be.visible').should('contain.text', 'Välkommen till HiQ')

		// Verify hello world block buttons' url
		var items = Number(Cypress.env('promotion-block-buttons'))
		var i
		cy.get('.promotion-block:eq(0) > ul > li').should('have.length', Number(Cypress.env('hello-world-buttons')))
		for (i = 0; i < items; i++) {

			cy.get('.promotion-block:eq(0) > ul > li')
				.eq(i)
				.find('a')
				.should("be.visible")
				.should('have.attr', 'href', Cypress.env('hello-world-button-' + i))
		}
	})

	it('Verify promotion questions block', function () {
		cy.get('.background-paper').scrollIntoView({ force: true }).should('be.visible')

		// Verify promotion questions
		var items = Number(Cypress.env('promotion-questions'))
		var i
		cy.get('.background-paper > div > div').should('have.length', Number(Cypress.env('promotion-questions')) + 1)

		for (i = 1; i <= items; i++) {

			cy.get('.background-paper > div > div')
				.eq(i - 1)
				.find('div:eq(0) > p')
				.should('have.text', Cypress.env('promotion-question-' + i + '-no'))
			cy.get('.background-paper > div > div')
				.eq(i - 1)
				.find('div:eq(1) > h2')
				.should('contain.text', Cypress.env('promotion-question-' + i + '-heading'))
		}

		// Verify promotion question reply
		cy.get('.background-paper > div > div')
			.eq(items).find('div > p').should('contain.text', Cypress.env('promotion-questions-reply-part-0'))
		cy.get('.background-paper > div > div')
			.eq(items).find('div > p').should('contain.text', Cypress.env('promotion-questions-reply-part-1'))

		// Verify curiosity button
		cy.get('.background-paper > ul > li > a')
			.should("be.visible")
			.should('have.attr', 'href', Cypress.env('curiosity-button'))
	})

	it('Verify join hiq block', function () {
		cy.get('.promotion-block:eq(2)').scrollIntoView({ force: true }).should('be.visible')

		// Verify join hiq block header and description
		cy.get('.promotion-block:eq(2) > div:eq(0) > h2').should('be.visible').should('contain.text', 'Join HiQ!')
		cy.get('.promotion-block:eq(2) > div:eq(1) > div')
			.should('be.visible').should('contain.text', 'Vi letar hela tiden efter smarta, kreativa och engagerade människor. Skicka in en ansökan redan idag så håller vi tummarna för att vi snart ser dig i ett av våra ledande team inom tech, IT, integration eller digitala tjänster!')

		// Verify join hiq block buttons' url
		var items = Number(Cypress.env('join-hiq-buttons'))
		var i
		cy.get('.promotion-block:eq(2) > ul > li').should('have.length', Number(Cypress.env('join-hiq-buttons')))
		for (i = 0; i < items; i++) {

			cy.get('.promotion-block:eq(2) > ul > li')
				.eq(i)
				.find('a')
				.should("be.visible")
				.should('have.attr', 'href', Cypress.env('join-hiq-button-' + i))
		}
	})

	it('Verify hiq digital knowledge tour block', function () {
		cy.get('.promotion-block:eq(3)').scrollIntoView({ force: true }).should('be.visible')

		// Verify hiq digital knowledge tour block header and description
		cy.get('.promotion-block:eq(3) > div:eq(0) > h2').should('be.visible').should('contain.text', 'HiQ Digital Knowledge Tour')
		cy.get('.promotion-block:eq(3) > div:eq(1) > div')
			.should('be.visible').should('contain.text', 'Vi bjuder på matnyttiga och kostnadsfria webbinarier om tech, IT, design och integration.')

		// Verify hiq digital knowledge tour block button' url
		cy.get('.promotion-block:eq(3) > ul > li > a')
			.should("be.visible")
			.should('have.attr', 'href', '/ideer/hiq-digital-knowledge-tour/')

	})

	it('Verify meet the family block', function () {
		cy.get('.promotion-block:eq(4)').scrollIntoView({ force: true }).should('be.visible')

		// Verify meet the family block header and description
		cy.get('.promotion-block:eq(4) > div:eq(0) > h2').should('be.visible').should('contain.text', 'Meet the family')

		// Verify meet the family block buttons' url
		var items = Number(Cypress.env('meet-the-family-buttons'))
		var i
		cy.get('.promotion-block:eq(4) > ul > li').should('have.length', Number(Cypress.env('meet-the-family-buttons')))
		for (i = 0; i < items; i++) {
			cy.get('.promotion-block:eq(4) > ul > li')
				.eq(i)
				.find('a')
				.should("be.visible")
				.should('have.attr', 'href', Cypress.env('meet-the-family-button-' + i))
		}
	})

	it('Verify news block', function () {
		cy.get('.news-list:eq(0)').scrollIntoView({ force: true }).should('be.visible')

		// Verify news block
		cy.get('.news-list:eq(0) > div:eq(0) > h3').should('be.visible').should('have.text', 'Nyheter')

		// Verify meet the family block buttons' url
		var items = Number(Cypress.env('news-list-items'))
		var i
		cy.get('.news-list:eq(1) > div > a').should('have.length', Number(Cypress.env('news-list-items')))
		for (i = 0; i < items; i++) {

			cy.get('.news-list:eq(1) > div > a')
				.eq(i)
				.find('article')
				.should("be.visible")
		}

		cy.get('.news-show-all').should('be.visible')
			.should('have.attr', 'href', '/nyheter/').should('have.text', 'Alla nyheter').click({ force: true })
		cy.url().should('include', '/nyheter/')
		cy.go('back')
	})

	it('Verify footer sections', function () {
		cy.get('footer#main-footer > div').scrollIntoView({ force: true }).should('be.visible')

		// Verify footer logo
		cy.get('.footer-logo').should('be.visible')

		// Verify footer quote
		cy.get('.footer-quote').should('be.visible')
		cy.get('.footer-quote > h4:eq(0)').should('be.visible').should('contain.text', 'Our dealings are complex, our duty simplicity')
		cy.get('.footer-quote > h4:eq(1)').should('be.visible').should('contain.text', 'Bengan')

		// Verify footer list
		var items = Number(Cypress.env('footer-list-items'))
		var i
		cy.get('.footer-list > li')
			.should('have.length', Number(Cypress.env('footer-list-items')))
		for (i = 0; i < items; i++) {
			if (i == 0) {
				cy.get('.footer-list > li')
					.eq(i)
					.find('ul > li:eq(0) > h5')
					.should("be.visible")
					.should('contain.text', Cypress.env('footer-list-item-' + i))
			} else {
				cy.get('.footer-list > li')
					.eq(i)
					.find('h5')
					.should("be.visible")
					.should('contain.text', Cypress.env('footer-list-item-' + i))
			}
		}
	})

	it('Verify footer contact hiq', function () {
		cy.get('footer#main-footer > div').scrollIntoView({ force: true }).should('be.visible')

		var items = Number(Cypress.env('footer-contact-hiq-items'))
		var i
		cy.get('.footer-list > li:eq(0) > ul > li')
			.should('have.length', Number(Cypress.env('footer-contact-hiq-items')) + 1)
		for (i = 1; i < items + 1; i++) {
			cy.get('.footer-list > li:eq(0) > ul > li')
				.eq(i)
				.find('small')
				.should("be.visible")
				.should('contain.text', Cypress.env('footer-contact-hiq-item-' + (i - 1) + '-text'))
			cy.get('.footer-list > li:eq(0) > ul > li')
				.eq(i)
				.find('small > a')
				.should("be.visible")
				.should('have.attr', 'href', Cypress.env('footer-contact-hiq-item-' + (i - 1) + '-mail'))
		}
	})

	it('Verify footer links', function () {
		cy.get('footer#main-footer > div').scrollIntoView({ force: true }).should('be.visible')

		var items = Number(Cypress.env('footer-link-items'))
		var i
		cy.get('.footer-list > li:eq(1) > small > ul > li')
			.should('have.length', Number(Cypress.env('footer-link-items')))
		for (i = 0; i < items; i++) {
			if (i != 0 && i != 3) {
				cy.get('.footer-list > li:eq(1) > small > ul > li')
					.eq(i)
					.find('a')
					.should("be.visible")
					.should('have.text', Cypress.env('footer-link-item-' + i))
					.should('have.attr', 'href', Cypress.env('footer-link-item-' + i + '-url'))
					.click()
				cy.url().should('include', Cypress.env('footer-link-item-' + i + '-url'))
				cy.go('back')
			}
		}
	})

	it('Verify footer social media', function () {
		cy.get('footer#main-footer > div').scrollIntoView({ force: true }).should('be.visible')

		var items = Number(Cypress.env('footer-social-media-items'))
		var i
		cy.get('.footer-list > li:eq(2) > ul > li')
			.should('have.length', Number(Cypress.env('footer-social-media-items')))
		for (i = 0; i < items; i++) {
			cy.get('.footer-list > li:eq(2) > ul > li')
				.eq(i)
				.find('a')
				.should("be.visible")
				.should('have.attr', 'href', Cypress.env('footer-social-media-item-' + i + '-url'))
			cy.get('.footer-list > li:eq(2) > ul > li')
				.eq(i)
				.find('a > small')
				.should("be.visible")
				.should('have.text', Cypress.env('footer-social-media-item-' + i))
		}
	})

	it('Verify footer offices', function () {
		cy.get('footer#main-footer > div').scrollIntoView({ force: true }).should('be.visible')

		var items = Number(Cypress.env('footer-offices'))
		var i
		cy.get('.footer-list > li:eq(3) > small > ul > li')
			.should('have.length', Number(Cypress.env('footer-offices')))
		for (i = 0; i < items; i++) {
			if (i != 2) {
				cy.get('.footer-list > li:eq(3) > small > ul > li')
					.eq(i)
					.find('a')
					.should("be.visible")
					.should('have.text', Cypress.env('footer-office-' + i))
					.should('have.attr', 'href', Cypress.env('footer-office-' + i + '-job-url'))
			}

		}

	})

	it('Verify footer hiq familjens', function () {
		cy.get('footer#main-footer > div').scrollIntoView({ force: true }).should('be.visible')

		var items = Number(Cypress.env('footer-hiq-familjens'))
		var i
		cy.get('.footer-list > li:eq(4) > small > ul > li')
			.should('have.length', Number(Cypress.env('footer-hiq-familjens')))
		for (i = 0; i < items; i++) {
			cy.get('.footer-list > li:eq(4) > small > ul > li')
				.eq(i)
				.find('a')
				.should("be.visible")
				.should('have.text', Cypress.env('footer-hiq-familjen-' + i))
				.should('have.attr', 'href', Cypress.env('footer-hiq-familjen-' + i + '-url'))
		}
	})


})