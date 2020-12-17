const { series, parallel, src, dest, watch } = require('gulp');
const autoprefixer     = require('autoprefixer');
const concat           = require('gulp-concat');
const cssnano          = require('cssnano');
const del              = require('del');
const gulpIf           = require('gulp-if');
const htmlmin          = require('gulp-htmlmin');
const imagemin         = require('gulp-imagemin');
const include          = require('posthtml-include');
const magicImporter    = require('node-sass-magic-importer');
const newer            = require('gulp-newer');
const plumber          = require('gulp-plumber');
const postcss          = require('gulp-postcss');
const postcssNormalize = require('postcss-normalize');
const posthtml         = require('gulp-posthtml');
const rename           = require('gulp-rename');
const sass             = require('gulp-sass');
const svgstore         = require('gulp-svgstore');
const sync             = require('browser-sync').create();
const terser           = require('gulp-terser');
const webp             = require('gulp-webp');

let production = false;

// Функция включения режима продакшена

const productionOn = done => {
  production = true;
  done();
};

// Очиска папки build

const cleanBuild = () => {
  return del('./build', {
    force: true
  });
};

// Reload

const reload = done => {
  sync.reload();
  done();
};

// HTML

const buildHtml = () => {
  return src('./source/*.html')
    .pipe(posthtml([
      include()
    ]))
    .pipe(htmlmin({
      caseSensitive: true,
      collapseWhitespace: true,
      conservativeCollapse: true,
      removeComments: true
    }))
    .pipe(dest('./build'));
};

// CSS

const buildCss = () => {
  return src('source/sass/style.scss', { sourcemaps: true })
    .pipe(gulpIf(!production, plumber()))
    .pipe(sass({ importer: magicImporter() }).on('error', sass.logError))
    .pipe(postcss([
      postcssNormalize({
        forceImport: 'normalize.css'
      }),
      autoprefixer(),
      cssnano()
    ]))
    .pipe(rename('style.min.css'))
    .pipe(dest('./build/css', { sourcemaps: '.' }))
};

// JS

const buildJs = () => {
  return src(['./source/js/plugins/**/*.js', './source/js/app/**/*.js'], { sourcemaps: true })
    .pipe(gulpIf(!production, plumber()))
    .pipe(concat('script.js'))
    .pipe(terser({
      format: {
        comments: false
      }}))
    .pipe(rename('script.min.js'))
    .pipe(dest('./build/js', { sourcemaps: '.' }));
};

// Изображения

const buildImg = () => {
  return src(['./source/img/**/*.{jpg,jpeg,png,svg}', '!./source/img/**/*icon*.svg'], { base: './source/img' })
    .pipe(gulpIf(!production, plumber()))
    .pipe(gulpIf(!production, newer('./build/img')))
    .pipe(gulpIf(production, imagemin([
      imagemin.mozjpeg({
        quality: 90,
        progressive: true
      }),
      imagemin.optipng({
        optimizationLevel: 3
      }),
      imagemin.svgo()
    ])))
    .pipe(dest('./build/img'));
};

// WebP

const buildWebp = () => {
  return src('./source/img/**/*.{jpg,jpeg,png}', { base: './source/img' })
    .pipe(gulpIf(!production, plumber()))
    .pipe(gulpIf(!production, newer('./build/img')))
    .pipe(webp({
      quality: 95
    }))
    .pipe(dest('./build/img'));
};

// SVG-спрайт

const buildSvgSprite = () => {
  return src('./source/img/**/*icon*.svg')
    .pipe(imagemin([
      imagemin.svgo({
        plugins: [{
          cleanupIDs: true
        }]
      })
    ]))
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename('sprite.svg'))
    .pipe(dest('./build/img'))
};

// Шрифты

const buildFonts = () => {
  return src('./source/fonts/**/*.{woff2,woff}')
    .pipe(dest('./build/fonts'));
};

// Сервер

const startServer = () => {
  sync.init({
    server: {
      baseDir: './build'
    },
    cors: true,
    notify: false,
    injectChanges: false,
    ghostMode: {
      clicks: false,
      forms: false,
      scroll: false
    }
  });

  watch(['./source/*.html', './source/img/**/*icon*.svg'], series(buildSvgSprite, buildHtml, reload));
  watch('./source/sass/**/*.scss', series(buildCss, reload));
  watch('./source/js/**/*.js', series(buildJs, reload))
  watch('./source/img/**/*.{jpg,jpeg,png}', series(buildImg, buildWebp, reload));
  watch(['./source/img/**/*.{svg}', '!./source/img/**/*icon*.svg'], series(buildImg, reload));
  watch('./source/fonts/**/*.{woff2,woff}', series(buildFonts, reload));
};

// Задачи

const build = series(cleanBuild, parallel(series(buildSvgSprite, buildHtml), buildCss, buildJs, buildImg, buildWebp, buildFonts));
const buildProd = series(productionOn, build);
const dev = series(build, startServer);

exports.default = dev;
exports.build = buildProd;
