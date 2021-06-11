import React from 'react';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

import Main from './main';

export default (props) => (
  <PageHeaderWrapper>
    <p>
      列筛选是附加了筛选参数的查询。其一，通过<code>filterSearchParams</code>
      对接查询参数；其二，在Table.column中还原<code>filteredValue</code>
    </p>
    <Main {...props} />
  </PageHeaderWrapper>
);
