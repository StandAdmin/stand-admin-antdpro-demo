import React from 'react';
import { Card } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

import { getDynamicComp } from '../BaseDemo/main';

// import styles from './index.less';

const MainA = getDynamicComp('NS-A');

const MainB = getDynamicComp('NS-B');

const MainC = getDynamicComp('NS-C');

export default (props) => (
  <PageHeaderWrapper>
    <p>多个实例的数据空间需要隔离（参考getDynamicComp）。</p>
    <p>需要URL参数同步的话，可以设置urlParamsNs，避免参数冲突</p>
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
