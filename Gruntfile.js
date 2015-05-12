'use strict'

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-mocha');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-nodemon');

  grunt.initConfig({
    clean: {
      dev: {
        src: 'build/'
      }
    },

    copy: {
      dev: {
        expand: true,
        cwd: 'app/',
        src: ['*.html', 'css/*.css', 'views/**/*.html'],
        dest: 'build/',
        filter: 'isFile'
      }
    },

    browserify: {
      dev: {
        options: {
          transform: ['debowerify'],
          debug: true
        },
        src: ['app/js/**/*.js'],
        dest: 'build/bundle.js'
      },

      simplemocha: {
        server: {
          src: ['test/mocha/api/**/*.js']
        }
      }
    },

    nodemon: {
        dev: {
            script: 'server.js',
            options: {
                args: [],
                nodeArgs: [],
                env: {
                    PORT: '6500',
                    NODE_ENV: 'dev'
                },
                cwd: __dirname,
                ignore: ['node_modules/**'],
                ext: 'js',
                watch: ['server'],
                delay: 1
            }
        },
        prod: {
            script: 'server.js',
            options: {
                args: [],
                nodeArgs: [],
                env: {
                    PORT: '4005',
                    NODE_ENV: 'prod'
                },
                cwd: __dirname,
                ignore: ['node_modules/**'],
                ext: 'js',
                watch: ['server'],
                delay: 1
            }
        }
    },

    // sass: {
    //   dist: {
    //     options: {
    //       style: 'compressed'
    //     },
    //     files: {
    //       'app/css/core.css': 'app/sass/core.scss'
    //     }
    //   }
    // },

    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    },

    express: {
      dev: {
        options: {
          options: 'server.js',
          background: true
        }
      }
    },

    watch: {
      express: {
        files: ['app/js/**/*.js', 'app/index.html', 'app/views/**/*.html', 'server.js', 'models/*.js', 'routes/*.js'],
        tasks: ['buildtest', 'express:dev'],
        options: {
          spawn: false
        }
      }
    },

    concurrent: {
        tasks: ['nodemon:dev', 'watch'],
        options: {
            logConcurrentOutput: true
        }
    }
  });

  grunt.registerTask('build:dev', ['clean:dev', 'browserify:dev', 'copy:dev', 'concurrent']); //include sass later if you want to use it
  grunt.registerTask('buildtest', ['test', 'build:dev']);
  grunt.registerTask('default', ['test', 'watch:express', 'concurrent']);
};