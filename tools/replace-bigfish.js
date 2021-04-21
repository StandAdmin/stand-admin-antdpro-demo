const fs = require('fs');
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
    files: ['src/pages/**/service.js', 'src/pages/**/service.ts'],
    from: (file) => {
      // console.log(file);
      return fs.readFileSync(file, { encoding: 'utf8' });
    },
    to: `export * from '../../../rest-mock/service';`,
  }),
])
  // .then((results) => {
  //   console.log('Replacement results:', results);
  // })
  .catch((error) => {
    console.error('Error occurred:', error);
  });
