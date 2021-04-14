import React from 'react';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

import Main from './main';

export default (props) => (
  <PageHeaderWrapper>
    <p>接口角度，详情只是单条记录的查询而已。</p>
    <Main {...props} />
  </PageHeaderWrapper>
);
