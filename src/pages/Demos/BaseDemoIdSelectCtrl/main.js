import React from 'react';
import {
  defineContextHocParams,
  StandSelectCtrlHoc,
  StandContextHoc,
  buildStandRecordModelPkg,
  buildStandConfigModelPkg,
  // useStandContext,
} from 'stand-admin-antdpro';

import List from './List';
import SearchForm from './SearchForm';

import { searchRecords, getRecord } from '../BaseDemo/service';

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
  StoreNs: 'DemoRecordSelect',
  StoreNsTitle: '规则',

  // 基础信息
  idFieldName: 'id',
  nameFieldName: 'name',

  /** CRUD services */
  searchRecords,
  getRecord,
});

function MainComp(props) {
  // const context = useStandContext();

  return (
    <>
      {/* 查询 */}
      {<SearchForm {...props} />}

      {/* 结果列表 */}
      <List {...props} />
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
