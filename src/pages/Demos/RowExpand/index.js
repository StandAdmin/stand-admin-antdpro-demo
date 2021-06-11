import React from 'react';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

import Main from './main';

export default (props) => (
  <PageHeaderWrapper>
    <p>
      <code>StandContextHoc</code>&<code>StandSelectCtrlHoc</code>
      返回的就是一个组件，通过配置<code>props</code>即可实现不同的展示
    </p>
    <Main {...props} />
  </PageHeaderWrapper>
);
