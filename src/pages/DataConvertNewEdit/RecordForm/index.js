import React from 'react';
import moment from 'moment';
import { Form, Modal, DatePicker, Button, Input, Radio } from 'antd';
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

export default (props) => {
  const { config, context, formProps, modalProps } = useStandUpsertForm({
    ...getOptsForStandUpsertForm(props, {
      // 默认值
      defaultValues: {
        status: 1,
      },
    }),
    // 接口数据（通常来自于列表接口）转换为表单数据
    recordToValues: (record) => {
      const { updatedAt } = record;
      return {
        ...record,
        // 转为DatePicker需要的moment格式
        updatedAt: moment(updatedAt),
      };
    },
    // 表单数据转为接口数据（后续会传递给 addRecord/updateRecord）
    recordFromValues: (values) => {
      const { updatedAt } = values;

      return {
        ...values,
        // 转为接口需要的timestamp格式
        updatedAt: updatedAt.valueOf(),
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
        <FormItem name="updatedAt" label="修改时间" extra="日期控件返回的moment数据需要转换">
          <DatePicker showTime allowClear />
        </FormItem>

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
