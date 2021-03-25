import React, { Fragment } from 'react';
import {
  StandListCtrlHoc,
  StandRecordsHoc,
  openLog,
  buildStandRecordModelPkg,
  buildStandConfigModelPkg,
  // useStandContext,
  getDynamicModelPkg,
} from 'stand-admin-antdpro';

import { env } from '@/configs/env';

import List from './List';
import RecordForm from './RecordForm';
import SearchForm from './SearchForm';

import { searchRecords, getRecord, addRecord, updateRecord, deleteRecord } from './service';

if (env === 'local') {
  openLog();
}

// 创建ConfigModel
export const configModel = buildStandConfigModelPkg({
  StoreNs: 'DemoConfig2',
  StoreNsTitle: 'Demo配置',
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

// 创建RecordModel
export const recordModel = buildStandRecordModelPkg({
  StoreNs: 'DemoRule2',
  StoreNsTitle: '规则',
  idFieldName: 'id',
  nameFieldName: 'name',
  searchRecords,
  getRecord,
  addRecord,
  updateRecord,
  deleteRecord,

  // fldsPathInResp: {
  //   pageNum: 'data.pageNum',
  //   pageSize: 'data.pageSize',
  //   total: 'data.total',
  //   list: 'data.list',
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

const hocParams = {
  recordModel,
  configModel,

  /**
   * 默认的查询参数
   */
  defaultSearchParams: {},
};

// 默认的主组件
export default StandRecordsHoc(hocParams)(MainComp);

// 选取控件
export const SelectCtrl = StandListCtrlHoc({
  ...hocParams,
  recordModel: getDynamicModelPkg(recordModel, 'select-ctrl'),
})(MainComp);

const DynamicCompCache = {};

// 动态主组件，支持不同的数据空间
export const getDynamicComp = (namespace) => {
  if (!DynamicCompCache[namespace]) {
    DynamicCompCache[namespace] = StandRecordsHoc({
      ...hocParams,
      recordModel: getDynamicModelPkg(recordModel, namespace),
    })(MainComp);
  }

  return DynamicCompCache[namespace];
};
