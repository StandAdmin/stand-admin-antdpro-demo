/* eslint-disable no-underscore-dangle */
// import React from 'react';
import moment from 'moment';
import { useStandTableList, standUtils } from 'stand-admin-antdpro';

export default (props) => {
  const { context, config, standRender } = useStandTableList(props);

  const {
    storeRef: { searchParams },
  } = context;

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 150,
    },
    {
      title: '名称',
      dataIndex: 'name',
    },
    {
      title: '状态(可筛选)',
      dataIndex: 'status',
      render: (val) => config.statusMap[val] || val,

      /** 配置列筛选 */
      filters: standUtils
        .mapToOptions(config.statusMap, { valueFilter: parseInt })
        .map(({ label, value }) => ({ value, text: label })),

      // 支持多选
      filterMultiple: true,
      // 从查询参数中还原 filteredValue
      filteredValue: searchParams._in_status ? searchParams._in_status.split(',') : undefined,

      width: 170,
    },
    {
      title: '修改时间',
      dataIndex: 'updatedAt',
      width: 180,
      render: (val) => moment(val).format('YYYY-MM-DD HH:mm:ss'),
    },
  ];

  return standRender({ autoScrollX: { defaultWidth: 150 }, columns });
};
