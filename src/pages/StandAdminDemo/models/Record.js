import { getStandModel } from 'stand-admin-antdpro';
import { searchRecords, addRecord, updateRecord, deleteRecord } from '../service';

export const StoreNs = 'DemoRule';

export const StoreNsTitle = 'Rule';

export const idFieldName = 'id';

export const nameFieldName = 'name';

export const modelOpts = {
  StoreNs,
  StoreNsTitle,
  searchRecords,
  addRecord,
  updateRecord,
  deleteRecord,
};

export default getStandModel(modelOpts);
