const { series, parallel, src, dest, watch } = require('gulp');
const autoprefixer     = require('autoprefixer');
const magicImporter    = require('node-sass-magic-importer');
const plumber          = require('gulp-plumber');
const postcss          = require('gulp-postcss');
const postcssNormalize = require('postcss-normalize');
const sass             = require('gulp-sass');
const sourcemap        = require('gulp-sourcemaps');
const sync             = require('browser-sync').create();

// Styles

const styles = () => {
  return src('source/sass/style.scss')
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass({ importer: magicImporter() }).on('error', sass.logError))
    .pipe(postcss([
      postcssNormalize({
        forceImport: 'normalize.css'
      }),
      autoprefixer()
    ]))
    .pipe(sourcemap.write('.'))
    .pipe(dest('source/css'))
    .pipe(sync.stream());
}

exports.styles = styles;

// Server

const server = (done) => {
  sync.init({
    server: {
      baseDir: 'source'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

exports.server = server;

// Watcher

const watcher = () => {
  watch('source/sass/**/*.scss', series('styles'));
  watch('source/*.html').on('change', sync.reload);
}

exports.default = series(
  styles, server, watcher
);
