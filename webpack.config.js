const path = require('path');
const glob = require("glob");

module.exports = {
    mode: "development",
    devtool: "inline-source-map",

    entry: {
        content: './src/app/content.ts',
        background: './src/app/background.ts',
        popup: './src/ui/popup.tsx',
        ...glob.sync('./src/app/sites/*.ts').reduce(function (obj, el) {
            obj["sites/" + path.parse(el).name] = el;
            return obj
        }, {})
    },

    output: {
        path: path.resolve(__dirname, 'dist/js/'),
        filename: '[name].js'
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },

    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    },
};
