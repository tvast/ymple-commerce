'use strict';

module.exports = function(grunt){
    grunt.initConfig({
        mocha_istanbul: {
            coverage: {
                src: 'test', // the folder, not the files
                options: {
                    coverageFolder: 'coverage',
                    mask: '**/*.test.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-mocha-istanbul');

    grunt.registerTask('coverage', ['mocha_istanbul:coverage']);
};
