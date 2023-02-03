const generateHrefOptions = (query, deleteOptKey) => {
  delete query.lang;
  delete query.pageSize;
  typeof deleteOptKey === "string" && delete query[deleteOptKey];

  let optionsString = "?";
  for (const [index, [key, value]] of Object.entries(Object.entries(query))) {
    if (index === 0) {
      optionsString += `${key}=${value}`;
    } else {
      optionsString += `&${key}=${value}`;
    }
  }
  return optionsString;
};

export default generateHrefOptions;
