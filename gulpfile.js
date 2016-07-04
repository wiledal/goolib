var gulp          = require("gulp"),
    include       = require("gulp-include"),
    babel         = require("gulp-babel");


gulp.task("scripts", function() {
  console.log("Running task: scripts");

  gulp.src("src/goolib.js")
    .pipe(include())
      .on("error", console.log)
    .pipe(babel({
      presets: [
        "es2015"
      ]
    }))
    .pipe(gulp.dest("dist"));
});

gulp.task("watch", function() {
  gulp.watch(["src/**/*.js"], ["scripts"]);
});

gulp.task("default", ["scripts"]);
