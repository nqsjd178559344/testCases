var { toFormat, toMoment, format, dateFormat, timeFormat } = require("./index");
var moment = require("moment");
var expect = require("chai").expect;

describe("toFormat basic", function () {
  // !
  it("null", function () {
    expect(toFormat(null)).to.be.equal(null);
  });
  it("undefined", function () {
    expect(toFormat(undefined)).to.be.equal(null);
  });

  it("0", function () {
    expect(toFormat(0)).to.be.equal(null);
  });

  it("false", function () {
    expect(toFormat(false)).to.be.equal(null);
  });

  it("", function () {
    expect(toFormat("")).to.be.equal(null);
  });

  // bool
  it("true", function () {
    expect(toFormat(true)).to.be.equal(null);
  });

  // number
  it("-1", function () {
    expect(toFormat(-1)).to.be.equal(-1);
  });

  it("-233", function () {
    expect(toFormat(-233)).to.be.equal(-233);
  });

  it("233", function () {
    expect(toFormat(233)).to.be.equal(233);
  });

  // string<可转为number>
  it("0", function () {
    expect(toFormat("0")).to.be.equal("0");
  });

  it("1", function () {
    expect(toFormat("1")).to.be.equal("1");
  });

  it("000", function () {
    expect(toFormat("000")).to.be.equal("000");
  });

  it("11111", function () {
    expect(toFormat("11111")).to.be.equal("11111");
  });

  // string<不可转为number>
  it("string", function () {
    expect(toFormat("string")).to.be.equal("string");
  });

  it("a9a9a9a9a9", function () {
    expect(toFormat("a9a9a9a9a9")).to.be.equal("a9a9a9a9a9");
  });

  //   it("window", function () {
  //     expect(toFormat(window)).to.be.equal(null);
  //   });

  //   数组
  const array = [1, 2, 3];
  it("array", function () {
    expect(toFormat(array)).to.be.equal(null);
  });

  //   对象
  const obj = { a: 1 };

  it("obj", function () {
    expect(toFormat(obj)).to.be.equal(null);
  });

  const deepObj = { a: { b: { c: { d: { f: 1 } } } } };

  it("deepObj", function () {
    expect(toFormat(deepObj)).to.be.equal(null);
  });
});

//   时间
describe("toFormat dateTime", function () {
  const dateTime = moment();

  const dateTimeAfterFormat = moment(dateTime).format(format);
  const date = moment(dateTime).format(dateFormat);
  const time = moment(dateTime).format(timeFormat);
  //  时间 format
  it("moment format", function () {
    expect(toFormat(moment(), format)).to.be.equal(moment().format(format));
  });

  it("dateTime 默认", function () {
    expect(toFormat(dateTime)).to.be.equal(dateTimeAfterFormat);
  });

  it("dateTime format", function () {
    expect(toFormat(dateTime, format)).to.be.equal(dateTimeAfterFormat);
  });

  it("dateTime format false", function () {
    expect(toFormat(dateTime, format, false)).to.be.equal(dateTimeAfterFormat);
  });

  //  时间 dateFormat

  it("moment dateFormat", function () {
    expect(toFormat(moment(), dateFormat)).to.be.equal(
      moment().format(dateFormat)
    );
  });

  it("dateTime dateFormat", function () {
    expect(toFormat(dateTime, dateFormat)).to.be.equal(date);
  });

  it("dateTime dateFormat false", function () {
    expect(toFormat(dateTime, dateFormat, false)).to.be.equal(date);
  });

  //  时间 timeFormat
  it("moment timeFormat", function () {
    expect(toFormat(moment(), timeFormat)).to.be.equal(
      moment().format(timeFormat)
    );
  });

  it("dateTime timeFormat", function () {
    expect(toFormat(dateTime, timeFormat)).to.be.equal(time);
  });

  it("dateTime timeFormat false", function () {
    expect(toFormat(dateTime, timeFormat, false)).to.be.equal(time);
  });
});

