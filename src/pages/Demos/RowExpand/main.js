import React from 'react';
import { StandContextHoc, defineContextHocParams } from 'stand-admin-antdpro';

import { configModel, recordModel } from '../BaseDemo/main';

import List from './List';
import RecordForm from '../BaseDemo/RecordForm';
import SearchForm from '../BaseDemo/SearchForm';

function MainComp(props) {
  // const { config } = useStandContext();

  return (
    <>
      {/* 查询 */}
      <SearchForm {...props} />

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
});

export default StandContextHoc(hocParams)(MainComp);
