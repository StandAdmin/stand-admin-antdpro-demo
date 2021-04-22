import type { IRecordsHocInjectProps, IListCtrlHocInjectProps } from 'stand-admin-antdpro';

export interface IRecord {
  id: number;
  name: string;
  desc: string;
  status: number;
  relIds: number[];
  updatedAt: number;
  createdAt: number;
}

export interface IMainComProps {
  hideSearchForm?: boolean;
}

export type TMainComPropsWithRecordsHocInject = IMainComProps & IRecordsHocInjectProps<IRecord>;

export type TMainComPropsWithListCtrlHocInject = IMainComProps & IListCtrlHocInjectProps<IRecord>;

export type TMainComPropsWithStandHocInject =
  | TMainComPropsWithRecordsHocInject
  | TMainComPropsWithListCtrlHocInject;
