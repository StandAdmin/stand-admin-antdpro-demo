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
            // hideInBreadcrumb: true,
            // order: 100,
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
            path: 'multi-ns',
            name: '多实例',
            component: 'Demos/MultiNs',
            icon: 'branches',
            disableAutoScrollToTop: true,
            // hideInBreadcrumb: true,
            // order: 100,
          },
          {
            path: 'select',
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
            path: 'weird-query',
            name: '异形查询',
            component: 'Demos/WeirdQuery',
            icon: 'branches',
          },
          {
            path: 'record-copy',
            name: '记录复制',
            component: 'Demos/RecordCopy',
            icon: 'branches',
          },
          {
            path: 'multi-edit',
            name: '编辑分拆',
            component: 'Demos/MultiEdit',
            icon: 'branches',
          },
          {
            path: 'row-expand',
            name: '关联展开',
            component: 'Demos/RowExpand',
            icon: 'branches',
          },
          {
            path: 'new-with-initvals',
            name: '新建初始值',
            component: 'Demos/NewWithInitvals',
            icon: 'branches',
          },
          {
            path: 'data-convert-newedit',
            name: '数据转换-新建/编辑',
            component: 'Demos/DataConvertNewEdit',
            icon: 'branches',
          },
          {
            path: 'data-convert-search',
            name: '数据转换-查询',
            component: 'Demos/DataConvertSearch',
            icon: 'branches',
          },
          {
            path: 'row-action',
            name: '行操作',
            component: 'Demos/RowAction',
            icon: 'branches',
          },
          {
            path: 'big-context',
            name: 'ContextAPI',
            component: 'Demos/ContextAPI',
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
