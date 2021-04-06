import 'moment/locale/zh-cn';
import moment from 'moment';
import React, { ReactNode } from 'react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

moment.locale('zh-cn');

export function rootContainer(container: ReactNode) {
  return (
    <ConfigProvider locale={zhCN} componentSize="small">
      {container}
    </ConfigProvider>
  );
}
