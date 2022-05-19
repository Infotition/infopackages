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
      title: 'NFOPACKAGES',
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
              label: 'Packages',
              to: '/category/packages',
            },
            {
              label: 'Components',
              to: '/category/components',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/NpxrDGYDwV',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/infotition',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Medium',
              href: 'https://medium.com/@infotition',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Infotition, Inc. Built with Docusaurus.`,
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
