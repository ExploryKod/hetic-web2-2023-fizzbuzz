const isMultipleOf = (divider: number, n: number): boolean => {
  return n % divider === 0;
};

export const replace = (n: number): string => {
  let result = "";

  if (isMultipleOf(3, n)) {
    result += "Fizz";
  }

  if (isMultipleOf(5, n)) {
    result += "Buzz";
  }

  return result || n.toString();
};

const range = (n: number): number[] => {
  return [...new Array(n)].map((_, index) => index + 1);
};

export const fizzBuzz = (n: number): string[] => {
  return range(n).map(replace);
};
