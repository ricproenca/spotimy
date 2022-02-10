const componentConfig = require('./plop-templates/component/generator');

module.exports = function (plop) {
  plop.setGenerator('component', componentConfig);
};