describe("toFormat dateTime1", function () {
  // !

  //   时间
  const dateTime = moment().format(format);

  const dateTimeAfterFormat = moment(dateTime).format(format);
  const date = moment(dateTime).format(dateFormat);
  const time = moment(dateTime).format(timeFormat);

  //  时间 format
  it("moment format", function () {
    expect(toFormat(moment(), format)).to.be.equal(moment().format(format));
  });

  it("dateTime 默认", function () {
    expect(toFormat(dateTime)).to.be.equal(dateTimeAfterFormat);
  });

  it("dateTime format", function () {
    expect(toFormat(dateTime, format)).to.be.equal(dateTimeAfterFormat);
  });

  it("dateTime format false", function () {
    expect(toFormat(dateTime, format, false)).to.be.equal(dateTimeAfterFormat);
  });

  //  时间 dateFormat

  it("moment dateFormat", function () {
    expect(toFormat(moment(), dateFormat)).to.be.equal(
      moment().format(dateFormat)
    );
  });

  it("dateTime dateFormat", function () {
    expect(toFormat(dateTime, dateFormat)).to.be.equal(date);
  });

  it("dateTime dateFormat false", function () {
    expect(toFormat(dateTime, dateFormat, false)).to.be.equal(date);
  });

  //  时间 timeFormat
  it("moment timeFormat", function () {
    expect(toFormat(moment(), timeFormat)).to.be.equal(
      moment().format(timeFormat)
    );
  });

  it("dateTime timeFormat", function () {
    expect(toFormat(dateTime, timeFormat)).to.be.equal(time);
  });

  it("dateTime timeFormat false", function () {
    expect(toFormat(dateTime, timeFormat, false)).to.be.equal(time);
  });
});

describe("toFormat dateTime2", function () {
  const dateTime = moment().toISOString();

  const dateTimeAfterFormat = moment(dateTime).format(format);
  const date = moment(dateTime).format(dateFormat);
  const time = moment(dateTime).format(timeFormat);

  //  时间 format
  it("moment format", function () {
    expect(toFormat(moment(), format)).to.be.equal(moment().format(format));
  });

  it("dateTime 默认", function () {
    expect(toFormat(dateTime)).to.be.equal(dateTimeAfterFormat);
  });

  it("dateTime format", function () {
    expect(toFormat(dateTime, format)).to.be.equal(dateTimeAfterFormat);
  });

  it("dateTime format false", function () {
    expect(toFormat(dateTime, format, false)).to.be.equal(dateTimeAfterFormat);
  });

  //  时间 dateFormat

  it("moment dateFormat", function () {
    expect(toFormat(moment(), dateFormat)).to.be.equal(
      moment().format(dateFormat)
    );
  });

  it("dateTime dateFormat", function () {
    expect(toFormat(dateTime, dateFormat)).to.be.equal(date);
  });

  it("dateTime dateFormat false", function () {
    expect(toFormat(dateTime, dateFormat, false)).to.be.equal(date);
  });

  //  时间 timeFormat
  it("moment timeFormat", function () {
    expect(toFormat(moment(), timeFormat)).to.be.equal(
      moment().format(timeFormat)
    );
  });

  it("dateTime timeFormat", function () {
    expect(toFormat(dateTime, timeFormat)).to.be.equal(time);
  });

  it("dateTime timeFormat false", function () {
    expect(toFormat(dateTime, timeFormat, false)).to.be.equal(time);
  });
});

