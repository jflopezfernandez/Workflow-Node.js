"use strict";

module.exports = (grunt) => {
    grunt.initConfig({
        jshint: {
            files: [
                "Gruntfile.js",
                "src/**/*.js",
                "src/lib/**/*.js"
            ],
            options: {
                "browser": true,
                "browserify": true,
                "devel": true,
                "esversion": 6,
                "evil": false,
                "jasmine": true,
                "jquery": true,
                "mocha": true,
                "module": true,
                "moz": true,
                "nocomma": false,
                "node": true,
                "qunit": true,
                "strict": true,
                "undef": true,
                "unused": true,
                "varstmt": true,
                "worker": true,
                "wsh": true,
                "globals": {
                    "process": true
                }
            }
        },
        watch: {
            files: [
                "src/**/*.js",
                "src/lib/**/*.js"
            ],
            tasks: [ "jshint --config ./linters/.jshint" ]
        }
    });

    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-watch");
};
