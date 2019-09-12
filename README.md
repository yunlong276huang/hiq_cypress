# hiq_cypress #
It is a hobby project to setup a few dummy cypress tests to walk through HiQ webpages.

# About Cypress #
* An open source, front-end testing tool, built for the modern web
* Cypress Features: https://www.cypress.io/features/
* How Cypress works: https://www.cypress.io/how-it-works/ 
* There is good documentation and examples available here: https://docs.cypress.io

# Pre-requisite #
* Nodejs should be installed (https://nodejs.org/en/). It also installs npm.
* Check version of node (node -v) and npm (npm -v) from terminal

# Download Tests from GitHub, Install Cypress and Run Cypress Tests #
* Open Terminal
* Go to path where you want to setup Cypress tests (Eg: /Users/<user>/Documents)
* $ git clone https://github.com/yunlong276huang/hiq_cypress.git
* $ cd HIQ_CYPRESS
* $ npm install cypress (This installs Cypress and other dependencies)the root of your project to ensure cypress is installed in the correct directory.
* $ npx cypress -v (Check the version of Cypress)
* $ npx cypress open  (Opens Cypress Test Runner) or
* $ npx cypress open --env configFile=comeon  (Opens Cypress Test Runner for specific brand.
