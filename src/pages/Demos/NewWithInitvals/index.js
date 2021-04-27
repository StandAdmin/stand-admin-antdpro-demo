import React from 'react';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

import Main from './main';

export default (props) => (
  <PageHeaderWrapper>
    <p>通过showRecordForm的第一个参数指定表单的初始值</p>
    <Main {...props} />
  </PageHeaderWrapper>
);
