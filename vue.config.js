const { defineConfig } = require("@vue/cli-service");
const pugLoaderOptions = {};

module.exports = defineConfig({
  productionSourceMap: false,
  transpileDependencies: true,
  chainWebpack: (config) => {
    // clear all existing pug loaders
    const pugRule = config.module.rule("pug");
    pugRule.uses.clear();
    pugRule.oneOfs.clear();

    // exclude `pug-loader` from the witchery of the baggy `thread-loader` that is used in production mode
    const jsRule = config.module.rule("js");
    jsRule.exclude.add(/pug-loader/);
  },

  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.pug$/,
          oneOf: [
            // allow <template lang="pug"> in Vue components
            {
              resourceQuery: /^\?vue/u,
              loader: "@webdiscus/pug-loader",
              options: {
                method: "html", // render Pug into pure HTML string
                ...pugLoaderOptions,
              },
            },
            // allow import of Pug in JavaScript
            {
              loader: "@webdiscus/pug-loader",
              options: {
                method: "compile", // compile Pug into template function
                ...pugLoaderOptions,
              },
            },
          ],
        },
      ],
    },
  },
});
