import _ from "lodash";
//paginate data in clinet side
export function paginate(items, pageNuamber, pageSize) {
  const startIndex = (pageNuamber - 1) * pageSize;
  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
}