describe("toMoment basic", function () {
  // !
  it("null", function () {
    expect(toMoment(null)).to.be.equal(null);
  });
  it("undefined", function () {
    expect(toMoment(undefined)).to.be.equal(null);
  });

  it("0", function () {
    expect(toMoment(0)).to.be.equal(null);
  });

  it("false", function () {
    expect(toMoment(false)).to.be.equal(null);
  });

  it("", function () {
    expect(toMoment("")).to.be.equal(null);
  });

  // bool
  it("true", function () {
    expect(toMoment(true)).to.be.equal(null);
  });

  // number
  //   it("-1", function () {
  //     // expect(toMoment(-1)).to.be.deep.equal(moment(-1, format));
  //     expect(toMoment(-1)).to.be.equal(null);
  //   });

  //   it("-233", function () {
  //     // expect(toMoment(-233)).to.be.deep.equal(moment(-233, format));
  //     expect(toMoment(-233)).to.be.equal(null);
  //   });

  //   it("233", function () {
  //     // expect(toMoment(233)).to.be.deep.equal(moment(233, format));
  //     expect(toMoment(233)).to.be.equal(null);
  //   });

  //   // string<可转为number>
  //   it("0", function () {
  //     expect(toMoment(233)).to.be.equal(null);
  //     // expect(toMoment("0")).to.be.deep.equal(moment("0", format));
  //   });

  //   it("1", function () {
  //     expect(toMoment("1")).to.be.equal(null);
  //     // expect(toMoment("1")).to.be.deep.equal(moment("1", format));
  //   });

  //   it("000", function () {
  //     // expect(toMoment("000")).to.be.deep.equal(moment("000", format));
  //     expect(toMoment("000")).to.be.deep.equal(null);
  //   });

  //   it("11111", function () {
  //     // expect(toMoment("11111")).to.be.deep.equal(moment("11111", format));
  //     expect(toMoment("11111")).to.be.deep.equal(null);
  //   });

  // string<不可转为number>
  //   it("string", function () {
  //     // expect(toMoment("string")).to.be.deep.equal(moment("11111", format));
  //     expect(toMoment("string")).to.be.deep.equal(null);
  //   });

  //   it("a9a9a9a9a9", function () {
  //     expect(toMoment("a9a9a9a9a9")).to.be.deep.equal(
  //       //   moment("a9a9a9a9a9", format)
  //       null
  //     );
  //   });

  //   数组
  const array = [1, 2, 3];
  it("array", function () {
    expect(toMoment(array)).to.be.equal(null);
  });

  //   对象
  const obj = { a: 1 };

  it("obj", function () {
    expect(toMoment(obj)).to.be.equal(null);
  });

  const deepObj = { a: { b: { c: { d: { f: 1 } } } } };

  it("deepObj", function () {
    expect(toMoment(deepObj)).to.be.equal(null);
  });
});

describe("toMoment dateTime", function () {
  const dateTime = moment().format(format);

  const date = moment(dateTime).format(dateFormat);
  const time = moment(dateTime).format(timeFormat);

  it("dateTime format", function () {
    let res1 = toMoment(dateTime, format);
    let res2 = moment(dateTime, format);
    const res = moment(res1).isSame(res2);
    expect(res).to.be.equal(true);
  });

  it("date dateFormat", function () {
    let res1 = toMoment(date, dateFormat);
    let res2 = moment(date, dateFormat);
    const res = moment(res1).isSame(res2);
    expect(res).to.be.equal(true);
  });

  it("time timeFormat", function () {
    let res1 = toMoment(time, timeFormat);
    let res2 = moment(time, timeFormat);
    const res = moment(res1).isSame(res2);
    expect(res).to.be.equal(true);
  });
});

describe("toMoment dateTime_extra", function () {
  it("date dateFormat", function () {
    const dateTime = moment();

    let res1 = toMoment(dateTime);
    let res2 = moment(dateTime);
    const res = moment(res1).isSame(res2);
    expect(res).to.be.equal(true);
  });

  it("date dateFormat_format", function () {
    const dateTime = moment().format(format);

    let res1 = toMoment(dateTime);
    let res2 = moment(dateTime);
    const res = moment(res1).isSame(res2);
    expect(res).to.be.equal(true);
  });

  it("date dateFormat_format", function () {
    const dateTime = moment().format(format);

    let res1 = toMoment(dateTime);
    let res2 = moment(dateTime);
    const res = moment(res1).isSame(res2);
    expect(res).to.be.equal(true);
  });
});

