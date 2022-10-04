const pow = (base: number, exponent: number) => {
  if (exponent === 0) return 1;
  if (exponent <= 0) return 0;
  var resultOfPow = base;
  for (var e = 1; e < exponent; e++) {
    resultOfPow *= base;
  }
  return resultOfPow;
};

export { pow };
