const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
});

test('regular positive number', () => {
  expect(addCommas(1234567890)).toBe("1,234,567,890")
})

test('number with trailing zeroes', () => {
  expect(addCommas(1000000)).toBe("1,000,000")
})

test('regular negative number', () => {
  expect(addCommas(-1234567890)).toBe("-1,234,567,890")
})

test('decimal', () => {
  expect(addCommas(1234567.890)).toBe("1,234,567.89")
})

test('negative decimal', () => {
  expect(addCommas(-1234567.890)).toBe("-1,234,567.89")
})
