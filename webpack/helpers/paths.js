// ./config/paths

const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const PATHS = {
  appBuild: resolveApp('build'),
  appBundleAnalyze: resolveApp('reports/bundle/index.html'),
  appCode: {
    Api: resolveApp('src/api'),
    Assets: resolveApp('src/assets'),
    Components: resolveApp('src/components'),
    Config: resolveApp('src/config'),
    Hooks: resolveApp('src/hooks'),
    Layout: resolveApp('src/layout'),
    Pages: resolveApp('src/pages'),
    Providers: resolveApp('src/providers'),
    Routes: resolveApp('src/routes'),
    Services: resolveApp('src/services'),
    Store: resolveApp('src/store/'),
    Templates: resolveApp('src/templates/'),
    Tests: resolveApp('src/tests'),
    Utils: resolveApp('src/utils')
  },
  appDist: resolveApp('dist'),
  appEntry: resolveApp('src/index.js'),
  appFavicon: resolveApp('public/favicon.ico'),
  appManifest: resolveApp('public/manifest.json'),
  appNodeModules: resolveApp('node_modules'),
  appSrc: resolveApp('src'),
  appTemplate: resolveApp('public/index.html'),
  appTestsCoverage: resolveApp('reports/tests/')
};

module.exports = PATHS;
