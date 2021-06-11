import React from 'react';
import {
  defineContextHocParams,
  useStandSearchForm,
  StandContextHoc,
  buildStandRecordModelPkg,
} from 'stand-admin-antdpro';

import { Input, Form } from 'antd';

import { getRecord } from '@/services/restDemo';

export const recordModel = buildStandRecordModelPkg({
  /** 利用getRecord封装searchRecords */
  searchRecords: (params) => {
    const { id } = params;

    return getRecord({ id }).then((resp) => {
      if (!resp.success) {
        return resp;
      }

      return {
        success: true,
        // searchRecords 的接口格式
        data: { list: resp.data ? [resp.data] : [] },
      };
    });
  },
});

function MainComp() {
  const { context, FormItem, formProps } = useStandSearchForm();

  const {
    searchLoading,
    storeRef: { records },
  } = context;

  const record = records && records[0];

  return (
    <>
      <Form {...formProps} layout="inline">
        <FormItem name="id" noStyle>
          <Input.Search
            size="middle"
            loading={searchLoading}
            placeholder="输入ID查询"
            style={{ width: 200 }}
          />
        </FormItem>
      </Form>
      {record && <pre>{JSON.stringify(record, null, 2)}</pre>}
    </>
  );
}

const hocParams = defineContextHocParams({
  recordModel,
  /**
   * 默认的查询参数
   */
  defaultSearchParams: { id: 20 },
});

// 默认的主组件
export default StandContextHoc(hocParams)(MainComp);
