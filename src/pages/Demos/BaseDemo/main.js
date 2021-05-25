import React from 'react';
import {
  defineContextHocParams,
  StandSelectCtrlHoc,
  StandContextHoc,
  openLog,
  buildStandRecordModelPkg,
  buildStandConfigModelPkg,
  // useStandContext,
} from 'stand-admin-antdpro';

import { env } from '@/configs/env';

import List from './List';
import RecordForm from './RecordForm';
import SearchForm from './SearchForm';

import { searchRecords, getRecord, addRecord, updateRecord, deleteRecord } from './service';

if (env === 'local') {
  openLog();
}

// 创建 ConfigModel，通常存放一些全局的枚举值或者其他数据
export const configModel = buildStandConfigModelPkg({
  getConfig: [
    // 异步函数
    async () => {
      return {
        statusMap: {
          0: 'default',
          1: 'running',
          2: 'online',
          3: 'abnormal',
        },
      };
    },
    // 静态变量
    {
      boolMap: {
        0: 'No',
        1: 'Yes',
      },
    },
  ],
});

// 创建RecordModel，配置一些基础信息（名称，id、name字段），以及 CRUD services
export const recordModel = buildStandRecordModelPkg({
  // Dva的Namespace，全局唯一
  StoreNs: 'DemoRecord',
  StoreNsTitle: '规则',

  // 基础信息
  idFieldName: 'id',
  nameFieldName: 'name',

  /** CRUD services */
  searchRecords,
  getRecord,
  addRecord,
  updateRecord,
  deleteRecord,

  /**
   *  接口字段映射
   */
  // fldsPathInResp: {
  //   pageNum: 'data.pageNum',
  //   pageSize: 'data.pageSize',
  //   total: 'data.total',
  //   list: 'data.list',
  //   errorMsg: ['message', 'msg', 'resultMsg'],
  //   permissionApplyUrl: ['permissionApplyUrl'],
  // },
  // searchParamsMap: {
  //   pageNum: 'pageNum',
  //   pageSize: 'pageSize',
  // },
});

function MainComp(props) {
  // const { config } = useStandContext();

  const { hideSearchForm } = props;

  return (
    <>
      {/* 查询 */}
      {!hideSearchForm && <SearchForm {...props} />}

      {/* 结果列表 */}
      <List {...props} />

      {/* 新建/编辑 */}
      <RecordForm {...props} />
    </>
  );
}

const hocParams = defineContextHocParams({
  recordModel,
  configModel,
  /**
   * 默认的查询参数
   */
  defaultSearchParams: {},

  /**
   * 强制指定的参数
   */
  specSearchParams: { source: 'demo' },
});

// 默认的主组件
export default StandContextHoc(hocParams)(MainComp);

// 选取控件
export const SelectCtrl = StandSelectCtrlHoc(hocParams)(MainComp);

const DynamicCompCache = {};

// 动态主组件，支持动态的数据空间
export const getDynamicComp = (namespace) => {
  if (!DynamicCompCache[namespace]) {
    DynamicCompCache[namespace] = StandContextHoc({
      ...hocParams,
      makeRecordModelPkgDynamic: namespace,
    })(MainComp);
  }

  return DynamicCompCache[namespace];
};
