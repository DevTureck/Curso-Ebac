/* CHEGANDO EM CASA INSTALAR OS PLUGINS NA DEPENDÊNCIA LOCAL:
    GRUNT-CONTRIB-WATCH
    GRUNT-REPLACE
    GRUNT-CONTRIB-HTMLMIN
    GRUNT-CONTRIB-CLEAN
*/

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'dev/styles/main.css': 'src/styles/main.less'
                }
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    'dist/styles/main.min.css': 'src/styles/main.less'
                }
            }
        },
        watch:{
            less: {
                files:['src/styles/**/*.less'],
                tasks:['less:development']
            }
        },
        replace: {
            dev: {
                options: {
                    patterns: [
                        {
                            match: 'ENDEREÇO_DO_CSS',
                            replacement: './styles/main.css'
                        }
                    ]
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-replace');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['less:production']);
}