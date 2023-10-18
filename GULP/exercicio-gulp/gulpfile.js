const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function funcaoPadrao(callback){
    setTimeout(function() {
        console.log("Executando via Gulp");
        callback();
    }, 2000)
}

function compilaSass() {
    return gulp.src('./source/styles/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./build/styles'));
}

exports.default = gulp.parallel(funcaoPadrao)
exports.sass = compilaSass;