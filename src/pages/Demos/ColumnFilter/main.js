import React from 'react';
import { StandContextHoc, defineContextHocParams } from 'stand-admin-antdpro';
import { configModel, recordModel } from '../BaseDemo/main';

import List from './List';
import RecordForm from '../BaseDemo/RecordForm';

function MainComp(props) {
  // const { config } = useStandContext();

  return (
    <>
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
   * 根据 filters 生成对应的 查询参数
   */
  filterSearchParams: (filters) => {
    const params = {};

    // 查询接口的范围查询格式是： _in_field=v1,v2,v3
    Object.keys(filters).forEach((field) => {
      params[`_in_${field}`] = (filters[field] || []).join(',');
    });

    return params;
  },
});

// 默认的主组件
export default StandContextHoc(hocParams)(MainComp);
