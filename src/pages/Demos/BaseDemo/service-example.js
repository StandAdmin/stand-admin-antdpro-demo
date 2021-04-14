import { stringify } from 'query-string';
import request from '@/util/request';

import { envConfig } from '@/configs/env';

const { demoHost } = envConfig;

// const getCurrentUserId = () => {
//   return (window.currentUser || {}).workid;
// };

async function demoRequest(url, options = {}) {
  return request(`${demoHost}${url}`, {
    ...options,
    // headers: { ...options.headers, 'X-BUC-EMP-ID': getCurrentUserId() },
  });
}

export async function searchRecords(params) {
  return demoRequest(
    `/api/v1/demo_rest/searchRecords?${stringify({
      pageSize: 10,
      ...params,
    })}`
  );
}

export async function getRecord(params) {
  return demoRequest(
    `/api/v1/demo_rest/getRecord?${stringify({
      ...params,
    })}`
  );
}

export async function updateRecord(record) {
  return demoRequest('/api/v1/demo_rest/updateRecord', {
    method: 'POST',
    // requestType: 'json',
    data: record,
  });
}

export async function addRecord(record) {
  return demoRequest('/api/v1/demo_rest/addRecord', {
    method: 'POST',
    data: record,
  });
}

export async function deleteRecord(params) {
  return demoRequest('/api/v1/demo_rest/deleteRecord', {
    method: 'POST',
    // requestType: 'form',
    data: params,
  });
}

export async function customAction(params) {
  return demoRequest('/api/v1/demo_rest/doAction', {
    method: 'POST',
    // requestType: 'form',
    data: params,
  });
}
