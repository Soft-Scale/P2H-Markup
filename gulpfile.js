let preprocessor = 'sass';
const { src, dest, parallel, series, watch } = require('gulp');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const sass = require('gulp-sass');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const cleancss = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const del = require('del');
     
function browsersync() {
    browserSync.init({
        server: { baseDir: './' },
        notify: false,
        online: true
    })
}

function html() {
    return src([
        './index.html',
    ])
    .pipe(dest('dist/'))
}

function scripts() {
    return src([

        'src/js/index.js',
        ])
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(dest('dist/js/'))
    .pipe(browserSync.stream())
}
     
function styles() {
    return src('src/scss/**/*.scss')
    .pipe(eval(preprocessor)())
    .pipe(concat('app.min.css'))
    .pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true }))
    .pipe(cleancss( { level: { 1: { specialComments: 0 } }/* , format: 'beautify' */ } ))
    .pipe(dest('dist/css/'))
    .pipe(browserSync.stream())
}
     
function images() {
    return src('src/img/**/*')
    .pipe(newer('src/images/'))
    .pipe(imagemin())
    .pipe(dest('dist/images/'))
}
     
function cleanimg() {
    return del('dist/images/**/*', { force: true })
}
     
function buildcopy() {
    return src([
        'src/css/**/*.min.css',
        'src/js/**/*.min.js',
        'src/images/**/*',
        './index.html',
        ], { base: 'dist' })
    .pipe(dest('dist'))
}

function cleandist() {
    return del('dist/**/*', { force: true })
}
     
function startwatch() {
    watch(['src/**/*.js', '!src/**/*.min.js'], scripts);
    watch('src/scss/**/*.scss', styles);
    watch('./*.html').on('change', browserSync.reload);
    watch('src/images/**/*', images);
}

exports.browsersync = browsersync;
exports.html = html;
exports.scripts = scripts;
exports.styles = styles;
exports.images = images;
exports.cleanimg = cleanimg;

exports.build = series(cleandist, html, styles, scripts, images, buildcopy);
exports.default = parallel(styles, scripts, browsersync, startwatch);