import { getStandConfigModel } from 'stand-admin-antdpro';

export const StoreNs = 'DemoConfig';

const modelObj = getStandConfigModel({
  StoreNs,
  getConfig: [
    async () => {
      return {
        statusMap: {
          0: 'default',
          1: 'running',
          2: 'online',
          3: 'abnormal',
        },
      };
    },
    {
      boolMap: {
        0: 'No',
        1: 'Yes',
      },
    },
  ],
});

export default modelObj;
