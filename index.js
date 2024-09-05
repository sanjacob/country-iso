const core = require('@actions/core');
const github = require('@actions/github');
const countries = require("i18n-iso-countries");

try {
  const name = core.getInput('name').toLowerCase();
  const locale = core.getInput('locale').toLowerCase();

  const iso2 = countries.getAlpha2Code(name, locale);
  const iso3 = countries.getAlpha3Code(name, locale);

  core.setOutput("iso-2", iso2);
  core.setOutput("iso-3", iso3);
} catch (error) {
  core.setFailed(error.message);
}
