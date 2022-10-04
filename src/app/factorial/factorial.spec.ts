import { factorial } from './factorial';

describe('Factorial test suite', () => {
  it('should return 1 if n is 0', () => {
    const result = factorial(0);
    expect(result).toBe(1);
  });

  it('should return 0 if n is negative', () => {
    const result = factorial(-9);
    expect(result).toBe(0);
  });

  it('should return 6 if n equals 3', () => {
    const result = factorial(3);
    expect(result).toBe(6);
  });

  it('should return 24 if n equals 4', () => {
    const result = factorial(4);
    expect(result).toBe(24);
  });

  it('should return 120 if n is 5', () => {
    const result = factorial(5);
    expect(result).toBe(120);
  });

  it('should return 0 if n > 16', () => {
    const result = factorial(17);
    expect(result).toBe(0);
  });
});
