const tailwindcss = require("tailwindcss");
const postcssPresetEnv = require("postcss-preset-env");
const postcssImport = require("postcss-import");
const postcssNested = require('postcss-nested');

const postcssResolver = require("postcss-import-resolver");

module.exports = () => ({
  plugins: [
    postcssNested(),
    postcssImport({
      resolve: postcssResolver({
        extensions: [".css"],
        modules: ["node_modules"],
      }),
    }),
    postcssPresetEnv({ stage: 2 }),
    tailwindcss("./tailwind.config.js"),
  ],
})
