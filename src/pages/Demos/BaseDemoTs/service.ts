export * from '../../../rest-mock/service';mport request from '@/util/request';

import { envConfig } from '@/configs/env';

const { demoHost } = envConfig;

// const getCurrentUserId = () => {
//   return (window.currentUser || {}).workid;
// };

async function demoRequest(url: string, options = {}) {
  return request(`${demoHost}${url}`, {
    ...options,
    // headers: { ...options.headers, 'X-BUC-EMP-ID': getCurrentUserId() },
  });
}

export async function searchRecords(params: any) {
  return demoRequest(
    `/api/v1/demo_rest/searchRecords?${stringify({
      pageSize: 10,
      ...params,
    })}`
  );
}

export async function getRecord(params: any) {
  return demoRequest(
    `/api/v1/demo_rest/getRecord?${stringify({
      ...params,
    })}`
  );
}

export async function updateRecord(record: any) {
  return demoRequest('/api/v1/demo_rest/updateRecord', {
    method: 'POST',
    // requestType: 'json',
    data: record,
  });
}

export async function addRecord(record: any) {
  return demoRequest('/api/v1/demo_rest/addRecord', {
    method: 'POST',
    data: record,
  });
}

export async function deleteRecord(params: any) {
  return demoRequest('/api/v1/demo_rest/deleteRecord', {
    method: 'POST',
    // requestType: 'form',
    data: params,
  });
}

export async function customAction(params: any) {
  return demoRequest('/api/v1/demo_rest/doAction', {
    method: 'POST',
    // requestType: 'form',
    data: params,
  });
}
