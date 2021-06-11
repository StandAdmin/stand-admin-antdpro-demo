import React from 'react';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

import Main from './main';

export default (props) => (
  <PageHeaderWrapper>
    <p>
      列排序是附加了排序参数的查询。其一，通过<code>sorterSearchParams</code>
      对接查询参数；其二，在Table.column中还原<code>sortOrder</code>
    </p>
    <Main {...props} />
  </PageHeaderWrapper>
);
