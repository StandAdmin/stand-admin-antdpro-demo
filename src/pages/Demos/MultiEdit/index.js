import React from 'react';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

import Main from './main';

export default (props) => (
  <PageHeaderWrapper>
    <p>
      如果同时存在多个编辑弹窗，可以通过<code>context.showRecordForm</code>
      的第二个参数指定<code>recordFormVisibleTag</code>，然后在
      <code>useStandUpsertForm</code>
      通过定义
      <code>isModalVisible</code>
      判断当前<code>recordFormVisibleTag</code>是否匹配，以此来控制不同编辑表单的显隐
    </p>
    <Main {...props} />
  </PageHeaderWrapper>
);
