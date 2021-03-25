import React from 'react';
import { Radio, Form } from 'antd';
import { useStandSearchForm, getOptsForStandSearchForm } from 'stand-admin-antdpro';
import styles from './index.less';

// const { RangePicker } = DatePicker;

export default (props) => {
  const { myFilterList } = props;

  const { FormItem, submitForm, formProps } = useStandSearchForm({
    ...getOptsForStandSearchForm(props),
  });

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
    </Form>
  );
};
