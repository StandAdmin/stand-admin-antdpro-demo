import React from 'react';
import { Radio, Form, Button } from 'antd';
import { useStandSearchForm, getOptsForStandSearchForm } from 'stand-admin-antdpro';
import { PlusCircleOutlined } from '@ant-design/icons';
import styles from './index.less';

export default (props) => {
  const { config, FormItem, context, submitForm, formProps } = useStandSearchForm({
    ...getOptsForStandSearchForm(props),
  });

  const { showRecordForm, storeRef } = context;

  const handleNewRecord = () => {
    // 从查询参数中获取当前的status
    const { status } = storeRef.searchParams;

    showRecordForm(
      status !== undefined ? { name: `状态 - ${config.statusMap[status]}`, status } : undefined,
    );
  };

  return (
    <Form {...formProps} layout="inline" className={styles.form}>
      <FormItem name="status">
        <Radio.Group buttonStyle="solid" onChange={submitForm}>
          <Radio.Button value={undefined}>全部</Radio.Button>
          {Object.keys(config.statusMap).map((k) => (
            <Radio.Button key={k} value={parseInt(k, 10)}>
              {config.statusMap[k]}
            </Radio.Button>
          ))}
        </Radio.Group>
      </FormItem>

      <FormItem className={styles.btnBlock}>
        <Button type="primary" onClick={handleNewRecord} icon={<PlusCircleOutlined />}>
          新增记录
        </Button>
      </FormItem>
    </Form>
  );
};
