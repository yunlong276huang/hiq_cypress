describe(Cypress.env('brand').toUpperCase() + ' - download report', function () {

    before(function () {
        cy.visit('/', { timeout: 120000 })
        cy.clearCookie('hiqCookie')        
    })

    after(function () {
        cy.clearCookie('hiqCookie') 
    })

    it('Verify can download 2019 yearly financial report', function () {
        cy.downloadFile("https://www.hiq.se/globalassets/02.-news/se/2020/hiq_ar19_webb.pdf", Cypress.config("downloadsFolder"), 'hiq_ar_2019.pdf')
        cy.readFile('cypress/downloads/hiq_ar_2019.pdf', { timeout: 60000 })

    })

})