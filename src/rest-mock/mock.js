const listRecords = [];

function matchRecord(record, fld, val) {
  if (!val && val !== 0) {
    return true;
  }

  const targetVal = record[fld];

  switch (typeof targetVal) {
    case 'string':
      return targetVal.toLowerCase().indexOf(val.toLowerCase()) >= 0;

    case 'number':
      return Math.abs(targetVal - val) < 1e-3;

    default:
      return false;
  }
}

let baseId = 1000;

function getAutoId() {
  baseId += 1;
  return baseId;
}

function randNum(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function buildRecord(i) {
  const now = Date.now();
  return {
    id: i,
    name: `名称${i}`,
    desc: `描述${i}`,
    status: Math.floor(Math.random() * 10) % 4,
    relIds: [randNum(10, 100), randNum(10, 100)],
    updatedAt: now - i * 1000 * 60,
    createdAt: now - i * 1000 * 60,
    progress: randNum(10, 100),
  };
}

for (let i = 100; i >= 1; i -= 1) {
  listRecords.push(buildRecord(i));
}

function packResp(servName, params, result, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.warn(`请求: ${servName}`, params);
      console.log('返回: ', result);
      resolve(result);
    }, time);
  });
}

export { packResp, listRecords, buildRecord, getAutoId, matchRecord };
