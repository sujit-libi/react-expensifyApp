const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

//console.log(path.join(__dirname,'public'));

module.exports = (env) => {
    const CSSExtract = new ExtractTextPlugin('styles.css'); 
    const isProduction = env === 'production';
    return {
        entry:'./src/app.js',
        output: {
            path: path.join(__dirname,'public','dist'),
            filename: 'bundle.js'
        },
        module: {
            rules:[{
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test:/\.s?css$/,
                use: CSSExtract.extract({
                    use:[{
                        loader:'css-loader',
                        options:{
                            sourceMap:true
                        }
                    },{
                        loader:'sass-loader',
                        options:{
                            sourceMap: true
                        }
                    }]
                })
            }]
        },
        plugins: [
            CSSExtract
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            publicPath:'/dist/',
            contentBase: path.join(__dirname,'public'),
            historyApiFallback: true
        }
    };
}

