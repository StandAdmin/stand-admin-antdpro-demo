import React from 'react';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

import Main from './main';

export default (props) => (
  <PageHeaderWrapper>
    <p>
      如果同时需要多个编辑表单，可以通过showRecordForm的第二个参数指定一个tag，然后在useStandUpsertForm中通过
      isModalVisible 判断当前tag是否匹配，以此来控制不同编辑表单的显隐
    </p>
    <Main {...props} />
  </PageHeaderWrapper>
);
