## hiq_cypress ##
It is designed for an introduction course on cypress at HiQ HiCollegue.

# About Cypress #
* An open source, front-end testing tool, built for the modern web
* [Cypress Features](https://www.cypress.io/features/)
* [How Cypress works](https://www.cypress.io/how-it-works/)
* [Cypress Documentation](https://docs.cypress.io)

# Pre-requisite #
* [Nodejs](https://nodejs.org/en/) should be downloaded and installed. It also installs npm.
* Check version of node (node -v) and npm (npm -v) from terminal

# Recommended IDE #
* [Visual Studio Code](https://code.visualstudio.com/)

# Download Tests from GitHub, Install Cypress and Open Cypress Tests #
* Open Terminal
* Go to path where you want to setup Cypress tests (Eg: /Users/<user>/Documents)
```console
$ git clone https://github.com/yunlong276huang/hiq_cypress.git
```
* Go to project root folder
```console
$ cd hiq_cypress
```
* Install all dependencies including cypress
```console
$ npm install
```
* Check the version of Cypress 
```console
$ npx cypress -v
```
* Opens Cypress Test Runner
```console
$ npx cypress open
```
* Opens Cypress Test Runner for one specific env
```console
$ npx cypress open --env configFile=hiqSE
```

# Run Cypress Tests #
* Run one test or all tests from Cypress Test Runner (using GUI) on Chrome or Electron browser
     ```console
    $ npx cypress open --env configFile=hiqSE
    ```
    * click run button to run all specs or
    * click one spec to run that spec only
* Run tests on CLI: 
    * Run all tests on Electron browser Headless
    ```console
    $ npx cypress run
    ```
    * Run all tests on Chrome browser Header
    ```console
    $ npx cypress run -b chrome
    ```
    * Run all tests on Chrome browser Headless
    ```console
    $ npx cypress run -b chrome --headless
    ```
    * Run tests per env or brand
    ```console
    $ npx cypress run --env configFile=hiqSE
    ```
    * Run tests per spec
    ```console
    $ npx cypress run --env configFile=hiqSE --spec 'cypress/integration/general/02_landing.spec.js'
    ```
* Run tests with a custom command
    * For env hiqSE
    ```console
    $ npm run cypress:hiqSE
    ```
    * For env hiqcareerSE
    ```console
    $ npm run cypress:hiqcareerSE
    ```