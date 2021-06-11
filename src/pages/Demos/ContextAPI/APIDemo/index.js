import React from 'react';
import { useStandContext } from 'stand-admin-antdpro';
import { Card, Button, Modal } from 'antd';
import { customAction } from '@/services/restDemo';
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
    getRecord,
    getRecordMapByIdList,
    toggleChecked,
    checkedList,
    clearChecked,
    updateConfig,
  } = useStandContext();

  const { records, pagination, searchParams } = storeRef;

  // console.log(storeRef);

  // const [, forceUpdate] = useReducer((x) => x + 1, 0);

  const demoList = [
    { label: 'config信息', action: () => inspectObject(config) },
    {
      label: '更新config',
      action: async () => {
        const newStuff = await updateConfig([
          () => {
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve({ newEnum: { a: 1, b: 2 } });
              }, 200);
            });
          },
        ]);

        Modal.info({
          content: (
            <span>
              config 已更新，插入内容：<pre>{JSON.stringify(newStuff, null, 2)}</pre>
            </span>
          ),
        });
      },
    },
    {
      label: 'recordModel相关信息',
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
    { label: '查询[name=10]', action: () => goSearch({ name: '10' }) },
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
      action: async () => {
        callService({
          serviceTitle: `自定义动作`,
          serviceFunction: customAction,
          serviceParams: [{ cmd: 'Just say hi', isErrReq: true }],
        });
      },
    },
    {
      label: `获取记录[id=11]`,
      action: () => {
        getRecord({ [idFieldName]: 11 }).then((record) => {
          inspectObject(record);
        });
      },
    },
    {
      label: `获取记录[id=12,13]`,
      action: () => {
        getRecordMapByIdList([12, 13]).then((record) => {
          inspectObject(record);
        });
      },
    },
    {
      label: `选中首行`,
      action: () => {
        toggleChecked(records[0], true);
      },
    },
    {
      label: `选中本页`,
      action: () => {
        toggleChecked(records, true);
      },
    },
    {
      label: `清空选中`,
      action: () => {
        clearChecked();
      },
    },
    {
      label: `已选取`,
      action: () => {
        inspectObject(checkedList);
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
