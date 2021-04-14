import React from 'react';
import { StandRecordsHoc, defineCommonHocParams } from 'stand-admin-antdpro';
import { configModel, recordModel } from '../BaseDemo/main';

import List from '../BaseDemo/List';
import RecordForm from '../BaseDemo/RecordForm';
import SearchForm from '../BaseDemo/SearchForm';

import APIDemo from './APIDemo';

function MainComp(props) {
  // const { config } = useStandContext();

  return (
    <>
      <APIDemo />

      {/* 查询 */}
      <SearchForm {...props} />

      {/* 结果列表 */}
      <List {...props} />

      {/* 新建/编辑 */}
      <RecordForm {...props} />
    </>
  );
}

const hocParams = defineCommonHocParams({
  recordModel,
  configModel,
  defaultSearchParams: { pageSize: 2 },
});

// 默认的主组件
export default StandRecordsHoc(hocParams)(MainComp);
