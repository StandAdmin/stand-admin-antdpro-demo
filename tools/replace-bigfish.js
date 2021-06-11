// const fs = require('fs');
const replace = require('replace-in-file');

const replaceMap = {
  '@alipay/bigfish/antd': 'antd',
  '@alipay/bigfish/react': 'react',
  '@alipay/bigfish/hooks': 'ahooks',
  '@alipay/bigfish/util/': '',
  '@ali/stand-admin': 'stand-admin-antdpro',
  '@/page/': '@/pages/',
  '@/component/': '@/components/',
  [`'@alipay/bigfish'`]: `'umi'`,
};

const options = {
  files: ['src/pages/**/*.js', 'src/pages/**/*.ts', 'src/pages/**/*.tsx'],
  from: [],
  to: [],
};

Object.keys(replaceMap).forEach((key) => {
  options.from.push(key);
  options.to.push(replaceMap[key]);
});

Promise.all([
  replace(options),
  replace({
    files: options.files,
    from: /<a[\s\S]*?\.abf\.[\s\S]*?>([\s\S]*?)<\/a>/m,
    to: (match, p1) => p1.trim(),
  }),
])
  // .then((results) => {
  //   console.log('Replacement results:', results);
  // })
  .catch((error) => {
    console.error('Error occurred:', error);
  });
