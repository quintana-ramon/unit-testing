const circle = (radio: number) => {
  if (radio < 1) return 0;
  return radio * radio * 3.1416;
};

export { circle };
