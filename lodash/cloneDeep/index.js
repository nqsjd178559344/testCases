function isObject(value) {
  return value && typeof value === "object";
}

function cloneDeep(target) {
  if (!isObject(target)) {
    return target;
  }
  function baseClone(target) {
    if (isObject(target)) {
      let result = Array.isArray(target) ? [] : {};
      if (Array.isArray(target)) {
        target.forEach((item, index) => {
          let res = baseClone(item);
          result[index] = res;
        });
      } else {
        for (const key in target) {
          if (Object.hasOwnProperty.call(target, key)) {
            const item = target[key];
            let res = baseClone(item);
            result[key] = res;
          }
        }
      }
      return result;
    } else {
      return target;
    }
  }
  let result = baseClone(target);
  return result;
}

module.exports = cloneDeep;

function funA({ a: b }) {
  console.log(b, "b");
}

funA(1);

export function a() {
  console.log(2);
}
