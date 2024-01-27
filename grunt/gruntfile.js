module.exports = function(grunt) {

    // intialize configuration object
    grunt.initConfig({

        // uglify javascript file
        uglify:{
            my_target:{
                files: {
                    'dest/min.js': ['src/input1.js']
                }
            }
        },

        // configure minify css
        cssmin:{
            target:{
                files:[
                    {
                        expand: true,
                        cwd: "src", 
                        src: ["*.css", "!*min.css"],
                        dest: "dest",
                        ext: ".min.css"
                    }
                ]
            }
        }
    });

    // load libraries
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    //setting up task
    grunt.registerTask('default', ['uglify', 'cssmin']);
};