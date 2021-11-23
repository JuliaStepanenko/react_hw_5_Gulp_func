'use strict';

const { src, dest, parallel } = require('gulp');
const rename = require('gulp-rename');

function convMin(){
    return src('src/scss/**/*.scss')
        .pipe(rename({suffix: '.min'}))
        .pipe(dest('prod/css'));
}

function fontsOnlyTtf(){
    return src('src/fonts/*.ttf')
        .pipe(dest('prod/fonts/'));
}

function copyOnlyPng(){
    return src('src/img/**/*.png')
        .pipe(dest('prod/img/'));
}

exports.convMin = convMin;
exports.fontsOnlyTtf = fontsOnlyTtf;
exports.copyOnlyPng = copyOnlyPng;
exports.default = parallel(convMin, fontsOnlyTtf, copyOnlyPng);

