const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: {
      import: './src/main.js',
      dependOn: ['data', 'dom', 'content', 'todo-form', 'menu', 'layout'],
    },

    data: {
      import: './src/data.js',
    },

    nav: {
      import: './src/nav.js',
    },

    menu: {
      import: './src/menu.js',
      dependOn: ['data', 'dom', 'content', 'local-storage'],
    },

    dom: {
      import: './src/dom.js',
    },

    "todo-form": {
      import: './src/todo-form.js',
      dependOn: ['data', 'dom', 'local-storage'],
    },

    content: {
      import: './src/content.js',
      dependOn: ['dom', 'data', 'todo-form', 'layout'],
    },

    "local-storage": {
      import: './src/local-storage.js',
    },

    layout: {
      import: './src/layout.js',
    },
    
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Project TodoList',
      template: './src/todolist.html',
    }),
  ],
  
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      
    ],
  },

  output: {
    filename: '[name].myfile-[hash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  
}