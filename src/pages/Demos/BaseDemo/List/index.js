import React from 'react';
import moment from 'moment';
import { Popconfirm } from 'antd';
import { useStandTableList, getOptsForStandTableList } from 'stand-admin-antdpro';
import { customAction } from '../service';

export default (props) => {
  const { config, context, tableListStyles, standRender } = useStandTableList({
    ...getOptsForStandTableList(props),
  });

  const {
    deleteRecord,
    idFieldName,
    getRecordId,
    getRecordName,
    callService,
    showRecordForm,
    loadAndShowRecordForm,
  } = context;

  const callCustomAction = (record, action) => {
    return callService({
      serviceTitle: '自定义动作',
      serviceFunction: customAction,
      serviceParams: [{ [idFieldName]: getRecordId(record), action }],
    });
  };

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
      fixed: 'right',
      width: 230,
      render: (text, record) => {
        return (
          <ul className={tableListStyles.actionList}>
            <li>
              <a
                onClick={() => {
                  showRecordForm(record);
                }}
              >
                编辑
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  loadAndShowRecordForm({ [idFieldName]: getRecordId(record) });
                }}
              >
                拉取&编辑
              </a>
            </li>
            <li>
              <Popconfirm
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
              </Popconfirm>
            </li>
            <li>
              <a
                onClick={() => {
                  callCustomAction(record, 'ActA');
                }}
              >
                动作
              </a>
            </li>
          </ul>
        );
      },
    },
  ];

  return standRender({ autoScrollX: { defaultWidth: 150 }, columns });
};
