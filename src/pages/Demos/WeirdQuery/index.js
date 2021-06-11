import React from 'react';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { Link } from 'umi';

import Main from './main';

export default (props) => (
  <PageHeaderWrapper>
    <p>
      异形查询指的是查询界面和接口参数差异巨大，此种场景推荐的做法是：在<code>searchRecords</code>中
      对查询接口做一个单向转换
    </p>
    <p>
      转换逻辑比较简单的亦可参考 <Link to="/admin-demo/data-convert-search">这里</Link>
    </p>
    <Main {...props} />
  </PageHeaderWrapper>
);
