import React from 'react';
import { StandContextHoc, useStandContext, defineContextHocParams } from 'stand-admin-antdpro';
import RealMain, { configModel } from '../BaseDemo/main';

function MainWrapper(props) {
  const { config } = useStandContext();

  const defaultStatus = parseInt(Object.keys(config.statusMap)[1], 10);

  // 通过props 覆写 defaultSearchParams
  return <RealMain {...props} defaultSearchParams={{ status: defaultStatus }} />;
}

const hocParams = defineContextHocParams({
  configModel,
});

export default StandContextHoc(hocParams)(MainWrapper);
