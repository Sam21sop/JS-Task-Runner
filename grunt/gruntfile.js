module.exports = function (grunt) {
  // intialize configuration object
  grunt.initConfig({
    // uglify javascript file
    uglify: {
      my_target: {
        files: {
          "dest/min.js": ["src/input1.js"],
        },
      },
    },

    // configure minify css
    cssmin: {
      target: {
        files: [
          {
            expand: true,
            cwd: "src",
            src: ["*.css", "!*min.css"],
            dest: "dest",
            ext: ".min.css",
          },
        ],
      },
    },

    // Text Replacement
    replace: {
      dist: {
        options: {
          patterns: [
            {
              match: /ninjacoding\.com/g,
              replacement: "codingninjas.com",
            },
          ],
        },
        files: [
          {
            expand: true,
            flatten: true,
            src: ["src/index.html"],
            dest: "build/",
          },
        ],
      },
    },
  });

  // load libraries
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-replace");

  //setting up task
  grunt.registerTask("default", ["uglify", "cssmin", "replace"]);
};