import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Ball from './Ball';

describe('Main Ball', () => {
  const ballElement = () => screen.getByTestId('ball');

  it('should be in the document', () => {
    render(<Ball />);
    expect(ballElement()).toBeInTheDocument();
  });

  it('should have the text "-" if no number is provided', () => {
    render(<Ball />);
    expect(ballElement()).toHaveTextContent('-');
  });

  it('should have class "balls__item"', () => {
    render(<Ball />);
    expect(ballElement()).toHaveClass('balls__item');
  });

  it('should add zero if the number is less than 10 ', () => {
    render(<Ball number={2} />);
    expect(ballElement()).toHaveTextContent('02');
  });
});

describe('Occurrence Ball', () => {
  const ballElement = () => screen.getByTestId('ball');
  beforeEach(() => {
    render(<Ball small smallNr={5} />);
  });

  it('should be in the document', () => {
    expect(ballElement()).toBeInTheDocument();
  });

  it('should have class "occurrence-item--ball"', () => {
    expect(ballElement()).toHaveClass('occurrence-item--ball');
  });

  it('should add zero if the number is less than 10 ', () => {
    expect(ballElement()).toHaveTextContent('05');
  });
});
