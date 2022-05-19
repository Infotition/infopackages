const config = {
  title: 'Infopackages',
  tagline: "Collection of infotition's packages.",
  url: 'https://infotition.github.io',
  baseUrl: '/infopackages/',
  favicon: '/favicon.ico',
  organizationName: 'Infotition',
  projectName: 'infopackages',
  trailingSlash: false,

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: ['docusaurus-plugin-sass'],

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/Infotition/infopackages',
        },
        theme: {
          customCss: require.resolve('./static/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Infopackages',
      hideOnScroll: true,
      logo: {
        alt: 'Infopackages',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Guides',
        },
        {
          href: 'https://github.com/facebook/docusaurus',
          className: 'navbar-item-github',
          position: 'right',
        },
        {
          href: 'https://discord.gg/NpxrDGYDwV',
          className: 'navbar-item-discord',
          position: 'right',
        },
        {
          href: 'https://twitter.com/infotition',
          className: 'navbar-item-twitter',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      defaultLanguage: 'js',
      plugins: ['line-numbers', 'show-language'],
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
  },
};
module.exports = config;
