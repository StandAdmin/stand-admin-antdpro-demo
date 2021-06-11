import React from 'react';
import { Card } from 'antd';
import { Link } from 'umi';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

import BaseDemoComp from '../BaseDemo/main';

// import styles from './index.less';

export default () => (
  <PageHeaderWrapper>
    <p>
      共用同一个<code>recordModel</code>的多个实例，数据状态会保持一致；
      <Link to="/admin-demo/multi-ns">如何做到相互隔离?</Link>
    </p>
    <Card title="实例A">
      <BaseDemoComp
        disableSpecSearchParams
        specSearchParams={{
          status: 2,
        }}
        defaultSearchParams={{ pageSize: 3 }}
      />
    </Card>
    <Card title="实例B">
      <BaseDemoComp
        disableSpecSearchParams
        specSearchParams={{
          status: 1,
        }}
        defaultSearchParams={{ pageSize: 3 }}
      />
    </Card>
  </PageHeaderWrapper>
);
