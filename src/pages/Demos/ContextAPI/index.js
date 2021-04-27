import React from 'react';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

import Main from './main';

export default (props) => (
  <PageHeaderWrapper>
    <p>The Big StandContext</p>
    <Main {...props} />
  </PageHeaderWrapper>
);
