const path = require("path");
module.exports = {
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index.bundle.js"
    },
    devServer: {
        port: 3000,
        open: true,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader","css-loader"],
            }
        ]
    }
}