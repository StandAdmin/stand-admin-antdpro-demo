import React from 'react';
import { Button, Radio, Form } from 'antd';
import { isMatch } from 'lodash';
import { useStandSearchForm, getOptsForStandSearchForm } from 'stand-admin-antdpro';
import { SearchOutlined, UndoOutlined, PlusCircleOutlined } from '@ant-design/icons';
import styles from './index.less';

// const { RangePicker } = DatePicker;

const myFilterList = [
  { label: '条件A', value: 'a', params: { status: 2, name: '2' } },
  { label: '条件B', value: 'b', params: { status: 1, name: '1' } },
  { label: '条件C', value: 'c', params: { status: 3, name: '3' } },
];

export default (props) => {
  const { FormItem, context, formProps, resetForm, submitForm } = useStandSearchForm({
    ...getOptsForStandSearchForm(props),
    searchParamsFromValues: (values) => {
      const { myFilter } = values;

      const matchFilterItem = myFilterList.find((item) => item.value === myFilter);

      return matchFilterItem ? matchFilterItem.params : undefined;
    },
    searchParamsToValues: (params) => {
      const matchFilterItem = myFilterList.find((item) => {
        return isMatch(params, item.params);
      });

      return matchFilterItem ? { myFilter: matchFilterItem.value } : undefined;
    },
  });

  const { searchLoading, showEmptyRecordForm } = context;

  return (
    <Form {...formProps} layout="inline" className={styles.form}>
      <FormItem name="myFilter">
        <Radio.Group size="middle" buttonStyle="solid" onChange={submitForm}>
          <Radio.Button value={undefined}>不限</Radio.Button>
          {myFilterList.map((item) => (
            <Radio.Button key={item.value} value={item.value}>
              {item.label}
            </Radio.Button>
          ))}
        </Radio.Group>
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
