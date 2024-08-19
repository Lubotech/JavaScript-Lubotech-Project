import {formatCurrency} from '../scripts/utils/money.js';

describe('test suite: formatCurrency', () => {
  it('converts cents into dollars', () => {
    expect(formatCurrency(3045)).toEqual('30.45');
  });

  it('works with 0', ()=> {
    expect(formatCurrency(0)).toEqual('0.00');
  });

  it('Rounds up to the nearest cent', () => {
    expect(formatCurrency(1000.7)).toEqual('10.01');
  });

  it('Rounds down', () => {
    expect(formatCurrency(2309.1)).toEqual('23.09');
  });
});