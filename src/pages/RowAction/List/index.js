import React from 'react';
// import moment from 'moment';
import { Modal, message, Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { useStandTableList } from 'stand-admin-antdpro';
import { customAction } from '@/pages/BaseDemo/service';

export default (props) => {
  const { config, context, tableListStyles, standRender } = useStandTableList(props);

  const { idFieldName, getRecordId, getRecordName, callService } = context;

  const callCustomAction = (record, action, extraOptions = {}, extraParams = {}) => {
    return callService({
      serviceTitle: `[动作${action}, ${getRecordName(record)}]`,
      serviceFunction: customAction,
      serviceParams: [{ [idFieldName]: getRecordId(record), action, ...extraParams }],
      ...extraOptions,
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
      title: '状态',
      dataIndex: 'status',
      render: (val) => config.statusMap[val] || val,
    },
    {
      title: '操作',
      key: 'action',
      fixed: 'right',
      width: 370,
      render: (text, record) => {
        return (
          <ul className={tableListStyles.actionList}>
            <li>
              <a
                onClick={() => {
                  callCustomAction(record, 'ActA', {
                    handleActionResponse: (resp) => {
                      Modal.info({
                        title: `动作ActA, ${getRecordName(record)}`,
                        content: JSON.stringify(resp, null, 2),
                      });
                    },
                  });
                }}
              >
                自定义响应
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  callCustomAction(record, 'ActB', { shouldRefresh: false });
                }}
              >
                仅通知
                <Tooltip title="不触发列表更新">
                  <InfoCircleOutlined />
                </Tooltip>
              </a>
            </li>

            <li>
              <a
                onClick={() => {
                  const timeStart = Date.now();
                  callCustomAction(record, 'ActC').then((resp) => {
                    message.info(`动作用时: ${Date.now() - timeStart}ms`);
                    return resp;
                  });
                }}
              >
                动作计时
              </a>
            </li>

            <li>
              <a
                onClick={() => {
                  callCustomAction(record, 'ActC', {}, { isErrReq: 1 });
                }}
              >
                模拟失败
              </a>
            </li>
          </ul>
        );
      },
    },
  ];

  return standRender({ autoScrollX: { defaultWidth: 150 }, columns });
};
