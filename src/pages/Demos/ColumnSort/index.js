import React from 'react';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

import Main from './main';

export default (props) => (
  <PageHeaderWrapper>
    <p>
      列排序是一种特殊的查询。其一，通过sorterSearchParams对接查询参数；其二，在Table.column中还原sortOrder
    </p>
    <Main {...props} />
  </PageHeaderWrapper>
);
