const execSync = require('child_process').execSync;
const resolve = require('path').resolve;
const projectRootDir = resolve(`${__dirname}/../..`);
module.exports = () => {
  execSync(
    `${projectRootDir}/node_modules/.bin/prettier --config ${projectRootDir}/.prettierrc.js -w --ignore-path ${projectRootDir}/.prettierignore ${projectRootDir} --cache`,
    {
      stdio: 'inherit',
    }
  );
};
