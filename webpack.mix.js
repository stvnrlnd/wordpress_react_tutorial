let mix = require('laravel-mix');

mix
    .react('src/app.js', 'dist')
    .postCss('src/app.css', 'dist')
    .setPublicPath('dist');
