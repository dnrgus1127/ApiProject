export type RestData = {
  id: number;
  title: string;
  url: string;
  method: "get" | "post" | "patch" | "delete" | "put";
  description: string;
  request: {
    header?: RestTableData;
    body?: RestTableData;
  };
  response: {
    body?: RestTableData;
  };
  header: RestTableData;
};

export type RowObject = {
  [key: string]: string | boolean;
  name: string;
  description: string;
  required: boolean;
};
type ColObjectList = {
  name: string;
  name_kr: string;
};

export type RestTableData = {
  colObjectList: ColObjectList[];
  rowObjectList: RowObject[];
};
