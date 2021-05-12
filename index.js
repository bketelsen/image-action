const core = require('@actions/core');
const github = require('@actions/github');
const { processImages } = require('./images');


async function run() {
  const src = core.getInput('source-directory');
  const target = core.getInput('output-directory');
  await processImages(src,target);
}

try {
    run();
} catch (error) {
  core.setFailed(error.message);
}
