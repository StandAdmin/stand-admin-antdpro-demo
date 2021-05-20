// import React from 'react';
import moment from 'moment';
import { useStandTableList, getOptsForStandTableList } from 'stand-admin-antdpro';

export default (props) => {
  const { context, config, standRender } = useStandTableList({
    ...getOptsForStandTableList(props),
  });

  const {
    storeRef: { searchParams },
  } = context;

  // 获取排序相关的参数
  const { sortByField, sortByOrder } = searchParams;

  const columns = [
    {
      title: 'ID(可排序)',
      dataIndex: 'id',
      width: 150,

      /** 配置列排序 */
      sorter: true,
      // 从查询参数中还原 sortOrder
      sortOrder: sortByField === 'id' && sortByOrder,
    },
    {
      title: '名称',
      dataIndex: 'name',
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
