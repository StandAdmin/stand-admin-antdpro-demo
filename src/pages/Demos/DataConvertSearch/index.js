import React from 'react';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { Link } from 'umi';
import Main from './main';

export default (props) => (
  <PageHeaderWrapper>
    <p>
      注：推荐优先考虑 <Link to="/admin-demo/weird-query">异形查询</Link>，即在 searchRecords
      中做一个单向的转换。
    </p>
    <p>
      这里采用的 searchParamsFromValues & searchParamsToValues
      是一种双向转换的方式，相当于表单直接适配接口
    </p>
    <Main {...props} />
  </PageHeaderWrapper>
);
