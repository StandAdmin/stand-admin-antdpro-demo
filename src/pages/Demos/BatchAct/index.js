import React from 'react';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

import Main from './main';

export default (props) => (
  <PageHeaderWrapper>
    <p>设置 listRowSelectionSupport:true</p>
    <Main {...props} />
  </PageHeaderWrapper>
);
