import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '7ba'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '24c'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'aca'),
            routes: [
              {
                path: '/docs/category/插件--plugins',
                component: ComponentCreator('/docs/category/插件--plugins', '87d'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/category/功能',
                component: ComponentCreator('/docs/category/功能', '10c'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/category/sdk开发框架',
                component: ComponentCreator('/docs/category/sdk开发框架', '3bf'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '058'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/mhdf-tools/',
                component: ComponentCreator('/docs/plugins/mhdf-tools/', 'ae9'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/mhdf-tools/api',
                component: ComponentCreator('/docs/plugins/mhdf-tools/api', '94c'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/mhdf-tools/commands',
                component: ComponentCreator('/docs/plugins/mhdf-tools/commands', '54f'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/mhdf-tools/configuration',
                component: ComponentCreator('/docs/plugins/mhdf-tools/configuration', '41b'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/mhdf-tools/functions/conditional',
                component: ComponentCreator('/docs/plugins/mhdf-tools/functions/conditional', 'c46'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/mhdf-tools/functions/menu',
                component: ComponentCreator('/docs/plugins/mhdf-tools/functions/menu', '4f8'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/mhdf-tools/functions/operative',
                component: ComponentCreator('/docs/plugins/mhdf-tools/functions/operative', '460'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/mhdf-tools/installation',
                component: ComponentCreator('/docs/plugins/mhdf-tools/installation', '867'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/mhdf-tools/permissions',
                component: ComponentCreator('/docs/plugins/mhdf-tools/permissions', '0c3'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/mhdf-tools/problems',
                component: ComponentCreator('/docs/plugins/mhdf-tools/problems', 'a52'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/sdk/mhdf-bot',
                component: ComponentCreator('/docs/sdk/mhdf-bot', '6d9'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/sdk/mhdf-condition',
                component: ComponentCreator('/docs/sdk/mhdf-condition', 'f52'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/sdk/mhdf-database',
                component: ComponentCreator('/docs/sdk/mhdf-database', '540'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/sdk/mhdf-httpframework',
                component: ComponentCreator('/docs/sdk/mhdf-httpframework', '7e6'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/sdk/mhdf-langutil',
                component: ComponentCreator('/docs/sdk/mhdf-langutil', '895'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/sdk/mhdf-library',
                component: ComponentCreator('/docs/sdk/mhdf-library', '9b0'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/sdk/mhdf-reflection',
                component: ComponentCreator('/docs/sdk/mhdf-reflection', '556'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/sdk/mhdf-scheduler',
                component: ComponentCreator('/docs/sdk/mhdf-scheduler', '386'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/sdk/mhdf-verify',
                component: ComponentCreator('/docs/sdk/mhdf-verify', 'a2e'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/sdk/mhdf-yaml',
                component: ComponentCreator('/docs/sdk/mhdf-yaml', '2b0'),
                exact: true,
                sidebar: "docsSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
