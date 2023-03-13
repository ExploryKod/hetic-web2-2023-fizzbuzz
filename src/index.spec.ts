import { fizzBuzz, replace } from ".";

describe("Test of replace()", () => {
  test("Default case: do not replace", () => {
    expect(replace(1)).toEqual("1");
  });

  test("Replace by 'Fizz' if n is a multiple of 3", () => {
    expect(replace(3)).toEqual("Fizz");
  });

  test("Replace by 'Buzz' if n is a multiple of 5", () => {
    expect(replace(5)).toEqual("Buzz");
  });

  test("Replace by 'FizzBuzz' if n is a multiple of 3 and 5", () => {
    expect(replace(3 * 5)).toEqual("FizzBuzz");
  });
});

describe("Test of fizzBuzz()", () => {
  test("n = 1", () => {
    expect(fizzBuzz(1)).toEqual(["1"]);
  });

  test("n = 2", () => {
    expect(fizzBuzz(2)).toEqual(["1", "2"]);
  });

  test("n = 3", () => {
    expect(fizzBuzz(3)).toEqual(["1", "2", "Fizz"]);
  });
});
