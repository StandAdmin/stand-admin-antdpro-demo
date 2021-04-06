import { listRecords, getAutoId, buildRecord, matchRecord, packResp } from './mock';

const recordKeys = Object.keys(buildRecord(0));

async function searchRecords(params) {
  const {
    pageNum: origPageNum = 1,
    pageSize: origPageSize = 10,
    sortByField,
    sortByOrder,
    ...searchParams
  } = params;

  const pageNum = parseInt(origPageNum, 10);

  const pageSize = parseInt(origPageSize, 10);

  const allResults = listRecords
    // 处置相等 a=v
    .filter((item) => {
      return !Object.keys(searchParams)
        .filter((k) => recordKeys.indexOf(k) >= 0)
        .some((f) => !matchRecord(item, f, searchParams[f]));
    })
    // 处置范围 _in_a=v1,v2
    .filter((item) => {
      return !Object.keys(searchParams)
        .filter((k) => k.indexOf('_in_') === 0)
        .some((f) => {
          const field = f.substr('_in_'.length);
          const inVals = (searchParams[f] || '').split(',');

          return !inVals.some((val) => matchRecord(item, field, val));
        });
    });

  if (sortByField && sortByOrder) {
    allResults.sort((a, b) => {
      const aVal = a[sortByField];
      const bVal = b[sortByField];

      if (aVal === bVal) {
        return 0;
      }

      return (sortByOrder === 'ascend' ? 1 : -1) * (aVal < bVal ? -1 : 1);
    });
  }

  return packResp(
    'searchRecords',
    params,
    {
      success: true,
      data: {
        list: allResults.slice((pageNum - 1) * pageSize, pageNum * pageSize),
        total: allResults.length,
        pageNum,
        pageSize,
      },
    },
    100
  );
}

async function getRecord(params) {
  return packResp(
    'getRecord',
    params,
    {
      success: true,
      data: listRecords.find((item) => {
        return !Object.keys(params).some((f) => !matchRecord(item, f, params[f]));
      }),
    },
    100
  );
}

async function updateRecord(record) {
  const matchItem = listRecords.find((item) => matchRecord(item, 'id', record.id));

  Object.assign(matchItem, record);

  return packResp(
    'updateRecord',
    record,
    {
      success: true,
      data: matchItem,
    },
    100
  );
}

async function customAction(params) {
  const { isErrReq } = params;

  return packResp(
    'customAction',
    params,
    isErrReq
      ? {
          success: false,
          message: `请求已收到：${JSON.stringify(params, null, 2)}`,
        }
      : { success: true },
    100
  );
}

async function addRecord(record) {
  const newRecord = { ...buildRecord(getAutoId()), ...record };

  listRecords.unshift(newRecord);

  return packResp(
    'addRecord',
    record,
    {
      success: true,
      data: newRecord,
    },
    100
  );
}

async function deleteRecord(params) {
  const { id } = params;

  const matchIdx = listRecords.findIndex((item) => matchRecord(item, 'id', id));

  if (matchIdx < 0) {
    return packResp(
      'deleteRecord',
      params,
      {
        success: false,
        message: `记录不存在:${id}`,
      },
      100
    );
  }

  const matchItem = listRecords[matchIdx];

  listRecords.splice(matchIdx, 1);

  return packResp(
    'deleteRecord',
    params,
    {
      success: true,
      data: matchItem,
    },
    100
  );
}

export { customAction, searchRecords, addRecord, getRecord, updateRecord, deleteRecord };
