const format = "YYYY-MM-DD HH:mm:ss";
const dateFormat = "YYYY-MM-DD";
const timeFormat = "HH:mm:ss";
var moment = require("moment");

function canToNumber(x) {
  return !isNaN(Number(x));
}

const isNumber = (x) => typeof x === "number";

function toFormat(dateTime, formatMethod = format, isUtc = false) {
  if (!dateTime) return null;

  // todo 对象/数组均可被format, 但与期望不符,故将其转为为空
  const isArray = typeof dateTime === "object" && Array.isArray(dateTime);
  const isObject =
    Object.prototype.toString.call(dateTime) === "[object Object]" &&
    !moment.isMoment(dateTime);

  const isBoolean = typeof dateTime === "boolean";

  if (isArray || isObject || isBoolean) {
    return null;
  }

  // todo 数字 或 可转为数字<除moment类型外>的string 原样返回

  if (
    isNumber(dateTime) ||
    (!moment.isMoment(dateTime) && canToNumber(dateTime))
  ) {
    return dateTime;
  }

  const momentValue = moment.isMoment(dateTime) ? dateTime : moment(dateTime);
  if (momentValue.isValid()) {
    if (isUtc) {
      return momentValue.utc().format(formatMethod);
    }
    return momentValue.format(formatMethod);
  }

  // todo 如为不可format 的 string 则原样返回
  const isString = typeof dateTime === "string";

  if (isString) {
    return dateTime;
  }

  return null;
}

function toMoment(dateTime, formatMethod = format) {
  // 吃掉不符合的转换类型
  if (!dateTime) return null;
  const isBoolean = typeof dateTime === "boolean";
  const isArray = typeof dateTime === "object" && Array.isArray(dateTime);
  const isObject =
    Object.prototype.toString.call(dateTime) === "[object Object]" &&
    !moment.isMoment(dateTime);
  if (isBoolean || isArray || isObject) {
    return null;
  }

  let momentValue = dateTime;
  if (!moment.isMoment(dateTime)) {
    momentValue = moment(dateTime, formatMethod, formatMethod !== format);
  }
  console.log(dateTime, "dateTime", momentValue);
  if (momentValue.isValid()) {
    return momentValue;
  }
  return null;
}

module.exports = { toFormat, toMoment, format, dateFormat, timeFormat };
