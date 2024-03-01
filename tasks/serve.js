import browserSync from 'browser-sync';
import gulp from 'gulp';

// BrowserSync Reload
function browserSyncReload(done) {
  browserSync.reload();
  done();
}

function serve() {
  // eslint-disable-next-line no-unused-expressions
  browserSync({
    notify: false,
    server: 'docs',
    port: 3000
  }),
  gulp.watch(['src/**/*.html'], gulp.series('html', browserSyncReload));
  gulp.watch(
    ['node_modules/bootstrap/scss/bootstrap.scss','src/scss/**/*.*css'],
    gulp.series('styles', browserSyncReload)
    );
}

gulp.task('serve', serve);

export default serve;
