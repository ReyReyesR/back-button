This the Wowcher React App repo

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Running Storybook

To run storybook use 
```bash 
npm run storybook
```

when making changes to storybook stories you will need to rebuild the storybook system if not done automatically
in this case use
```bash
npm run build-storybook
```
this will force storybook to rebuild the whole library and stories with your changes.

If you are adding addons for storybook, you will need to add the addon in `.storybook/main.js`

If you would like to autoload your addons without implicitly importing those dependancies manually, you can add them inside `.storybook/preview.js`

import them as normal and set `addDecorator(*insert import name*);`

## Running Unit tests

To run unit tests use

```bash 
npm run test
```

Although we will use the folder `__test__` to store all our tests, this command will search for all the files in the project with the preffix .test.

All the test configuration is done in the files
`jest.config.js`
`jest.setup.js`

The file `fileMock` will be use to mock all the documents that not need to be tested (like CSS or image files).


## Running Cypress tests

`to run cypress go to the root of the application and type`

```bash
npx cypress open
```

Cypress test are opened in a dedicated Cypress browser. Use the Cypress folder for all integrated tests, default tests have been added as an example of what can be done inside of Cypress.

folder structure on the outer folder must not be changed, only the files inside.

- Cypress // this is the main container folder
- fixtures // this is where you use mock data expected from the database or api
- plugins // this is where you can add any and all plugins for Cypress or the webapp
- screenshots // this is optional, Cypress will take screenshots if requested and store them here for later
- support // the index.js file inside this folder is loaded before anything else, primarily for setting logins to be tested at a later stage.

