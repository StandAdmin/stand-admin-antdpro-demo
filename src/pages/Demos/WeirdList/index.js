import React from 'react';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

import Main from './main';

export default (props) => (
  <PageHeaderWrapper>
    <p>列表只是一种展示样式而已</p>
    <Main {...props} />
  </PageHeaderWrapper>
);
