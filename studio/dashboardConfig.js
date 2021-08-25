export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6125b0f883c37e38061823df',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-bcd4ab9z',
                  apiId: 'e7e98d87-170e-4936-b0f1-5a982cfc6052'
                },
                {
                  buildHookId: '6125b0f81f8a27429b103fe4',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-s7uhy2cc',
                  apiId: '4cae0e5a-4f07-4b02-93e3-656711adb23c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/herve26/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-s7uhy2cc.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
