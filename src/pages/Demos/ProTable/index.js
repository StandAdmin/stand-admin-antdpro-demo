import React from 'react';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { Link } from 'umi';
import Main from './main';

export default (props) => (
  <PageHeaderWrapper>
    <p>
      <a href="https://procomponents.ant.design/components/table" rel="noreferrer" target="_blank">
        ProTable
      </a>
      集成了查询和列表，是一种更高级的集成组件。 如果您从来没有使用过该组件，推荐优先考虑
      <Link to="/admin-demo/base">基础组件</Link>
      ，长期来看，学习的范围更小（只需要看Antd的文档），自由度也更高。
    </p>
    <Main {...props} />
  </PageHeaderWrapper>
);
