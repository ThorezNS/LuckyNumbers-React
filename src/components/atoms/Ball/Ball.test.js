import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Ball from './Ball';

describe('Ball', () => {
  const ballElement = () => screen.getByTestId('ball');

  it('should be in the document', () => {
    render(<Ball />);
    expect(ballElement()).toBeInTheDocument();
  });

  it('should have the text "-" if no number is provided', () => {
    render(<Ball />);
    expect(ballElement()).toHaveTextContent('-');
  });

  it('should have class "balls__item" if "small" props is not provided', () => {
    render(<Ball />);
    expect(ballElement()).toHaveClass('balls__item');
  });

  it('should have class "occurrence-item--ball" if "small" props is provided', () => {
    render(<Ball small />);
    expect(ballElement()).toHaveClass('occurrence-item--ball');
  });

  it('should add zero and change to string, if the number is less than 10 ', () => {
    render(<Ball number={2} />);
    expect(ballElement()).toHaveTextContent('02');
  });
});
