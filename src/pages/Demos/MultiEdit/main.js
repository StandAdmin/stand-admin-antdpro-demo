import React from 'react';
import { StandRecordsHoc, defineCommonHocParams } from 'stand-admin-antdpro';

import { configModel, recordModel } from '../BaseDemo/main';

import List from './List';
import RecordForm from './RecordForm';

import RecordFormA from './RecordForm/EditA';

import RecordFormB from './RecordForm/EditB';

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
      <RecordFormA {...props} />
      <RecordFormB {...props} />
      <RecordForm {...props} />
    </>
  );
}

const hocParams = defineCommonHocParams({
  recordModel,
  configModel,
});

// 默认的主组件
export default StandRecordsHoc(hocParams)(MainComp);
