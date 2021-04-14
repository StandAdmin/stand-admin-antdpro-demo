import React from 'react';
import { useStandContext } from 'stand-admin-antdpro';
import { Card, Button, Modal } from 'antd';
import { customAction } from '@/pages/Demos/BaseDemo/service';
import styles from './index.less';

const inspectObject = (obj) => {
  Modal.info({ content: <pre>{JSON.stringify(obj, null, 2)}</pre> });
};

export default () => {
  const {
    config,
    storeRef,
    blinkRecordById,
    getRecordId,
    showEmptyRecordForm,
    showRecordForm,
    goSearch,
    reloadSearch,
    increaseActionCount,
    decreaseActionCount,
    getActionCount,
    searchLoading,
    idFieldName,
    nameFieldName,
    StoreNsTitle,
    callService,
  } = useStandContext();

  const { records, pagination, searchParams } = storeRef;

  // const [, forceUpdate] = useReducer((x) => x + 1, 0);

  const demoList = [
    { label: 'config信息', action: () => inspectObject(config) },
    {
      label: 'record信息',
      action: () => inspectObject({ idFieldName, nameFieldName, StoreNsTitle }),
    },
    { label: '当前查询参数', action: () => inspectObject(searchParams) },
    { label: '当前分页信息', action: () => inspectObject(pagination) },
    { label: '列表数据', action: () => inspectObject(records) },
    {
      label: '闪烁首行',
      action: () => records.length && blinkRecordById(getRecordId(records[0])),
      extraProps: {
        disabled: !records.length,
      },
    },
    {
      label: '编辑首行',
      action: () => records.length && showRecordForm(records[0]),
      extraProps: {
        disabled: !records.length,
      },
    },
    { label: '弹出新建', action: () => showEmptyRecordForm() },
    { label: '查询[ID=10]', action: () => goSearch({ id: 10 }) },
    { label: '查询刷新', action: () => reloadSearch() },
    { label: `查询中: ${searchLoading}`, action: () => {} },
    {
      label: '动作计数',
      action: () => {
        const modal = Modal.info({ content: '' });

        const updateCount = () => {
          modal.update({
            title: '动作计数',
            content: (
              <div>
                <p>A+B: {getActionCount(['actA', 'actB'])}</p>
                <p>A: {getActionCount('actA')}</p>
                <p>B: {getActionCount('actB')}</p>
              </div>
            ),
          });
        };

        increaseActionCount('actA');
        increaseActionCount('actB');

        setTimeout(() => {
          updateCount();
        }, 0);

        setTimeout(() => {
          decreaseActionCount('actA');
          updateCount();
        }, 1000);

        setTimeout(() => {
          decreaseActionCount('actB');
          updateCount();
        }, 2000);
      },
    },
    {
      label: `请求接口`,
      action: () => {
        callService({
          serviceTitle: `自定义动作`,
          serviceFunction: customAction,
          serviceParams: [{ cmd: 'Just say hi', isErrReq: true }],
        });
      },
    },
  ];

  return (
    <>
      <Card className={styles.container}>
        {demoList.map(({ label, action, extraProps }) => (
          // eslint-disable-next-line react/no-array-index-key
          <Card.Grid hoverable={false} key={label}>
            <Button type="primary" onClick={action} {...extraProps}>
              {label}
            </Button>
          </Card.Grid>
        ))}
      </Card>
    </>
  );
};
