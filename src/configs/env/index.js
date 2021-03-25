import dailyEnv from './daily';
import prodEnv from './prod';
import preEnv from './pre';
import localEnv from './local';
import defaultEnv from './default';

const envList = [
  { env: 'local', hostnameRegex: [/localhost/i, /local\./i], config: localEnv },
  { env: 'daily', hostnameRegex: [/\.net/, /\.test/], config: dailyEnv },
  { env: 'pre', hostnameRegex: [/^pre-/, /\.pre-/], config: preEnv },
  { env: 'prod', hostnameRegex: [/\.com/], config: prodEnv },
];

const { hostname } = window.location;

const machedEnv = envList.find((item) => {
  return !!item.hostnameRegex.find((regex) => {
    return regex.test(hostname);
  });
}) || {
  env: 'default',
  config: defaultEnv,
};

export const { env } = machedEnv;

export const envConfig = {
  ...defaultEnv,
  ...machedEnv.config,
};
