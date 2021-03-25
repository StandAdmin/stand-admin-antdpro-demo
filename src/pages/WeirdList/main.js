import React, { Fragment } from 'react';
import { StandListCtrlHoc } from 'stand-admin-antdpro';

import { configModel, recordModel } from '../BaseDemo/main';

import List from './List';
import RecordForm from '../BaseDemo/RecordForm';
import SearchForm from '../BaseDemo/SearchForm';
import { BatchOp } from '../BatchAct/main';

function MainComp(props) {
  // const { config } = useStandContext();

  return (
    <>
      <div style={{ float: 'right' }}>
        <BatchOp {...props} />
      </div>

      {/* 查询 */}
      <SearchForm {...props} />

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
  defaultSearchParams: { pageSize: 100 },
};

// 默认的主组件
export default StandListCtrlHoc({ ...hocParams, isModalMode: false })(MainComp);
