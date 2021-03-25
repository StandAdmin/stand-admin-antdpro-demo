import React from 'react';
import { Card } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

import { getDynamicComp } from '@/pages/BaseDemo/main';

// import styles from './index.less';

const MainA = getDynamicComp('NS-A');

const MainB = getDynamicComp('NS-B');

const MainC = getDynamicComp('NS-C');

export default (props) => (
  <PageHeaderWrapper>
    <Card title="实例A( syncParamsToUrl={false} )">
      <MainA
        {...props}
        syncParamsToUrl={false}
        disableSpecSearchParams
        specSearchParams={{
          status: 2,
        }}
        defaultSearchParams={{ pageSize: 3 }}
      />
    </Card>

    <Card title={`实例B( urlParamsNs="B" )`}>
      <MainB
        {...props}
        urlParamsNs="B"
        disableSpecSearchParams
        specSearchParams={{
          status: 1,
        }}
        defaultSearchParams={{ pageSize: 3 }}
      />
    </Card>

    <Card title={`实例C( urlParamsNs="C" )`}>
      <MainC
        {...props}
        urlParamsNs="C"
        disableSpecSearchParams
        specSearchParams={{
          status: 0,
        }}
        defaultSearchParams={{ pageSize: 3 }}
      />
    </Card>
  </PageHeaderWrapper>
);
