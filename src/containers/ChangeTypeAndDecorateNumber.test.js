import ChangeTypeAndDecorateNumber from './ChangeTypeAndDecorateNumber';

describe('ChangeTypeAndDecorateNumber', () => {
  it('should add "0" in front of a number less than 10 ', () => {
    expect(ChangeTypeAndDecorateNumber(9)).toEqual('09');
  });

  it('should not add "0" in front of a number greater than or equal to 10', () => {
    expect(ChangeTypeAndDecorateNumber(10)).toEqual('10');
  });
});
