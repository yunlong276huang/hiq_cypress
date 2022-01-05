# hiq_cypress #
It is designed for an introduction course on cypress at HiQ HiCollegue.

# About Cypress #
* An open source, front-end testing tool, built for the modern web
* Cypress Features: https://www.cypress.io/features/
* How Cypress works: https://www.cypress.io/how-it-works/ 
* There is good documentation and examples available here: https://docs.cypress.io

# Pre-requisite #
* Nodejs should be installed (https://nodejs.org/en/). It also installs npm.
* Check version of node (node -v) and npm (npm -v) from terminal

# Recommended IDE #
* Visual Studio Code (https://code.visualstudio.com/)

# Download Tests from GitHub, Install Cypress and Open Cypress Tests #
* Open Terminal
* Go to path where you want to setup Cypress tests (Eg: /Users/<user>/Documents)
* $ git clone https://github.com/yunlong276huang/hiq_cypress.git
* $ cd hiq_cypress
* $ npm install (This installs Cypress and other dependencies)the root of your project to ensure cypress is installed in the correct directory.
* $ npx cypress -v (Check the version of Cypress)
* $ npx cypress open  (Opens Cypress Test Runner) or
* $ npx cypress open --env configFile=hiqSE

# Run Cypress Tests #
* Run one test or all tests from Cypress Test Runner (using GUI) on Chrome or Electron browser
    * $ npx cypress open --env configFile=hiqSE
    * click run button to run all specs or
    * click one spec to run that spec only
* Tests can be run also using CLI
    * $ npx cypress run (Run all tests on Electron browser Headless)
    * $ npx cypress run --env configFile=hiqSE (To run tests per env or brand)
* Run test with custom command (To be configured in package.json)
