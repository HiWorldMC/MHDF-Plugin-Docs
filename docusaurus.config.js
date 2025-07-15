// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MHDF-Plugin-Docs | 梦之插件文档',
  tagline: '✨一款轻量化便携的Bukkit基础插件✨',
  favicon: 'img/mhdf-plugin-logo-no-background.png',

  // Set the production url of your site here
  url: 'https://docs.chengzhimeow.cn/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'HiWorldMC', // Usually your GitHub org/user name.
  projectName: 'MHDF-Plugin-Docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/HiWorldMC/MHDF-Plugin-Docs/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/mhdf-plugin-logo-no-background.png',
      navbar: {
        title: 'MHDF-Plugin | 梦之插件',
        logo: {
          alt: 'MHDF-Plugin | 梦之插件',
          src: 'img/mhdf-plugin-logo-no-background.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: '文档',
          },
          {
            href: 'https://github.com/ChengZhiMeow/MHDF-Tools',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '帮助中心',
            items: [
              {
                label: '文档',
                to: '/docs/intro',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/ChengZhiMeow/MHDF-Tools',
              }
            ],
          },
          {
            title: '交流平台',
            items: [
              {
                label: 'QQ群',
                href: 'https://qm.qq.com/q/',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/',
              }
            ],
          },
          {
            title: '相关链接',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/ChengZhiMeow/MHDF-Tools',
              },
              {
                label: '创世极客工作室',
                href: 'https://hiworldmc.com/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} MHDF-Plugin-Docs. All rights reserved. <br>Powered by <a href="https://hitech0926.com/">HiTech0926</a> with <a href="https://hiworldmc.com/">HiWorldMC</a>.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;