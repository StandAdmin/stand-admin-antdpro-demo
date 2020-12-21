import React, { Fragment } from 'react';
import { StandListCtrlHoc, StandRecordsHoc } from 'stand-admin-antdpro';
import List from './List';
import RecordForm from './RecordForm';
import SearchForm from './SearchForm';

import * as recordModel from './models/Record';

import * as configModel from './models/Config';

function MainComp(props) {
  return (
    <>
      <SearchForm {...props} />

      <List {...props} />

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

export const SelectCtrl = StandListCtrlHoc(hocParams)(MainComp);
