import GetUniqueRandomNumber from './GetUniqueRandomNumber';

describe('GetUniqueRandomNumber', () => {
  it('should return a number between 3 and 5', () => {
    const number = GetUniqueRandomNumber([1, 2], 5);
    expect(number).toBeGreaterThan(2);
    expect(number).toBeLessThanOrEqual(5);
  });

  it('should not return 0', () => {
    expect(GetUniqueRandomNumber([], 1)).not.toBe(0);
  });
});
