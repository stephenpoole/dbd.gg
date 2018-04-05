const gulp = require('gulp'),
    flatten = require('gulp-flatten'),
    rename = require('gulp-rename'),
    source =
        'C:/Program Files (x86)/Steam/steamapps/common/Dead by Daylight/DeadByDaylight/Content/UI/Icons',
    dest = './images';

gulp.task('default', [
    'portraits',
    'favors',
    'helpLoading',
    'addons',
    'items',
    'perks',
    'powers',
    'statusEffects'
]);

gulp.task('portraits', () => {
    gulp
        .src(source + '/CharPortraits/**/*')
        .pipe(flatten())
        .pipe(
            rename(path => {
                path.basename = path.basename.replace(
                    '_charSelect_portrait',
                    ''
                );
            })
        )
        .pipe(gulp.dest(dest + '/portrait'));
});

gulp.task('favors', () => {
    gulp
        .src(source + '/Favors/**/*')
        .pipe(flatten())
        .pipe(
            rename(path => {
                path.basename = path.basename.replace('iconFavors_', '');
            })
        )
        .pipe(gulp.dest(dest + '/offerings'));
});

gulp.task('helpLoading', () => {
    gulp
        .src(source + '/HelpLoading/**/*')
        .pipe(flatten())
        .pipe(
            rename(path => {
                path.basename = path.basename.replace('iconHelpLoading_', '');
            })
        )
        .pipe(gulp.dest(dest + '/help'));
});

gulp.task('addons', () => {
    gulp
        .src(source + '/ItemAddons/**/*')
        .pipe(flatten())
        .pipe(
            rename(path => {
                path.basename = path.basename.replace('iconAddon_', '');
            })
        )
        .pipe(gulp.dest(dest + '/addons'));
});

gulp.task('items', () => {
    gulp
        .src(source + '/Items/**/*')
        .pipe(flatten())
        .pipe(
            rename(path => {
                path.basename = path.basename.replace('iconItems_', '');
            })
        )
        .pipe(gulp.dest(dest + '/items'));
});

gulp.task('perks', () => {
    gulp
        .src(source + '/Perks/**/*')
        .pipe(flatten())
        .pipe(
            rename(path => {
                path.basename = path.basename.replace('iconPerks_', '');
            })
        )
        .pipe(gulp.dest(dest + '/perks'));
});

gulp.task('powers', () => {
    gulp
        .src(source + '/Powers/**/*')
        .pipe(flatten())
        .pipe(
            rename(path => {
                path.basename = path.basename.replace('iconPowers_', '');
            })
        )
        .pipe(gulp.dest(dest + '/powers'));
});

gulp.task('statusEffects', () => {
    gulp
        .src(source + '/StatusEffects/**/*')
        .pipe(flatten())
        .pipe(
            rename(path => {
                path.basename = path.basename.replace('iconStatusEffects_', '');
            })
        )
        .pipe(gulp.dest(dest + '/status'));
});
