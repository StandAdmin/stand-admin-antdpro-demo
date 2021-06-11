import React from 'react';
import { StandContextHoc, useStandContext, defineContextHocParams } from 'stand-admin-antdpro';
import RealMain, { configModel } from '../BaseDemo/main';

function MainWrapper(props) {
  // MainWrapper经过StandContextHoc处理，可以获取config
  const { config } = useStandContext();

  // 获取config中的信息
  const defaultStatus = parseInt(Object.keys(config.statusMap)[1], 10);

  // 通过props 覆写 defaultSearchParams
  return <RealMain {...props} defaultSearchParams={{ status: defaultStatus }} />;
}

// 提供一个获取config的封装
const hocParams = defineContextHocParams({
  configModel,
  receiveHocParamsAsProps: false,
  receiveContextAsProps: false,
});

export default StandContextHoc(hocParams)(MainWrapper);
