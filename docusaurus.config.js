module.exports = {
  title: 'Agri Supply Chain Sri Lanka',
  tagline: 'Deep analysis on Sri Lankan agri supply chain',
  url: 'https://copper-plus.github.io/Agri-supply-chain-SriLanka/',
  baseUrl: '/Agri-supply-chain-SriLanka/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'copper-plus', // Usually your GitHub org/user name.
  projectName: 'Agri-supply-chain-SriLanka', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '| Agri Supply Chain Sri Lanka',
      logo: {
        alt: 'copper-plus',
        src: 'img/logo.svg',
      },
      items: [
        {to: 'blog', label: 'Blog', position: 'left',activeBasePath:'blog'},
        {
          href: 'https://copper-plus.com/',
          //activeBasePath: 'docs',
          label: 'Copper-plus project',
          position: 'left',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Facebook',
              href: 'https://facebook.com/copper-plus.srilanka',
            },
            {
              label: 'Twitter',
              href: '#',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/copper-plus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Legator Solutions, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
