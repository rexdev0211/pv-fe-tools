const handlebarsHelpers = require('handlebars-helpers');

const { resolveApp } = require('../../helper/paths');
const { assembleFiles } = require('./assembleFiles');

assembleFiles({
  layouts: resolveApp("src/templates/**/*.hbs"),
  partials: resolveApp("src/components/**/*.hbs"),
  pages: resolveApp("src/components/**/*.hbs"),
  data: [ resolveApp("src/components/**/*.json"), resolveApp("src/templates/*.json")],
  dest: resolveApp("target/components"),
  helpers: [
    handlebarsHelpers(),
    resolveApp('helpers/handlebarsHelper/*.js')
  ]
});
