import React from 'react';
import { StandContextHoc, defineContextHocParams } from 'stand-admin-antdpro';

import { configModel, recordModel } from '../BaseDemo/main';

import List from './List';
import SearchForm from './SearchForm';

function MainComp(props) {
  // const { config } = useStandContext();

  return (
    <>
      {/* 查询 */}
      <SearchForm {...props} />

      <List {...props} />
    </>
  );
}

const hocParams = defineContextHocParams({
  recordModel,
  configModel,
  defaultSearchParams: { pageSize: 10000 },
});

// 默认的主组件
export default StandContextHoc(hocParams)(MainComp);
