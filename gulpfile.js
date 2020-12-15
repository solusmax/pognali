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
    injectChanges: false,
    ghostMode: {
      clicks: false,
      forms: false,
      scroll: false
    }
  });
  done();
}

exports.server = server;

// Reload

const reload = done => {
  sync.reload();
  done();
};

// Watcher

const watcher = () => {
  watch('source/sass/**/*.scss', series(styles, reload));
  watch('source/*.html', series(reload));
  watch('source/js/**/*.js', series(reload))
}

exports.default = series(
  styles, server, watcher
);
