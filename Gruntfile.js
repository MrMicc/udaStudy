/**
 * Created by luizmiccieli on 01/07/17.
 */
module.exports = function (grunt) {
    grunt.initConfig({

        cssmin:{
            target: {
                files: [{
                    expand: true,
                    cwd: "css",
                    src: ["*.css", "!*.min.css"],
                    dest: "css",
                    ext: ".min.css"
                }]
            }
        }
    });

    //load plugin
    grunt.loadNpmTasks("grunt-contrib-cssmin");

    //create task
    grunt.registerTask("default", ["cssmin"]);
};