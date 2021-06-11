import React from 'react';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

import Main from './main';

export default (props) => (
  <PageHeaderWrapper>
    <p>复制可以当做一种特殊的编辑来实现。</p>
    <p>
      1. 借助<code>context.showRecordForm</code>的第二个参数（
      <code>recordFormVisibleTag</code>
      ）设定复制模式
    </p>
    <p>
      2. 在<code>useStandUpsertForm</code>
      中定义<code>submitValues</code>，检测当前的<code>recordFormVisibleTag</code>
      来区别正常编辑还是复制
    </p>
    <Main {...props} />
  </PageHeaderWrapper>
);
