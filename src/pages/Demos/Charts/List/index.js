import React from 'react';
import { useStandTableList, getOptsForStandTableList } from 'stand-admin-antdpro';

import { dynamic } from 'umi';

/**
 * Do Not remove comment webpackChunkName
 */
export const Line = dynamic({
  async loader() {
    const chartsLib = await import(
      /* webpackChunkName: "external_antd_charts" */ '@ant-design/charts'
    );

    return chartsLib.Line;
  },
});

export default (props) => {
  const { config, records } = useStandTableList({
    ...getOptsForStandTableList(props),
  });

  return (
    <Line
      {...{
        data: records.map((item) => ({ ...item, statusLabel: config.statusMap[item.status] })),
        padding: 'auto',

        xField: 'name',
        yField: 'progress',

        seriesField: 'statusLabel',

        meta: {
          progress: {
            alias: '进度',
          },
        },
      }}
    />
  );
};
