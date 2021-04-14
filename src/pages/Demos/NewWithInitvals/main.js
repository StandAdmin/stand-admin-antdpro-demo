import React, { Fragment } from 'react';
import { StandRecordsHoc, defineCommonHocParams } from 'stand-admin-antdpro';

import { configModel, recordModel } from '../BaseDemo/main';

import List from '../BaseDemo/List';
import RecordForm from '../BaseDemo/RecordForm';
import SearchForm from './SearchForm';

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

const hocParams = defineCommonHocParams({
  recordModel,
  configModel,
  defaultSearchParams: {},
});

export default StandRecordsHoc(hocParams)(MainComp);
