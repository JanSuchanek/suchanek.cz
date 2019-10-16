// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Suchanek.cz',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BlogPost',
        path: './content/blog/**/*.md',
        route: '/blog/:slug',
        resolveAbsolutePaths: true,
      }
    }    
  ],
  templates: {
    BlogPost: '/blog/:year/:month/:day/:slug'
  }

}
