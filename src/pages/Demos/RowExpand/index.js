import React from 'react';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

import Main from './main';

export default (props) => (
  <PageHeaderWrapper>
    <p>Hoc返回的就是一个组件，可以通过配置组件的各种参数实现各类展示</p>
    <Main {...props} />
  </PageHeaderWrapper>
);
