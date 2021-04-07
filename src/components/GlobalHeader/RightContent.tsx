import { Settings as ProSettings } from '@ant-design/pro-layout';
import { GithubOutlined } from '@ant-design/icons';
import React from 'react';
import { connect, ConnectProps } from 'umi';
import { ConnectState } from '@/models/connect';
import Avatar from './AvatarDropdown';
import styles from './index.less';

export interface GlobalHeaderRightProps extends Partial<ConnectProps>, Partial<ProSettings> {
  theme?: ProSettings['navTheme'] | 'realDark';
}

const GlobalHeaderRight: React.SFC<GlobalHeaderRightProps> = (props) => {
  const { theme, layout } = props;
  let className = styles.right;

  if (theme === 'dark' && layout === 'top') {
    className = `${styles.right}  ${styles.dark}`;
  }

  return (
    <div className={className}>
      <a
        style={{
          color: 'inherit',
        }}
        target="_blank"
        href="https://pro.ant.design/docs/getting-started"
        rel="noopener noreferrer"
        className={styles.action}
      >
        AntdPro
      </a>

      <a
        style={{
          color: 'inherit',
        }}
        target="_blank"
        href="https://github.com/rooseve/stand-admin-antdpro-demo/tree/main/src/pages"
        rel="noopener noreferrer"
        className={styles.action}
      >
        <GithubOutlined />
        Source
      </a>
      <Avatar />
    </div>
  );
};

export default connect(({ settings }: ConnectState) => ({
  theme: settings.navTheme,
  layout: settings.layout,
}))(GlobalHeaderRight);
