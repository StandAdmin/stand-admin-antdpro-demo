import React from 'react';
import { useStandTableList, getOptsForStandTableList } from 'stand-admin-antdpro';
import { LinkOutlined } from '@ant-design/icons';
import { getDynamicComp, SelectCtrl } from '../../BaseDemo/main';

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
      render: (status) => {
        return (
          <SelectCtrl
            // 指定参数
            specSearchParams={{
              status,
            }}
            modalProps={{ title: `状态 == ${config.statusMap[status]}`, footer: null }}
            modalTrigger={({ showModal }) => {
              return (
                <a onClick={showModal}>
                  <LinkOutlined />
                  {config.statusMap[status] || status}
                </a>
              );
            }}
          />
        );
      },
    },
  ];

  return standRender({
    autoScrollX: { defaultWidth: 150 },
    columns,
    expandable: {
      expandedRowRender: (record) => {
        const { status } = record;

        const DyComp = getDynamicComp(`status_${status}`);

        return (
          <>
            <h3>状态 == {config.statusMap[status]}</h3>
            <DyComp
              // 禁用查询参数同步URL
              syncParamsToUrl={false}
              // 不需要查询
              hideSearchForm
              // 指定参数
              specSearchParams={{ status }}
              // 默认参数
              defaultSearchParams={{ pageSize: 5 }}
            />
          </>
        );
      },
      rowExpandable: () => true,
    },
  });
};
