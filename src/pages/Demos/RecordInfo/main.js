import React from 'react';
import {
  defineContextHocParams,
  useStandSearchForm,
  StandRecordInfoHoc,
} from 'stand-admin-antdpro';

import { Input, Form } from 'antd';

import { configModel, recordModel } from '../BaseDemo/main';

function MainComp(props) {
  const { FormItem, formProps } = useStandSearchForm();

  const { recordInfoLoading, recordInfo } = props;

  return (
    <>
      <Form {...formProps} layout="inline">
        <FormItem name="id" noStyle>
          <Input.Search
            size="middle"
            loading={recordInfoLoading}
            placeholder="输入ID查询"
            style={{ width: 200 }}
          />
        </FormItem>
      </Form>
      {recordInfo && <pre>{JSON.stringify(recordInfo, null, 2)}</pre>}
    </>
  );
}

const hocParams = defineContextHocParams({
  configModel,
  recordModel,
  /**
   * 默认的查询参数
   */
  defaultSearchParams: { id: 20 },
});

// 默认的主组件
export default StandRecordInfoHoc(hocParams)(MainComp);
