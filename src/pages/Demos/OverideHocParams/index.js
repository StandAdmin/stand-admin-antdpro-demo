import React from 'react';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

import Main from './main';

export default (props) => (
  <PageHeaderWrapper>
    <p>
      某些场景下，Hoc的一些参数可能依赖于config信息，比如
      <code>defaultSearchParams.status = Object.keys(config.statusMap)[1]</code> 。
    </p>
    <p>
      此种情况下，可以对主组件Main额外做一层封装，再通过<code>props</code>覆盖相关Hoc参数。
    </p>
    <Main {...props} />
  </PageHeaderWrapper>
);
