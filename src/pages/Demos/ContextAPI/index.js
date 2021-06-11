import React from 'react';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

import Main from './main';

export default (props) => (
  <PageHeaderWrapper>
    <p>
      The Big
      <code>StandContext</code>
    </p>
    <p>
      context 可以通过<code>useStandContext</code>（函数组件）或者
      <code>static contextType = StandContext</code>（类组件）获取
    </p>
    <Main {...props} />
  </PageHeaderWrapper>
);
