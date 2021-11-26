function serialize(target, fd, pre = "Tables") {
  //   fd = fd || new FormData();
  fd = fd || [];
  if (typeof target === "object") {
    if (Array.isArray(target)) {
      // 数组
      target.map((item, index) => {
        const key = `${pre}[${index}]`;
        serialize(item, fd, key);
      });
    } else {
      // 对象
      Object.keys(target).forEach((item) => {
        const key = `${pre}.${item}`;
        const value = target[item];
        serialize(value, fd, key);
      });
    }
  } else {
    // 基础数据类型
    // fd.append(pre, target);
    fd.push({ pre, target });
  }
  return fd;
}

module.exports = cloneDeep;
