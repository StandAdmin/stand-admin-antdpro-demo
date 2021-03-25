import React from 'react';
import { Form, Modal, Button, Input, Radio } from 'antd';
import { useStandUpsertForm, getOptsForStandUpsertForm, standUtils } from 'stand-admin-antdpro';

import { SelectCtrl as BaseDemoSelectCtrl } from '@/pages/BaseDemo/main';

const FormItem = Form.Item;
const { TextArea } = Input;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

const isModalVisible = (v) => {
  return v === true;
};

export default (props) => {
  const { config, context, formProps, modalProps } = useStandUpsertForm({
    isModalVisible,
    ...getOptsForStandUpsertForm(props, {
      // 默认值
      defaultValues: {
        status: 1,
      },
    }),
  });

  const { getActionCount } = context;

  const isSubmitting = getActionCount() > 0;

  return (
    <Modal
      // forceRender
      {...modalProps}
      width="70%"
      footer={null}
    >
      <Form {...formProps} {...formItemLayout}>
        <FormItem name="name" label="名称" rules={[{ required: true }]}>
          <Input allowClear />
        </FormItem>

        <FormItem name="desc" label="描述" rules={[{ required: true }]}>
          <TextArea placeholder="请输入描述" rows={3} allowClear />
        </FormItem>

        <FormItem name="status" label="状态" rules={[{ required: true }]}>
          <Radio.Group
            options={standUtils.mapToOptions(config.statusMap, { valueFilter: parseInt })}
          />
        </FormItem>

        <Form.Item
          label="关联ID"
          name="relIds"
          valuePropName="checkedIdList"
          rules={[{ required: true }]}
        >
          <BaseDemoSelectCtrl.IdSelectCtrl />
        </Form.Item>

        <FormItem
          wrapperCol={{
            xs: { span: 24, offset: 0 },
            sm: { span: 16, offset: 6 },
          }}
        >
          <Button
            style={{ width: 150, display: 'block' }}
            type="primary"
            htmlType="submit"
            loading={isSubmitting}
          >
            提交
          </Button>
        </FormItem>
      </Form>
    </Modal>
  );
};
