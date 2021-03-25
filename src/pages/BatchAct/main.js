import React, { Fragment } from 'react';
import { StandListCtrlHoc } from 'stand-admin-antdpro';
import { Dropdown, Button, Menu, Badge, notification } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { configModel, recordModel } from '../BaseDemo/main';

import List from '../BaseDemo/List';
import RecordForm from '../BaseDemo/RecordForm';
import SearchForm from '../BaseDemo/SearchForm';

export const BatchOp = (props) => {
  const { checkedList } = props;

  const batchOpMenu = (
    <Menu
      onClick={(e) => {
        notification.info({
          message: `批量动作：${e.key}`,
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
      <div style={{ float: 'right' }}>
        <BatchOp {...props} />
      </div>

      {/* 查询 */}
      <SearchForm {...props} />

      {/* 结果列表 */}
      <List {...props} />

      {/* 新建/编辑 */}
      <RecordForm {...props} />
    </>
  );
}

const hocParams = {
  recordModel,
  configModel,
};

// 默认的主组件
export default StandListCtrlHoc({ ...hocParams, isModalMode: false })(MainComp);
