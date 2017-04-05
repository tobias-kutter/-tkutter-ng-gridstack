const gulp = require('gulp');
const plugins = require('gulp-load-plugins')({ lazy: true });

const rimraf = require('rimraf');
const logger = {
    log: plugins.util.log,
    cLog: (message, color) => {
        color = color || '';
        color = color.trim().toLowerCase();
        var value = message;
        if (color === 'green') {
            value = plugins.util.colors.green(message);
        }
        if (color === 'red') {
            value = plugins.util.colors.red(message);
        }
        if (color === 'yellow') {
            value = plugins.util.colors.yellow(message);
        }
        if (color === 'magenta') {
            value = plugins.util.colors.magenta(message);
        }
        plugins.util.log(value);
    }
}

gulp.task('sayHello', () => {
    logger.cLog('Hello World!', 'yellow');
    logger.log('stuff happened', 'Really it did', plugins.util.colors.green('123'));
});

gulp.task('default', plugins.sequence('sayHello'));