const themeDir = __dirname + "/../../";
const themeNodeModules = themeDir + "node_modules/";
module.exports = {
  plugins: [
    require("postcss-import")({ path: [themeDir, themeNodeModules] }),
    require("tailwindcss/nesting"),
    require("tailwindcss")(themeDir + "assets/css/tailwind.config.js"),
    require("autoprefixer")({ path: [themeDir, themeNodeModules] }),
  ],
};
