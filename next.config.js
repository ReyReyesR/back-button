const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
module.exports = withBundleAnalyzer({});
/*const withSass = require("@zeit/next-sass");
module.exports = withSass({

});
*/

const withStyles = require('@webdeb/next-styles');

module.exports = withStyles({
  less: false, // use .less files
  sass: true, // use .scss files
  modules: true, // style.(m|module).css & style.(m|module).scss for module files
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  sassLoaderOptions: {
    sassOptions: {
      includePaths: ['src/scss'], // @import 'variables'; # loads (src/styles/varialbes.scss), you got it..
    },
  },
  cssLoaderOptions: {},
  postcssLoaderOptions: {},
  miniCssExtractOptions: {}, // ignoreOrder:true for https://github.com/webpack-contrib/mini-css-extract-plugin/issues/250#issuecomment-544898772
});
