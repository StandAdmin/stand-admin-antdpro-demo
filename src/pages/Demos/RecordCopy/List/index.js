import React from 'react';

import { useStandTableList } from 'stand-admin-antdpro';

export default (props) => {
  const { showRecordForm, tableListStyles, standRender } = useStandTableList(props);

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
                  showRecordForm(record, { isCopyMode: true });
                }}
              >
                复制
              </a>
            </li>
          </ul>
        );
      },
    },
  ];

  return standRender({ autoScrollX: { defaultWidth: 150 }, columns });
};
