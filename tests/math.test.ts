import { add, subtract, multiply, divide } from '../src';

describe('Math libray', () => {
  test('adds 2 + 3 to equal 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('subtracts 5 - 2 to equal 3', () => {
    expect(subtract(5, 2)).toBe(3);
  });

  test('multiplies 4 * 3 to equal 12', () => {
    expect(multiply(4, 3)).toBe(12);
  });

  test('divides 10 / 2 to equal 5', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('throws error on divide by zero', () => {
    expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
  });
})