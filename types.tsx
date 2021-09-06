export type User = {
  attributes: {
    "email": string,
    "email_verified": boolean,
    "sub": string,
    "custom:year": number
  },
  "id": string,
  "username": string
  
};

export type TableCellData = {
  cellID: number,
  name: string,
  time: string,
  data: string
};

export type TimeTableData = TableCellData[];
