import React from 'react';
import {
  Input, // DatePicker,
  InputNumber,
  Form,
  Select,
  Button,
} from 'antd';
import { useStandSearchForm, getOptsForStandSearchForm, standUtils } from 'stand-admin-antdpro';
import { SearchOutlined, UndoOutlined, PlusCircleOutlined } from '@ant-design/icons';
import styles from './index.less';

// const { RangePicker } = DatePicker;

export default (props) => {
  const { config, FormItem, context, formProps, resetForm } = useStandSearchForm({
    ...getOptsForStandSearchForm(props),
  });

  const { searchLoading, showEmptyRecordForm } = context;

  return (
    <Form {...formProps} layout="inline" className={styles.form}>
      <FormItem name="id" label="ID">
        <InputNumber />
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

      {/* 

      <FormItem name="d" label="日期">
        <DatePicker showTime />
      </FormItem>

      <FormItem name="dr" label="日期">
        <RangePicker showTime={{ format: 'HH:mm' }} format="YYYY-MM-DD HH:mm" />
      </FormItem> 
      
      */}

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
  );
};
