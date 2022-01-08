describe(Cypress.env('brand').toUpperCase() + ' - landing page', function () {

    beforeEach(function () {
        cy.visit('/', { timeout: 120000 })

    })

    afterEach(function () {

    })

    it('Verify header sections', function () {
        // Verify HIQ logo visible
        cy.get('header > a > img').scrollIntoView({ force: true }).should('be.visible')

        // Verify career menu visible
        cy.get('header > div:eq(0) > button').should('be.visible')

        // Verify share icon visible
        cy.get('header > div:eq(1) > div > div').should('be.visible')

    })

    it('Verify header career menu', function () {
        cy.get('header > div:eq(0) > button > .header-menu-burger').scrollIntoView({ force: true }).should("be.visible")

        var items = Number(Cypress.env('career-menu-options'))
        var i
        cy.get('header > div:eq(0) > div > nav > ul > li').should('have.length', Number(Cypress.env('career-menu-options')))

        for (i = 0; i < items; i++) {
            cy.get('header > div:eq(0) > button > div').click()
            cy.get('header > div:eq(0) > div > nav').should('be.visible')
            cy.get('header > div:eq(0) > div > nav > ul > li')
                .eq(i)
                .find('a')
                .should("be.visible")
                .should('have.text', Cypress.env('career-menu-option-' + i))
                .should('have.attr', 'href', Cypress.env('career-menu-option-' + i + '-url'))
                .click()
            cy.url().should('include', Cypress.env('career-menu-option-' + i + '-url'))
            cy.visit('/')
        }
    })

    it('Verify HiQ timeline block', function () {
        cy.get('section#section-8495762').scrollIntoView({ force: true })
        cy.get('section#section-8495762 > div > div:eq(0) > div > h2').should('be.visible').should('contain.text', 'HiQ timeline')
        cy.get('section#section-8495762 > div > div:eq(0) > div > p').should('be.visible').should('contain.text', '...with some Internet milestones')

        var i
        for (i = 0; i < 25; i++) {
            cy.get('section#section-8495762 > div > div:eq(1) > div').eq(i).find('div:eq(0)').scrollIntoView({ force: true })
        }

    })

})