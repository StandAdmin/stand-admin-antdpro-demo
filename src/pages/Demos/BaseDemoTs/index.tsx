import React from 'react';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

import Main from './main';

export default (props: any) => (
  <PageHeaderWrapper>
    <Main {...props} />
  </PageHeaderWrapper>
);
