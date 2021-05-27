import React from 'react';
import {
  StandContextHoc,
  defineContextHocParams,
  getDynamicModelPkg,
  buildStandRecordModelPkg,
} from 'stand-admin-antdpro';

import { configModel, recordModel } from '../BaseDemo/main';

import List from '../BaseDemo/List';
import RecordForm from '../BaseDemo/RecordForm';
import SearchForm from './SearchForm';

const myFilterList = [
  { label: '条件A', value: 'a', params: { status: 2, name: '2' } },
  { label: '条件B', value: 'b', params: { status: 1, name: '1' } },
  { label: '条件C', value: 'c', params: { status: 3, name: '3' } },
];

function MainComp(props) {
  // const { config } = useStandContext();

  return (
    <>
      {/* 查询 */}
      <SearchForm {...props} {...{ myFilterList }} />

      {/* 结果列表 */}
      <List {...props} />

      {/* 新建/编辑 */}
      <RecordForm {...props} />
    </>
  );
}

const origRecordModal = buildStandRecordModelPkg({
  ...recordModel.modelOpts,
  searchRecords: (params) => {
    const origSearchRecords = recordModel.modelOpts.searchRecords;

    const { myFilter, ...restParams } = params;

    const matchFilterItem = myFilterList.find((item) => item.value === myFilter);

    return origSearchRecords({
      ...(matchFilterItem ? matchFilterItem.params : {}),
      ...restParams,
    });
  },
});

const hocParams = defineContextHocParams({
  recordModel: getDynamicModelPkg(origRecordModal, 'weird-query'),
  configModel,
  defaultSearchParams: {},
});

export default StandContextHoc(hocParams)(MainComp);
