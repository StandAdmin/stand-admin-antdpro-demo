// import React from 'react';
import moment from 'moment';
import { useStandTableList, getOptsForStandTableList } from 'stand-admin-antdpro';

export default (props) => {
  const { config, standRender } = useStandTableList({
    ...getOptsForStandTableList(props),
  });

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      fixed: 'left',
      width: 80,
    },
    {
      title: '名称',
      dataIndex: 'name',
    },
    {
      title: '描述',
      dataIndex: 'desc',
    },
    {
      title: '状态',
      dataIndex: 'status',
      render: (val) => config.statusMap[val] || val,
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
