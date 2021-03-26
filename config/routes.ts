export default [
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      {
        path: '/',
        redirect: '/admin-demo',
        exact: true,
      },
      {
        path: 'admin-demo',
        name: '示例',
        routes: [
          {
            path: '/admin-demo/',
            redirect: '/admin-demo/base',
            exact: true,
          },
          {
            path: 'base',
            name: '标准CRUD',
            component: 'BaseDemo',
            icon: 'branches',
            // hideInBreadcrumb: true,
            // order: 100,
          },
          {
            path: 'select-ctrl',
            name: '选取控件',
            icon: 'branches',
            component: 'SelectCtrl',
          },
          {
            path: 'multi-ns',
            name: '多实例',
            component: 'MultiNs',
            icon: 'branches',
            disableAutoScrollToTop: true,
            // hideInBreadcrumb: true,
            // order: 100,
          },
          {
            path: 'select',
            name: '批量操作',
            component: 'BatchAct',
            icon: 'branches',
          },
          {
            path: 'weird-list',
            name: '异形列表',
            component: 'WeirdList',
            icon: 'branches',
          },
          {
            path: 'weird-query',
            name: '异形查询',
            component: 'WeirdQuery',
            icon: 'branches',
          },
          {
            path: 'record-copy',
            name: '记录复制',
            component: 'RecordCopy',
            icon: 'branches',
          },
          {
            path: 'multi-edit',
            name: '多编辑',
            component: 'MultiEdit',
            icon: 'branches',
          },
          {
            path: 'row-expand',
            name: '关联展开',
            component: 'RowExpand',
            icon: 'branches',
          },
          {
            path: 'new-with-initvals',
            name: '新建初始值',
            component: 'NewWithInitvals',
            icon: 'branches',
          },
          {
            path: 'data-convert-newedit',
            name: '数据转换-新建/编辑',
            component: 'DataConvertNewEdit',
            icon: 'branches',
          },
          {
            path: 'data-convert-search',
            name: '数据转换-查询',
            component: 'DataConvertSearch',
            icon: 'branches',
          },
        ],
      },
    ],
  },
  {
    component: './404',
  },
];
