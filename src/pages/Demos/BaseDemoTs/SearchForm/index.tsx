import React from 'react';
import { Input, InputNumber, Form, Select, Button } from 'antd';
import { useStandSearchForm, getOptsForStandSearchForm, standUtils } from 'stand-admin-antdpro';
import { SearchOutlined, UndoOutlined, PlusCircleOutlined } from '@ant-design/icons';
import type { IRecord, TMainComPropsWithStandHocInject } from '../interface';

import styles from './index.less';

export default (props: TMainComPropsWithStandHocInject) => {
  const {
    config,
    FormItem,
    context,
    formProps,
    resetForm,
    renderFormHistroyTrigger,
  } = useStandSearchForm<IRecord>({
    ...getOptsForStandSearchForm(props),
  });

  const { searchLoading, showEmptyRecordForm } = context;

  return (
    <>
      <div style={{ float: 'right' }}>{renderFormHistroyTrigger()}</div>
      <Form {...formProps} layout="inline" className={styles.form}>
        <FormItem name="id" label="ID">
          <InputNumber min={1} />
        </FormItem>

        <FormItem name="name" label="规则名称">
          <Input style={{ width: 150 }} />
        </FormItem>

        <FormItem name="desc" label="描述">
          <Input style={{ width: 150 }} />
        </FormItem>

        <FormItem name="status" label="状态">
          <Select
            placeholder="不限"
            allowClear
            style={{ width: 100 }}
            options={standUtils.mapToOptions(config.statusMap, { valueFilter: parseInt })}
          />
        </FormItem>

        <FormItem className={styles.btnBlock}>
          <Button
            icon={<SearchOutlined />}
            type="primary"
            htmlType="submit"
            style={{ width: 100 }}
            loading={searchLoading}
          >
            查询
          </Button>
          <Button icon={<UndoOutlined />} style={{ width: 100 }} onClick={resetForm}>
            重置
          </Button>
          <Button type="primary" onClick={showEmptyRecordForm} icon={<PlusCircleOutlined />}>
            新增记录
          </Button>
        </FormItem>
      </Form>
    </>
  );
};
