import React from 'react';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

import Main from './main';

export default (props) => (
  <PageHeaderWrapper>
    <p>
      列表只是一种展示形式，通过<code>useStandTableList</code>或者<code>context</code>
      可以获得展示所需的全部信息
    </p>
    <Main {...props} />
  </PageHeaderWrapper>
);
