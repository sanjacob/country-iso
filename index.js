const core = require('@actions/core');
const github = require('@actions/github');
const countries = require('countries-list');

try {
  const name = core.getInput('name').toLowerCase();
  const locale = core.getInput('locale').toLowerCase();

  const iso2 = countries.getCountryCode(name);
  const data = countries.getCountryData(code);

  core.setOutput("iso-2", iso2);
  core.setOutput("iso-3", data.iso3);

  // Additional fields
  core.setOutput("name", data.name);
  core.setOutput("native", data.native);
  core.setOutput("continent", data.continent);
} catch (error) {
  core.setFailed(error.message);
}
