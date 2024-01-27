import gulp from "gulp";
import imagemin from "gulp-imagemin";
import concate from "gulp-concat";

// define task to compress image
gulp.task("images-min", () => {
  // define source and destination directory
  const srcDir = "src/images";
  const desDir = "dest/images";
  return gulp
    .src("src/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("dest/images"));
});

// define task to concates files
gulp.task("concatenate-files", () => {
  // define source and destination directory
  const srcDir = "src/files";
  const desDir = "dest/files";
  const srcFiles = [
    `${srcDir}/**/*.js`,
    `${srcDir}/**/*.json`,
    `${srcDir}/**/*.css`,
    `${srcDir}/**/*.html`,
  ];

  // Specify outut file name
  const outputFileName = "all.js";

  // concate the source file
  return gulp
    .src(srcFiles)
    .pipe(concate(outputFileName))
    .pipe(gulp.dest(desDir));
});

gulp.task("default", gulp.series(["images-min", "concatenate-files"]));
