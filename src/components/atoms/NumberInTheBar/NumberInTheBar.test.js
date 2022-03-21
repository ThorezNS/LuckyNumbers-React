import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NumberInTheBar from './NumberInTheBar';

describe('NumberInTheBar', () => {
  const numberInTheBarElement = () => screen.getByTestId('numberInTheBar');
  const renderNumberInTheBarComponent = (array) =>
    render(<NumberInTheBar arrayWithNr={array} />);

  it('should be in the document', () => {
    renderNumberInTheBarComponent([5, 25, 7]);
    expect(numberInTheBarElement()).toBeInTheDocument();
  });

  it('should have the text content "0 and number" only if it is less than 10', () => {
    renderNumberInTheBarComponent([5]);
    expect(numberInTheBarElement()).toHaveTextContent('05');
  });

  it('should separate numbers from each other with a dot, excluding the first number', () => {
    renderNumberInTheBarComponent([5, 14]);
    expect(numberInTheBarElement()).toHaveTextContent('05 . 14');
  });

  it('should separate numbers from each other with a dot, excluding the first and the last number', () => {
    renderNumberInTheBarComponent([5, 14, 7]);
    expect(numberInTheBarElement()).toHaveTextContent('05 . 14 . 07');
  });
});
