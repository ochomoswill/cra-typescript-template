const { override, fixBabelImports, addLessLoader } = require("customize-cra");

const antdTheme = require('./src/theme.js');

module.exports = override(
    fixBabelImports("import", {
        libraryName: "antd",
        libraryDirectory: "es",
        style: true,
    }),
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
            modifyVars: antdTheme,
        },
    })
);
