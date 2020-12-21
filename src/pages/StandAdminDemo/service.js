import { listRecords, getAutoId, buildRecord, matchRecord, delay } from './mock';

export async function searchRecords(params) {
  const { pageNum, pageSize, name, desc, status } = params;

  const allResults = listRecords.filter(
    (item) =>
      matchRecord(item, 'name', name) &&
      matchRecord(item, 'desc', desc) &&
      matchRecord(item, 'status', status),
  );

  return delay(
    {
      success: true,
      data: {
        list: allResults.slice((pageNum - 1) * pageSize, pageNum * pageSize),
        total: allResults.length,
        pageNum,
        pageSize,
      },
    },
    500,
  );
}

export async function updateRecord(record) {
  const matchItem = listRecords.find((item) => item.id === record.id);

  Object.assign(matchItem, record);

  return delay(
    {
      success: true,
      data: matchItem,
    },
    500,
  );
}

export async function addRecord(record) {
  const newRecord = { ...buildRecord(getAutoId()), ...record };

  listRecords.unshift(newRecord);

  return delay(
    {
      success: true,
      data: newRecord,
    },
    500,
  );
}

export async function deleteRecord({ id }) {
  const matchIdx = listRecords.findIndex((item) => item.id === id);

  if (matchIdx < 0) {
    return delay(
      {
        success: false,
        message: `记录不存在:${id}`,
      },
      500,
    );
  }

  const matchItem = listRecords[matchIdx];

  listRecords.splice(matchIdx, 1);

  return delay(
    {
      success: true,
      data: matchItem,
    },
    500,
  );
}
