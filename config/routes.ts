﻿export default [
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
            component: 'Demos/BaseDemo',
            icon: 'branches',
          },
          {
            path: 'base-ts',
            name: '标准CRUD(TS版)',
            component: 'Demos/BaseDemoTs',
            icon: 'branches',
            // hideInBreadcrumb: true,
            hideInMenu: true,
          },
          {
            path: 'select-ctrl',
            name: '选取控件',
            icon: 'branches',
            component: 'Demos/SelectCtrl',
          },
          {
            path: 'big-context',
            name: 'ContextAPI',
            component: 'Demos/ContextAPI',
            icon: 'branches',
          },
          {
            path: 'row-action',
            name: '行操作',
            component: 'Demos/RowAction',
            icon: 'branches',
          },

          {
            path: 'batch-act',
            name: '批量操作',
            component: 'Demos/BatchAct',
            icon: 'branches',
          },
          {
            path: 'weird-list',
            name: '异形列表',
            component: 'Demos/WeirdList',
            icon: 'branches',
          },
          {
            path: 'charts',
            name: '图表',
            component: 'Demos/Charts',
            icon: 'branches',
          },
          {
            path: 'weird-query',
            name: '异形查询',
            component: 'Demos/WeirdQuery',
            icon: 'branches',
          },
          {
            path: 'data-convert-search',
            name: '查询参数转换',
            component: 'Demos/DataConvertSearch',
            icon: 'branches',
          },
          {
            path: 'row-expand',
            name: '关联展开',
            component: 'Demos/RowExpand',
            icon: 'branches',
          },
          {
            path: 'column-sort',
            name: '列排序',
            component: 'Demos/ColumnSort',
            icon: 'branches',
          },
          {
            path: 'column-filter',
            name: '列筛选',
            component: 'Demos/ColumnFilter',
            icon: 'branches',
          },
          {
            path: 'data-convert-newedit',
            name: '新建/编辑数据转换',
            component: 'Demos/DataConvertNewEdit',
            icon: 'branches',
          },
          {
            path: 'new-with-initvals',
            name: '新建初始值',
            component: 'Demos/NewWithInitvals',
            icon: 'branches',
          },
          {
            path: 'multi-edit',
            name: '多编辑弹窗',
            component: 'Demos/MultiEdit',
            icon: 'branches',
          },
          {
            path: 'record-copy',
            name: '记录复制',
            component: 'Demos/RecordCopy',
            icon: 'branches',
          },
          {
            path: 'multi-ns',
            name: '数据空间隔离',
            component: 'Demos/MultiNs',
            icon: 'branches',
            disableAutoScrollToTop: true,
          },
          {
            path: 'same-ns',
            name: '同数据空间',
            component: 'Demos/SameNs',
            icon: 'branches',
            disableAutoScrollToTop: true,
            hideInMenu: true,
          },
          {
            path: 'protable',
            name: 'ProTable',
            component: 'Demos/ProTable',
            icon: 'branches',
          },
          {
            path: 'record-info',
            name: '记录详情(RecordInfo)',
            component: 'Demos/RecordInfo',
            icon: 'branches',
          },
          {
            path: 'record-details',
            name: '记录详情(searchRecords)',
            component: 'Demos/RecordDetails',
            icon: 'branches',
          },
          {
            path: 'overide-hocparams',
            name: '覆盖Hoc参数',
            component: 'Demos/OverideHocParams',
            icon: 'branches',
          },
        ],
      },
      {
        component: '404',
      },
    ],
  },
];
