export type User = {
  name: string,
  email: string,
  phone: string,
};

export type TableCellData = {
  cellID: number,
  name: string,
  time: string,
  data: string
};

export type TimeTableData = TableCellData[];
