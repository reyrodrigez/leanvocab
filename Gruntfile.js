module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['public/**/*.js', '!public/js/vendors/*.js'],
      options: {
        // options here to override JSHint defaults
		globals: {
				jQuery: true,
				console: true,
				module: true,
				document: true
        }
      }
    },
    compass: {
		dist: {
			sassDir: 'scss',
			cssDir: 'public/css'
		}
    },
    watch: {
		js: {
			files: ['<%= jshint.files %>'],
			tasks: ['jshint']
		},
		css: {
			files: '**/*.scss',
			tasks: ['compass']
		}
      
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');

  grunt.registerTask('default', ['jshint', 'compass']);

};