import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BarCounter from './BarCounter';

describe('BarCounter', () => {
  const barCounterElement = () => screen.getByTestId('barCounter');

  it('the number of the first item ("a") should be 4', () => {
    render(
      <BarCounter
        drownNumbers={[['a'], ['b'], ['c'], ['d']]}
        drownNrIndex={0}
      />
    );
    expect(barCounterElement()).toHaveTextContent('4');
  });

  it('the number of the third item ("c") should be 2', () => {
    render(
      <BarCounter
        drownNumbers={[['a'], ['b'], ['c'], ['d']]}
        drownNrIndex={2}
      />
    );
    expect(barCounterElement()).toHaveTextContent('2');
  });
});
