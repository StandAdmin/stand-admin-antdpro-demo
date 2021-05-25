import React from 'react';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { Link } from 'umi';
import Main from './main';

export default (props) => (
  <PageHeaderWrapper>
    <p>
      针对单条记录查询的场景，StandRecordInfoHoc 在 StandContextHoc 之上做了一层简单
      <Link to="/admin-demo/record-details">封装</Link>，可以从props中获取 recordInfoLoading,
      recordInfo。
    </p>
    <Main {...props} />
  </PageHeaderWrapper>
);
