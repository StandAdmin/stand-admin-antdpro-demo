import React from 'react';
import { Tag } from 'antd';
import { EditOutlined } from '@ant-design/icons';

import { useStandTableList } from 'stand-admin-antdpro';

import styles from './index.less';

const { CheckableTag } = Tag;

const ListItem = ({ record, extraProps }) => {
  const { showRecordForm, checkedList, toggleChecked, getRecordId } = extraProps;

  return (
    <div
      className={styles.rankItem}
      // checked={selectedTags.indexOf(tag) > -1}
      // onChange={(checked) => this.handleChange(tag, checked)}
    >
      <CheckableTag
        className={styles.rankTag}
        key={record.id}
        checked={checkedList.find((checked) => getRecordId(checked) === getRecordId(record))}
        onChange={(checked) => {
          toggleChecked(record, checked);
        }}
      >
        <div className={styles.rankName}>{record.name}</div>
        <EditOutlined
          className={styles.action}
          onClick={(e) => {
            e.stopPropagation();
            showRecordForm(record);
          }}
        />
      </CheckableTag>
    </div>
  );
};

export default (props) => {
  const { records, context, showRecordForm } = useStandTableList(props);

  const { renderPagination, getRecordId } = context;

  const { checkedList, toggleChecked } = props;

  return (
    <>
      <div className={styles.rankList}>
        {records.map((record) => (
          <ListItem
            key={record.id}
            {...{
              record,
              extraProps: { checkedList, getRecordId, showRecordForm, toggleChecked },
            }}
          />
        ))}
      </div>
      {renderPagination()}
    </>
  );
};
