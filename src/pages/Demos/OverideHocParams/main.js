import React from 'react';
import { StandRecordsHoc, useStandContext, defineCommonHocParams } from 'stand-admin-antdpro';
import RealMain, { configModel } from '../BaseDemo/main';

function MainWrapper(props) {
  const { config } = useStandContext();

  const defaultStatus = parseInt(Object.keys(config.statusMap)[1], 10);

  // 通过props 覆写 defaultSearchParams
  return <RealMain {...props} defaultSearchParams={{ status: defaultStatus }} />;
}

const hocParams = defineCommonHocParams({
  configModel,
});

export default StandRecordsHoc(hocParams)(MainWrapper);