describe("toMoment dateTime_test", function () {
  it("dateTime timeFormat_01", function () {
    const dateTime = "2021-12-07T12:12:12Z";
    const dateTimeBeforeFormat = toFormat(dateTime, format, true);
    let res1 = toMoment(dateTime);
    let res2 = moment(dateTimeBeforeFormat);
    const res = res1.isSame(res2);
    // expect(dateTimeBeforeFormat).to.be.equal("2021-12-07 12:12:12");
    expect(res).to.be.equal(true);
  });

  it("dateTime timeFormat_02", function () {
    const dateTime = "2021-12-07 12:12:12";
    let res1 = toMoment(dateTime, format);
    let res2 = moment(dateTime, format);
    const res = res1.isSame(res2);
    expect(res).to.be.equal(true);
  });

  it("dateTime timeFormat_03", function () {
    const dateTime = "2021-18-07 12:12:12";
    // const res = moment(dateTime).isSame(res2);
    // expect(res).to.be.equal(true);
    let res1 = toMoment(dateTime, format);
    expect(res1).to.be.equal(null);
  });

  it("dateTime timeFormat_10", function () {
    const dateTime = "2021-18-07 12:12:12";
    let res1 = toMoment(dateTime);
    expect(res1).to.be.equal(null);
  });

  it("dateTime timeFormat_04", function () {
    const dateTime = "2021-13-04";
    let res1 = toMoment(dateTime, format);
    expect(res1).to.be.equal(null);
  });

  it("dateTime timeFormat_05", function () {
    const dateTime = "2021-13";
    let res1 = toMoment(dateTime, format);
    expect(res1).to.be.equal(null);
  });

  it("dateTime timeFormat_06", function () {
    const dateTime = "string";
    let res1 = toMoment(dateTime, format);
    expect(res1).to.be.equal(null);
  });
});

describe("toMoment date_test", function () {
  it("date timeFormat_07", function () {
    const date = "2021-11-04";
    let res1 = toMoment(date, dateFormat);
    let res2 = moment(date, dateFormat);
    const res = moment(res1).isSame(res2);
    expect(res).to.be.equal(true);
  });

  it("date timeFormat_51", function () {
    const date = "2021/11/04";
    let res1 = toMoment(date, dateFormat);
    expect(res1).to.be.equal(null);
  });

  it("date timeFormat_-1", function () {
    const date = "2021-13-04";
    let res1 = toMoment(date, dateFormat);
    expect(res1).to.be.equal(null);
  });

  it("date timeFormat_format", function () {
    const date = "2021-13";
    let res1 = toMoment(date, dateFormat);
    expect(res1).to.be.equal(null);
  });

  it("date timeFormat_format", function () {
    const date = "string";
    let res1 = toMoment(date, dateFormat);
    expect(res1).to.be.equal(null);
  });
});

describe("toMoment time_test", function () {
  it("time timeFormat_07", function () {
    const time = "07:07:07";
    let res1 = toMoment(time, timeFormat);
    let res2 = moment(time, timeFormat);
    const res = moment(res1).isSame(res2);
    expect(res).to.be.equal(true);
  });

  it("time timeFormat_51", function () {
    const time = "51:51:51";
    let res1 = toMoment(time, timeFormat);
    expect(res1).to.be.equal(null);
  });

  it("time timeFormat_-1", function () {
    const time = "-1:-1:-1";
    let res1 = toMoment(time, timeFormat);
    expect(res1).to.be.equal(null);
  });

  it("time timeFormat_format", function () {
    const time = "-1:-1";
    let res1 = toMoment(time, timeFormat);
    expect(res1).to.be.equal(null);
  });

  it("time timeFormat_format", function () {
    const time = "string";
    let res1 = toMoment(time, timeFormat);
    expect(res1).to.be.equal(null);
  });
});
