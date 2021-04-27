import React from 'react';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

import Main from './main';

export default (props) => (
  <PageHeaderWrapper>
    <p>
      通过showRecordForm的第二个参数指定复制模式，然后在useStandUpsertForm中通过设置submitValues来支持复制逻辑
    </p>
    <Main {...props} />
  </PageHeaderWrapper>
);
