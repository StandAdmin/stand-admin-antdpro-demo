import React from 'react';
import { Link } from 'umi';
import { Card } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { StandContextHoc } from 'stand-admin-antdpro';

import { MainComp, configModel, recordModel } from '../BaseDemo/main';

const DynamicCompCache = {};

// 动态主组件，支持动态的数据空间
export const getDynamicComp = (namespace) => {
  if (!DynamicCompCache[namespace]) {
    DynamicCompCache[namespace] = StandContextHoc({
      configModel,
      recordModel,

      makeRecordModelPkgDynamic: namespace,
    })(MainComp);
  }

  return DynamicCompCache[namespace];
};

// import styles from './index.less';

const MainA = getDynamicComp('NS-A');

const MainB = getDynamicComp('NS-B');

const MainC = getDynamicComp('NS-C');

export default (props) => (
  <PageHeaderWrapper>
    <p>
      共用同一个
      <code>recordModel</code>
      的组件实例会
      <Link to="/admin-demo/same-ns">相互影响</Link>
      ，原因见 这里 。 为避免此种情况，可以借助
      <code>cloneModelPkg</code>
      或者
      <code>getDynamicModelPkg</code>
      （亦可在Hoc中使用<code>makeRecordModelPkgDynamic</code>参数）复制出具备新的
      <code>StoreNs</code>的<code>recordModel</code>
      ，从而实现相互隔离，。
    </p>
    <p>
      Url参数同步（<code>syncParamsToUrl</code>）开启的话，亦需要设置<code>urlParamsNs</code>
      ，避免Url参数冲突
    </p>
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
