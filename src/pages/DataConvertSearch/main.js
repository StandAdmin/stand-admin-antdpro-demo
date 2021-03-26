import React, { Fragment } from 'react';
import { StandRecordsHoc } from 'stand-admin-antdpro';
import { Link } from 'umi';
import { configModel, recordModel } from '../BaseDemo/main';

import List from '../BaseDemo/List';
import RecordForm from '../BaseDemo/RecordForm';
import SearchForm from './SearchForm';

function MainComp(props) {
  // const { config } = useStandContext();

  return (
    <>
      <p>
        注：推荐优先考虑 <Link to="/admin-demo/weird-query">异形查询</Link>，即在 searchRecords
        中做一个单向的转换。
      </p>
      <p>
        这里采用的 searchParamsFromValues & searchParamsToValues
        是一种双向转换的方式，相当于表单直接适配接口
      </p>
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
  defaultSearchParams: {},
};

export default StandRecordsHoc(hocParams)(MainComp);
