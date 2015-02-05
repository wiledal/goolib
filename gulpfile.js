var gulp          = require("gulp"),
    include       = require("gulp-include");


gulp.task("scripts", function() {
  console.log("Running task: scripts");

  gulp.src("src/goolib.js")
    .pipe(include())
      .on("error", console.log)
    .pipe(gulp.dest("dist"));
});

gulp.task("watch", function() {
  gulp.watch(["src/**/*.js"], ["scripts"]);
});

gulp.task("default", ["scripts"]);
