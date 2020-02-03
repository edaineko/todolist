const gulp = require('gulp');

require('./tmp');
require('./scripts');
require('./styles');
require('./images');

// Build images, styles and scripts in parallel
gulp.task('build:all', gulp.parallel('styles', 'scripts', 'images:copy', 'styles:fonts'));
gulp.task('build:local:all', gulp.parallel('styles:local', 'scripts:local'));

// Default build task for the project
gulp.task('build', gulp.series('tmp:delete', 'build:all'));
gulp.task('build:local', gulp.series('tmp:delete', 'build:local:all')); // no UglifyJS and no images