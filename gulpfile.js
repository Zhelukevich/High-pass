const { src, dest, series, watch } = require('gulp');
const concat = require('gulp-concat');
const htmlMin = require('gulp-htmlmin');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const image = require('gulp-imagemin');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify-es').default;
const notify = require('gulp-notify');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const browserSync = require('browser-sync').create();

// clean
const clean = () => {
  return del(['dist']);
}

// resources
const resources = () => {
  return src('src/resources/**')
    .pipe(dest('dist/js/resources'));
}

// css
const styles = () => {
  return src('src/styles/**/*.css')
    .pipe(sourcemaps.init())
    .pipe(autoprefixer({
      cascade: false,
    }))
    .pipe(sourcemaps.write())
    .pipe(dest('dist/style'))
    .pipe(browserSync.stream());
}

// CSS-prod
const stylesProd = () => {
  return src('src/styles/**/*.css')
    .pipe(autoprefixer({
      cascade: false,
    }))
    .pipe(cleanCSS({
      level: 2,
    }))
    .pipe(dest('dist/style'))
    .pipe(browserSync.stream());
}

// html
const html = () => {
  return src('src/**/*.html')
    .pipe(dest('dist'))
    .pipe(browserSync.stream());
}

// HTML-prod
const htmlMinify = () => {
  return src('src/**/*.html')
    .pipe(htmlMin({
      collapseWhitespace: true,
    }))
    .pipe(dest('dist'))
    .pipe(browserSync.stream());
}

// font
const font = () => {
  return src([
    'src/font/**/*.woff',
    'src/font/**/*.woff2',
  ])
    .pipe(dest('dist/font'))
}

// SCRIPTS
const scripts = () => {
  return src('src/js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('app.js'))
    .pipe(sourcemaps.write())
    .pipe(dest('dist/js'))
    .pipe(browserSync.stream());
}

// SCRIPTS-prod
const scriptsUglify = () => {
  return src('src/js/**/*.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(concat('app.js'))
    .pipe(uglify({
      toplevel: true,
    }).on('error', notify.onError()))
    .pipe(dest('dist/js'))
    .pipe(browserSync.stream());
}


// WATCH
const watchFiles = () => {
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  });
}

// IMG
const images = () => {
  return src([
    'src/images/**/*.jpg',
    'src/images/**/*.png',
    'src/images/**/*.jpeg',
    'src/images/**/*.svg',
  ])
    .pipe(image())
    .pipe(dest('dist/images'));
}

watch('src/**/*.html', html);
watch('src/styles/**/*.css', styles);
watch('src/js/*.js', scripts);
watch('src/resources/**', resources);
watch('src/images/**', images);

// exports.styles = styles;
// exports.html = html;
exports.default = series(clean, resources, font, scripts, html, styles, images, watchFiles);
exports.prod = series(clean, resources, font, scriptsUglify, htmlMinify, stylesProd, images, watchFiles);