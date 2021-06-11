import React from 'react';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

import Main from './main';

export default (props) => (
  <PageHeaderWrapper>
    <p>
      通过<code>context.storeRef.searchParams</code>获取当前查询的状态，再通过
      <code>context.showRecordForm</code>的第一个参数指定表单的状态初始值
    </p>
    <Main {...props} />
  </PageHeaderWrapper>
);
