import { stringify } from 'query-string';
import request from 'umi-request';

interface ICommonObj {
  [key: string]: any;
}

interface IResponse {
  success: boolean;
  message?: string;
  data?: any;
  [key: string]: any;
}

interface IResponseOfSearchRecords extends IResponse {
  data: {
    list?: any[];
    total?: number;
    pageNum?: number;
    pageSize?: number;
    [key: string]: any;
  };
}

export async function searchRecords(params: ICommonObj): Promise<IResponseOfSearchRecords> {
  return request(`....URL....?${stringify(params)}`);
}

export async function addRecord(record: ICommonObj): Promise<IResponse> {
  return request('....URL....', {
    method: 'POST',
    requestType: 'form',
    data: record,
  });
}

export async function updateRecord(record: ICommonObj): Promise<IResponse> {
  return request('....URL....', {
    method: 'POST',
    requestType: 'form',
    data: record,
  });
}

export async function deleteRecord(record: ICommonObj): Promise<IResponse> {
  const { id } = record;

  return request('....URL....', {
    method: 'POST',
    requestType: 'form',
    data: { id },
  });
}
