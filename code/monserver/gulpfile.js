// const gulp=require("gulp");
import gulp from "gulp";
import ts from "gulp-typescript";
import sourcemaps from "gulp-sourcemaps";
import uglify from "gulp-uglify";
//import livereload from "gulp-livereload";


// "sourceMap": false si je veux compiler pour la production
// en dev => sourcemaps sont necessaires pour debugger
const tsProject = ts.createProject('tsconfig.web.json');


export function jsStaticFiles(cb) {
    // Prendre les fichiers js dans src
    gulp.src("./src/**/*.js")
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("./wwwroot"))
    //.pipe(livereload());
    cb();
}

// exports.copyHtml=function(cb){
export function copyStaticFiles(cb) {
    // Prendre les fichiers html dans src
    gulp.src("./src/**/*.{html,css,jpeg}")
        // pipe => action sur les fichiers => enregistrer dans le dossier wwwroot
        .pipe(gulp.dest("./wwwroot"))
    //.pipe(livereload());
    cb();
}

// Lecture et compilation des fichiers ts
export function compileTs(cb) {
    gulp.src("./src/**/*.ts")
        // Lecture du fichier avant compilation => pour repérer les points de debug
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .pipe(uglify())
        // Après copilation => écriture des points de mapping
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("./wwwroot"))
    //.pipe(livereload());
    cb();
}

export function watch(cb) {
    //livereload.listen({port:5000, host:"http://localhost:4200",start:true});
    gulp.parallel(["copyStaticFiles", "compileTs","jsStaticFiles"])();
    // Tache de surveillance
    // modification de fichier => en parralelle => copyStaticFiles","compileTs
    gulp.watch("./src/**/*.*", gulp.parallel(["copyStaticFiles", "compileTs","jsStaticFiles"]))//.on('change', livereload.changed);
}

