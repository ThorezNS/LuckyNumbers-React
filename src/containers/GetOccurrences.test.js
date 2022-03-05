import GetOccurrences from './GetOccurrences';

describe('GetOccurrences', () => {
  it('number and number of occurrences (the first and second element in the array), should not contain 0', () => {
    const occurrences = GetOccurrences([0, 14, 0, 0], [[]]);
    expect(occurrences[0][0]).toBeGreaterThan(0);
    expect(occurrences[0][1]).toBeGreaterThan(0);
  });

  it('should return the number of occurrences of 7, which is 3', () => {
    const occurrences = GetOccurrences(
      [0, 7],
      [
        [7, 5],
        [7, 9],
      ]
    );
    expect(occurrences[0][1]).toEqual(3);
  });

  it('should return 33.3 as a percentage of the occurrences of 12', () => {
    const occurrences = GetOccurrences([4, 4], [[12]]);
    expect(occurrences[1][2]).toEqual(33.3);
  });

  it('should sort the arrays by the number of occurrences, the largest number will be first', () => {
    const occurrences = GetOccurrences(
      [8, 8, 0],
      [
        [2, 8],
        [9, 2],
      ]
    );
    expect(occurrences[0]).toEqual([8, 3, 50]);
    expect(occurrences[1]).toEqual([2, 2, 33.3]);
    expect(occurrences[2]).toEqual([9, 1, 16.7]);
  });

  it('should return an array with three values for each number', () => {
    const occurrences = GetOccurrences([6, 6, 6, 6, 6], [[2]]);
    expect(occurrences[0]).toHaveLength(3);
    expect(occurrences[1]).toHaveLength(3);
  });
});
