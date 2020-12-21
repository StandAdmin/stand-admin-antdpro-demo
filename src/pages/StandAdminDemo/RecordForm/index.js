import React from 'react';
import { Form, Modal, Button, Input, Radio } from 'antd';
import { useStandUpsertForm, getOptsForStandUpsertForm, standUtils } from 'stand-admin-antdpro';

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

export default (props) => {
  const { config, context, formProps, modalProps } = useStandUpsertForm({
    ...getOptsForStandUpsertForm(props, {
      // 默认值
      defaultValues: {
        status: 0,
      },
    }),
    // 接口数据（通常来自于列表接口）转换为表单数据
    recordToValues: (record) => {
      return {
        ...record,
      };
    },
    // 表单数据转为接口数据（后续会传递给 addRecord/updateRecord）
    recordFromValues: (values) => {
      return {
        ...values,
      };
    },
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
        <FormItem name="name" label="规则名称" rules={[{ required: true }]}>
          <Input allowClear />
        </FormItem>

        <FormItem name="desc" label="规则描述" rules={[{ required: true }]}>
          <TextArea placeholder="请输入用户组描述" rows={3} allowClear />
        </FormItem>

        <FormItem name="status" label="状态" rules={[{ required: true }]}>
          <Radio.Group
            options={standUtils.mapToOptions(config.statusMap, { valueFilter: parseInt })}
          />
        </FormItem>
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
