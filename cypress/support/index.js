// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.Cookies.defaults({
  preserve: ['hiqCookie']
})

if (Cypress.env('url')) {
    // Over write baseUrl with Env url 
    Cypress.config('baseUrl', Cypress.env('url'))
} 

const addContext = require('mochawesome/addContext');

Cypress.on('test:after:run', test => {
	addContext(
		{ test },
		{
			title: 'Environment Details',
			value:
				'URL: ' +
				Cypress.config('baseUrl')
		}
	)
})

Cypress.on('test:after:run', (test, runnable) => {
	if (test.state === 'failed') {
		addContext(
			{ test },
			{
				title: 'Screenshot after failure',
				value: `./screenshots/${Cypress.spec.name}/${runnable.parent.title} -- ${test.title} (failed).png`
			}
		)
	}
})

Cypress.on('test:after:run', (test, runnable) => {

	addContext(
		{ test },
		{
			title: 'Video',
			value: `./videos/${Cypress.spec.name}.mp4`
		}
	)

})

