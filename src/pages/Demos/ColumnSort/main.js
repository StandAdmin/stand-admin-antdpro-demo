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
   * 根据 sorter 生成对应的 查询参数
   */
  sorterSearchParams: (sorter) => {
    const { order, field } = sorter;

    // 这里返回的参数会传递给 searchRecords 接口
    return {
      sortByField: order ? field : undefined,
      sortByOrder: order,
    };
  },
});

// 默认的主组件
export default StandContextHoc(hocParams)(MainComp);
