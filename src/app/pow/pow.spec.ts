import { pow } from './pow';

describe('pow test suite', () => {
  it('should return 1 if n equals 0', () => {
    const result = pow(4, 0);
    expect(result).toBe(1);
  });

  it('should return 0 if n is negative', () => {
    const result = pow(9, -3);
    expect(result).toBe(0);
  });

  it('should return 8 if x equals 2 and n equals 3', () => {
    const result = pow(2, 3);
    expect(result).toBe(8);
  });

  it('should return 9 if x equals 3 and n equals 2', () => {
    const result = pow(3, 2);
    expect(result).toBe(9);
  });
});
