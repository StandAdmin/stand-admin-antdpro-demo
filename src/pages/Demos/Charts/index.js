import React from 'react';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

import Main from './main';

export default (props) => (
  <PageHeaderWrapper>
    <p>图表只是一种特殊的列表展示形式而已</p>
    <Main {...props} />
  </PageHeaderWrapper>
);
