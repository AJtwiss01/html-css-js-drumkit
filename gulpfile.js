// Require our dependencies.
var browserSync = require("browser-sync").create();
var gulp = require("gulp");

var siteName = "drums"; // set your siteName here
var userName = "ajtwiss"; // set your macOS userName here

// Set assets paths.
var paths = {
  php: ["*.php", "**/*.php"],
  html: ["*.html", "**/*.html"],
  scripts: ["js/*.js"],
  styles: ["*.css", "css/*.css"],
};

/**
 * Reload browser after PHP & JS file changes and inject CSS changes.
 *
 * https://browsersync.io/docs/gulp
 */
gulp.task("default", function () {
  browserSync.init({
    proxy: "http://" + siteName + ".test",
    host: siteName + ".test",
    open: "external",
    port: 8000,
    // https: {
    //   key:
    //     "/Users/" +
    //     userName +
    //     "/.config/valet/Certificates/" +
    //     siteName +
    //     ".test.key",
    //   cert:
    //     "/Users/" +
    //     userName +
    //     "/.config/valet/Certificates/" +
    //     siteName +
    //     ".test.crt",
    // },
  });

  gulp.watch(paths.php).on("change", browserSync.reload);
  gulp.watch(paths.scripts).on("change", browserSync.reload);

  gulp.watch(paths.styles, function () {
    gulp.src(paths.styles).pipe(browserSync.stream());
  });
});
