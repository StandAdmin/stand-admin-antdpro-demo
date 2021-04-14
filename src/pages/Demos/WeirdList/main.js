import React from 'react';
import { StandListCtrlHoc, defineCommonHocParams } from 'stand-admin-antdpro';

import { configModel, recordModel } from '../BaseDemo/main';

import List from './List';
import RecordForm from '../BaseDemo/RecordForm';
import SearchForm from '../BaseDemo/SearchForm';
import { BatchOp } from '../BatchAct/main';

function MainComp(props) {
  // const { config } = useStandContext();

  return (
    <>
      {/* 查询 */}
      <SearchForm {...props} />

      <div style={{ margin: '-60px auto 24px 400px' }}>
        <BatchOp {...props} />
      </div>

      <List {...props} />

      {/* 新建/编辑 */}
      <RecordForm {...props} />
    </>
  );
}

const hocParams = defineCommonHocParams({
  recordModel,
  configModel,
  defaultSearchParams: { pageSize: 40 },
});

// 默认的主组件
export default StandListCtrlHoc({ ...hocParams, isModalMode: false })(MainComp);
