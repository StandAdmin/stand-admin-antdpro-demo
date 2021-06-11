import React from 'react';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { Link } from 'umi';
import Main from './main';

export default (props) => (
  <PageHeaderWrapper>
    <p>
      查询参数和表单的转换可以借助
      <code>useStandSearchForm</code>
      中的
      <code>searchParamsFromValues</code> &<code>searchParamsToValues</code>
      ，适用于转换逻辑比较简单的场景，比如日期格式转换
    </p>
    <p>
      复杂场景可参考 <Link to="/admin-demo/weird-query">异形查询</Link>
    </p>
    <Main {...props} />
  </PageHeaderWrapper>
);
