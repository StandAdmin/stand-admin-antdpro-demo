import React from 'react';

import { useStandTableList, getOptsForStandTableList } from 'stand-admin-antdpro';

export default (props) => {
  const { showRecordForm, tableListStyles, standRender } = useStandTableList({
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
                  showRecordForm(record, 'A');
                }}
              >
                编辑A
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  showRecordForm(record, 'B');
                }}
              >
                编辑B
              </a>
            </li>
          </ul>
        );
      },
    },
  ];

  return standRender({ autoScrollX: { defaultWidth: 150 }, columns });
};
