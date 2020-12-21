import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';

import { Spin } from 'antd';

import { StandConfigLoadingHoc } from 'stand-admin-antdpro';
import * as configModel from './models/Config';

import Main from './main';

export default StandConfigLoadingHoc({ configModel })((props) => {
  if (props.configLoading) {
    return <Spin />;
  }

  return (
    <PageContainer>
      <Main {...props} />
    </PageContainer>
  );
});
