import { Space } from 'antd';
// import { QuestionCircleOutlined, GithubOutlined } from '@ant-design/icons';
import React from 'react';
import { useModel } from 'umi';
import Avatar from './AvatarDropdown';
import HeaderSearch from '../HeaderSearch';
import styles from './index.less';
export type SiderTheme = 'light' | 'dark';

const GlobalHeaderRight: React.FC = () => {
  const { initialState } = useModel('@@initialState');

  if (!initialState || !initialState.settings) {
    return null;
  }

  const { navTheme, layout } = initialState.settings;
  let className = styles.right;

  if ((navTheme === 'dark' && layout === 'top') || layout === 'mix') {
    className = `${styles.right}  ${styles.dark}`;
  }

  return (
    <Space className={className}>
      <HeaderSearch
        className={`${styles.action} ${styles.search}`}
        placeholder="站内搜索"
        defaultValue="umi ui"
        options={[
          {
            label: <a href="https://umijs.org/zh/guide/umi-ui.html">umi ui</a>,
            value: 'umi ui',
          },
          {
            label: <a href="next.ant.design">Ant Design</a>,
            value: 'Ant Design',
          },
          {
            label: <a href="https://protable.ant.design/">Pro Table</a>,
            value: 'Pro Table',
          },
          {
            label: <a href="https://prolayout.ant.design/">Pro Layout</a>,
            value: 'Pro Layout',
          },
        ]} // onSearch={value => {
        //   console.log('input', value);
        // }}
      />
      <a
        target="_blank"
        href="  https://github.com/rooseve/stand-admin-antdpro/tree/main/docs"
        rel="noopener noreferrer"
        className={styles.action}
      >
        Docs
      </a>

      <a
        target="_blank"
        href="https://github.com/rooseve/stand-admin-antdpro-demo/tree/main/src/pages/Demos"
        rel="noopener noreferrer"
        className={styles.action}
      >
        Source
      </a>

      <a
        target="_blank"
        href="https://pro.ant.design"
        rel="noopener noreferrer"
        className={styles.action}
      >
        AntdPro
      </a>

      <Avatar />
    </Space>
  );
};

export default GlobalHeaderRight;
