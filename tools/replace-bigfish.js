const replace = require('replace-in-file');

const replaceMap = {
  '@alipay/bigfish/antd': 'antd',
  '@alipay/bigfish/react': 'react',
  '@alipay/bigfish/util/': '',
  '@ali/stand-admin': 'stand-admin-antdpro',
  '@/page/': '@/pages/',
  '@/component/': '@/components/',
  [`'@alipay/bigfish'`]: `'umi'`,
};

const options = {
  files: ['src/**/*.js', 'src/**/*.ts', 'src/**/*.tsx'],
  from: [],
  to: [],
};

Object.keys(replaceMap).forEach((key) => {
  options.from.push(key);
  options.to.push(replaceMap[key]);
});

replace(options)
  .then((results) => {
    console.log('Replacement results:', results);
  })
  .catch((error) => {
    console.error('Error occurred:', error);
  });
