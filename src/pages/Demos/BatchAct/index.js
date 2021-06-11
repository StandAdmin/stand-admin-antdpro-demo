import React from 'react';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

import Main from './main';

export default (props) => (
  <PageHeaderWrapper>
    <p>
      <code>defineContextHocParams</code>
      中设置 <code>listRowSelectionSupport:true</code>，然后通过
      <code>context</code>
      访问checked相关的API
    </p>
    <Main {...props} />
  </PageHeaderWrapper>
);
