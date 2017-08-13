const Generator = require('yeoman-generator');
const path = require('path');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.argument('name', {type: String, required: true});
  }

  writing() {
    const name = this.options.name[0].toLowerCase() + this.options.name.substring(1);
    const className = name[0].toUpperCase() + name.substring(1);

    const copyTemplate = (input, output) => {
      this.fs.copyTpl(
        this.templatePath(input),
        this.destinationPath(path.join(name, output)),
        {
          name,
          className
        }
      );
    };

    copyTemplate('style.tpl', `${name}.scss`);
    copyTemplate('component.tpl', `${name}.component.js`);
    copyTemplate('container.tpl', `${name}.container.js`);
    copyTemplate('container.spec.tpl', path.join('__tests__', `${name}.container.spec.js`));
    copyTemplate('component.spec.tpl', path.join('__tests__', `${name}.component.spec.js`));
  }
};
