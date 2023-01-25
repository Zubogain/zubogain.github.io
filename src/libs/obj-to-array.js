import { isObject } from "lodash";

export const objToArray = (obj) => {
  const listGroup = [];

  isObject(obj) && Object.keys(obj).map((item) => {
    listGroup.push({
      id: obj[item].id,
      name: item,
      staffs: obj[item].staffs
    })
  });

  return listGroup;
}