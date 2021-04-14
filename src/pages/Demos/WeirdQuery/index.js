import React from 'react';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

import Main from './main';

export default (props) => (
  <PageHeaderWrapper>
    <p>异形查询指的是查询界面和接口参数差异巨大，此种场景推荐的做法是：对查询接口做一个转换包装</p>
    <Main {...props} />
  </PageHeaderWrapper>
);
