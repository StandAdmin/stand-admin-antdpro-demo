import React from 'react';
import { Card, Form, Button } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

import { SelectCtrl as BaseDemoSelectCtrl } from '@/pages/BaseDemo/main';

// import styles from './index.less';

export default () => {
  const onFinish = (values) => {
    console.log('表单数据', values);
  };

  return (
    <PageHeaderWrapper>
      <Card title="普通">
        <BaseDemoSelectCtrl
          specSearchParams={{
            status: 1,
          }}
          maxCheckedLength={3}
          resetSearchParamsOnModalShow
          // modalTrigger={({ showModal }) => {
          //   return <a onClick={showModal}>xxx</a>;
          // }}
          onChange={(value) => console.log(`普通`, value)}
        />
      </Card>

      <Card title="ID模式">
        <BaseDemoSelectCtrl.IdSelectCtrl
          specSearchParams={{
            status: 1,
          }}
          maxCheckedLength={3}
          resetSearchParamsOnModalShow
          // modalTrigger={({ showModal }) => {
          //   return <a onClick={showModal}>xxx</a>;
          // }}
          onChange={(value) => console.log(`ID`, value)}
        />
      </Card>

      <Card title="表单/受控模式">
        <Form name="basic" initialValues={{ ruleIds: [1, 2] }} onFinish={onFinish}>
          <Form.Item
            label="规则"
            name="ruleList"
            rules={[{ required: true }]}
            valuePropName="checkedList"
          >
            <BaseDemoSelectCtrl
              specSearchParams={{
                status: 1,
              }}
            />
          </Form.Item>

          <Form.Item
            label="规则ID"
            name="ruleIds"
            rules={[{ required: true }]}
            valuePropName="checkedIdList"
          >
            <BaseDemoSelectCtrl.IdSelectCtrl />
          </Form.Item>
          <Form.Item extra="打开控制台查看表单数据">
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </PageHeaderWrapper>
  );
};
