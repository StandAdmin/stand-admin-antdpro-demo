import React from 'react';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

import Main from './main';

export default (props) => (
  <PageHeaderWrapper>
    <p>
      通过<code>context.callService</code>支持各种请求
    </p>
    <Main {...props} />
  </PageHeaderWrapper>
);
