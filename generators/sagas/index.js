const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.argument('name', {type: String, required: true});
  }

  writing() {
    const name = this.options.name[0].toLowerCase() + this.options.name.substring(1);
    const className = name[0].toUpperCase() + name.substring(1);

    this.fs.copyTpl(
      this.templatePath('sagas.tpl'),
      this.destinationPath(name + '.sagas.js'),
      {
        name,
        className,
        prefix: name.toUpperCase()
      }
    );
  }
};
