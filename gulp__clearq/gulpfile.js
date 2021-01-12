let preprocessor = 'sass';

const { src, dest, series, watch, parallel } = require('gulp');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const sass = require('gulp-sass');
const scss = require('gulp-scss');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const cleancss = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const del = require('del');
const fileinclude = require('gulp-file-include');

function browsersync() {
    browserSync.init({
        server: { baseDir: 'app/' },
        notify: false,
    })
}

function scripts() {
    return src([
        'node_modules/jquery/dist/jquery.min.js',
        'app/js/script.js',
    ])
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(dest('app/js/'))
        .pipe(browserSync.stream())
}

function styles() {
    return src('app/' + preprocessor + '/style.' + preprocessor + '')
        .pipe(eval(preprocessor)())
        .pipe(concat('style.min.css'))
        .pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true }))
        .pipe(cleancss(({ level: { 1: { specialComments: 0 } }, format: 'beautify' })))
        .pipe(dest('app/css/'))
        .pipe(browserSync.stream())
}

function images() {
    return src('app/img/src/**/*')
        .pipe(newer('app/img/dest/'))
        .pipe(imagemin())
        .pipe(dest('app/img/dest/'))
}

function fonts() {
    return src('app/fonts/**/*')
        .pipe(dest('dist/fonts/'))
}

function cleanimg() {
    return del('app/img/dest/**/*', { force: true })
}
function cleandist() {
    return del('dist/**/*', { force: true })
}

function file() {
    return src('app/kit/index.html')
        .pipe(fileinclude({
            prefix: '@@',
        }))
        .pipe(dest('app/'));
}
function libery() {
    return src('app/libery/**/*')
        .pipe(fileinclude({ prefix: '@@', }))
}

function buildcopy() {
    return src([
        'app/css/**/*min.css',
        'app/js/**/*min.js',
        'app/libery/**/*',
        'app/img/dest/**/*',
        'app/index.html',
        'dist/fonts/**/*',
    ], { base: 'app' })
        .pipe(dest('dist'));
}

function startwatch() {
    watch('app/**/' + preprocessor + '/**/*', styles);
    watch(['app/**/*.js', '!app/**/*.min.js'], scripts);
    watch('app/**/*.html').on('change', browserSync.reload);
    watch('app/img/src/**/*', images);
    watch('app/kit/**/*', file);
    watch('app/libery/**/*', file);
}


exports.browsersync = browsersync;
exports.fonts = fonts;
exports.scripts = scripts;
exports.styles = styles;
exports.images = images;
exports.cleanimg = cleanimg;
exports.file = file;
exports.libery = libery;
exports.build = series(cleandist, styles, scripts, file, libery, images, fonts, buildcopy,);

exports.default = parallel(styles, file, libery, browsersync, startwatch);