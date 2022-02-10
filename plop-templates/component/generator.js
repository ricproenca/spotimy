const utils = require('../utils');

const prompts = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your component name?',
    validate: utils.requireField('name')
  }
];

const actions = [
  {
    type: 'add',
    path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.js',
    templateFile: 'plop-templates/component/Component.js.hbs'
  },
  {
    type: 'add',
    path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.test.js',
    templateFile: 'plop-templates/component/component.test.js.hbs'
  },
  {
    type: 'add',
    path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.styles.js',
    templateFile: 'plop-templates/component/component.styles.js.hbs'
  },
  {
    type: 'add',
    path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.shape.js',
    templateFile: 'plop-templates/component/component.shape.hbs'
  },
  {
    type: 'add',
    path: 'src/components/{{pascalCase name}}/index.js',
    templateFile: 'plop-templates/injectable-index.js.hbs',
    skipIfExists: true
  },
  {
    type: 'append',
    path: 'src/components/{{pascalCase name}}/index.js',
    pattern: '/* EXPORT_DEFAULT */',
    template: 'export { default } from "./{{pascalCase name}}";'
  }
];

module.exports = { description: 'Create a reusable component', prompts, actions };
