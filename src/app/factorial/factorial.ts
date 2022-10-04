const factorial = (value: number) => {
  if (value === 0) return 1;
  if (value < 0 || value > 16) return 0;
  var result = value;
  for (var c = 1; c < value; c++) {
    result *= c;
  }
  return result;
};

export { factorial };
