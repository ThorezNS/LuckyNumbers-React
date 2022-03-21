import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';

describe('Header', () => {
  const headerElement = () =>
    screen.getByRole('heading', { name: /lucky lottery numbers/i });

  beforeEach(() => {
    render(<Header title={'Lucky Lottery Numbers'} />);
  });

  it('should be in the document', () => {
    expect(headerElement()).toBeInTheDocument();
  });

  it('should have text content "Lucky Lottery Numbers"', () => {
    expect(headerElement()).toHaveTextContent('Lucky Lottery Numbers');
  });

  it('should have class "header"', () => {
    expect(headerElement()).toHaveClass('header');
  });
});
