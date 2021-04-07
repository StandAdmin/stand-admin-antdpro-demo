import { Settings as ProSettings } from '@ant-design/pro-layout';

type DefaultSettings = Partial<ProSettings> & {
  pwa: boolean;
  customTheme: any;
};

const proSettings: DefaultSettings = {
  navTheme: 'dark',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'side',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: 'StandAdmin',
  pwa: false,
  iconfontUrl: '',

  customTheme: {
    'font-size-base': '13px',
    /* 间距相关 */
    'padding-lg': '24px', // containers
    'padding-md': '16px', // small containers and buttons
    'padding-sm': '12px', // Form controls and items
    'padding-xs': '8px', // small items
    /* Button相关 */
    'btn-height-sm': '28px',
    /* Table相关start */
    'table-header-bg': '#F7F8FA',
    'table-header-color': '#333B4E',
    'table-selected-row-bg': '#F2F4FB',
    /* color相关start */
    // 'shadow-color': '#EDF1F4',
    'shadow-color': 'rgba(47, 137, 200, 0.1)',
    'shadow-1-down': '0 2px 20px 0 rgba(47, 137, 200, 0.1)',
    // 'border-color-base': '#DCE6EC',
    'border-color-base': '#DCDFE6',
    // 'border-color-split': '#EEF4F9',
    'border-color-split': '#EBEEF5',

    // 'primary-color': '#3FA3FF',
    // 'link-color': '#3FA3FF',

    'primary-color': '#5689FF',
    'primary-1': '#F2F4FB',
    'link-color': '#569DEF',

    // 'success-color': '#7CE5CA',
    'success-color': '#08CD9A',
    // 'warning-color': '#FFC8B2',
    'warning-color': '#FFBD4B',
    // 'background-color-light': '#F8F8F8',
    'background-color-light': '#F7F8FA',

    'modal-mask-bg': 'rgba(0, 0, 0, 0.2)',
    'input-placeholder-color': '#A6AEB5',
    /* 文本相关start */
    'heading-color': '#333B4E', // 标题色
    'text-color': '#666F80', // 正文色
    'text-color-secondary': '#A6AEB5',

    /* tabs */
    'tabs-hover-color': '#5689FF',
    'tabs-active-color': '#5689FF',

    /* component */
    'component-background': '#fff',

    /* 2019视觉 */
    'background-color-new': '#F7F8FA', // small items
    'processing-color': '#569DFF',
    'border-color-light': '#F1F2F6',
    'youku-blue': '#3A9FFF',
    'info-color': '#569DFF',
    'error-color': '#FE5280',
  },
};

export type { DefaultSettings };

export default proSettings;
