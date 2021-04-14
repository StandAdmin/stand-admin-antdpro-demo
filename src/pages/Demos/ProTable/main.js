import React from 'react';
import { StandRecordsHoc, defineCommonHocParams, useStandContext } from 'stand-admin-antdpro';
import moment from 'moment';
import { Popconfirm } from 'antd';
import ProTable from '@ant-design/pro-table';
import { configModel, recordModel } from '../BaseDemo/main';

import RecordForm from '../BaseDemo/RecordForm';

function MainComp(props) {
  const {
    config,
    searchLoading,
    idFieldName,
    searchRecords,
    showRecordForm,
    getRecordName,
    getRecordId,
    deleteRecord,
    storeRef,
  } = useStandContext();

  const { records, pagination } = storeRef;

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
    {
      title: '操作',
      key: 'action',
      valueType: 'option',
      render: (text, record) => [
        <a
          key="edit"
          onClick={() => {
            showRecordForm(record);
          }}
        >
          编辑
        </a>,
        <Popconfirm
          key="delete"
          // tipTitle="删除"
          placement="topRight"
          title={`确认要删除 [${getRecordName(record)}] ？`}
          onConfirm={() => {
            deleteRecord({ [idFieldName]: getRecordId(record) });
          }}
          // onCancel={cancel}
          okText="删除"
          okType="danger"
          cancelText="取消"
        >
          <a>删除</a>
        </Popconfirm>,
      ],
    },
  ];

  return (
    <>
      <ProTable
        pagination={pagination}
        loading={searchLoading}
        // params={searchParams}
        rowKey={idFieldName}
        columns={columns}
        request={(params) => {
          const { current, pageSize, ...restParams } = params;

          return searchRecords({ ...restParams, pageSize, pageNum: current }).then((resp) => {
            if (resp.success) {
              return {
                success: true,
                data: resp.data.list,
                total: resp.data.total,
              };
            }

            return resp;
          });
        }}
        onReset={() => searchRecords({ pageNum: 1 })}
        dataSource={records}
      />

      {/* 新建/编辑 */}
      <RecordForm {...props} />
    </>
  );
}

const hocParams = defineCommonHocParams({
  recordModel,
  configModel,
  // ProTable 目前不支持受控模式，即完全指定 dataSource和params，同时避免 request 对 dataSource的影响
  syncParamsToUrl: false,
});

// 默认的主组件
export default StandRecordsHoc(hocParams)(MainComp);
