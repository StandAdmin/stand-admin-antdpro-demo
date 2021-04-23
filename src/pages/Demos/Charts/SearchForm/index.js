import React from 'react';
import { Radio, Form } from 'antd';
import { useStandSearchForm, getOptsForStandSearchForm, standUtils } from 'stand-admin-antdpro';
import styles from './index.less';

// const { RangePicker } = DatePicker;

export default (props) => {
  const { config, FormItem, submitForm, formProps } = useStandSearchForm({
    ...getOptsForStandSearchForm(props),
  });

  return (
    <Form {...formProps} layout="inline" className={styles.form}>
      <FormItem name="status">
        <Radio.Group size="middle" buttonStyle="solid" onChange={submitForm}>
          <Radio.Button value={undefined}>不限</Radio.Button>
          {standUtils.mapToOptions(config.statusMap, { valueFilter: parseInt }).map((item) => (
            <Radio.Button key={item.value} value={item.value}>
              {item.label}
            </Radio.Button>
          ))}
        </Radio.Group>
      </FormItem>
    </Form>
  );
};
