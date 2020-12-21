const listRecords = [];

export function matchRecord(record, fld, val) {
  if (!val) {
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

export function getAutoId() {
  baseId += 1;
  return baseId;
}

export function buildRecord(i) {
  return {
    id: i + 1,
    name: `规则${i + 1}`,
    desc: `描述${i + 1}`,
    callNo: Math.floor(Math.random() * 1000),
    status: Math.floor(Math.random() * 10) % 4,
    updatedAt: new Date() - i * 1000 * 60,
    createdAt: new Date() - i * 1000 * 60,
    progress: Math.ceil(Math.random() * 100),
  };
}

for (let i = 0; i < 100; i += 1) {
  listRecords.push(buildRecord(i));
}

export function delay(result, time) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(result), time);
  });
}

export { listRecords };
