import React from 'react';
import { StandRecordsHoc, useStandContext, defineCommonHocParams } from 'stand-admin-antdpro';
import { Dropdown, Button, Menu, Badge, notification } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { configModel, recordModel } from '../BaseDemo/main';

import List from '../BaseDemo/List';
import RecordForm from '../BaseDemo/RecordForm';
import SearchForm from '../BaseDemo/SearchForm';

export const BatchOp = () => {
  const { getRecordId, checkedList } = useStandContext();

  const batchOpMenu = (
    <Menu
      onClick={(e) => {
        notification.info({
          message: `动作：${e.key}`,
          description: `选中：${checkedList.map((record) => getRecordId(record)).join(', ')}`,
        });
      }}
    >
      <Menu.Item key="act1">操作1</Menu.Item>
      <Menu.Item key="act2">操作2</Menu.Item>
    </Menu>
  );

  return (
    <Badge count={checkedList.length}>
      <Dropdown overlay={batchOpMenu} disabled={checkedList.length === 0}>
        <Button>
          批量操作
          <DownOutlined />
        </Button>
      </Dropdown>
    </Badge>
  );
};

function MainComp(props) {
  // const { config } = useStandContext();

  return (
    <>
      {/* 查询 */}
      <SearchForm {...props} />

      <div style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', zIndex: 100, top: 5, right: 24 }}>
          <BatchOp {...props} />
        </div>
        <List {...props} />
      </div>

      {/* 新建/编辑 */}
      <RecordForm {...props} />
    </>
  );
}

const hocParams = defineCommonHocParams({
  recordModel,
  configModel,
  receiveContextAsProps: false,
  listRowSelectionSupport: true,
});

// 默认的主组件
export default StandRecordsHoc(hocParams)(MainComp);
