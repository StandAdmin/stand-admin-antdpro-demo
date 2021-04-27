import React from 'react';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

import Main from './main';

export default (props) => (
  <PageHeaderWrapper>
    <p>
      列筛选是一种特殊的查询。其一，通过filterSearchParams对接查询参数；其二，在Table.column中还原filteredValue
    </p>
    <Main {...props} />
  </PageHeaderWrapper>
);
