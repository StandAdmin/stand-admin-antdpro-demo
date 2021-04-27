import React from 'react';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

import Main from './main';

export default (props) => (
  <PageHeaderWrapper>
    <p>
      新建/编辑（useStandUpsertForm）可以通过 recordToValues、recordFromValues
      转换数据格式，比如常见的时间类型（moment/string）
    </p>
    <Main {...props} />
  </PageHeaderWrapper>
);
