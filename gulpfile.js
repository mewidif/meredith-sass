import clean from './tasks/clean.js';
import clear from './tasks/clear.js';
import gulp from 'gulp';
import html from './tasks/html.js';
import images from './tasks/images.js';
import serve from './tasks/serve.js';
import styles from './tasks/styles.js';

// default tasks
gulp.task(
  'default',
  gulp.series(
    clean,
    styles,
    gulp.parallel(images),
    html
  )
);

// run default tasks and then serve locally
gulp.task('dev', gulp.series('default', serve));

// Allow them to be called individually
gulp.task(clean);
gulp.task(clear);
