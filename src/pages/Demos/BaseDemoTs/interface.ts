import type { IContextHocInjectProps, ISelectCtrlHocInjectProps } from 'stand-admin-antdpro';

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

export type TMainComPropsWithRecordsHocInject = IMainComProps & IContextHocInjectProps<IRecord>;

export type TMainComPropsWithListCtrlHocInject = IMainComProps & ISelectCtrlHocInjectProps<IRecord>;

export type TMainComPropsWithStandHocInject =
  | TMainComPropsWithRecordsHocInject
  | TMainComPropsWithListCtrlHocInject;
