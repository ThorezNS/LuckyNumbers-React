import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SidebarTitle from './SidebarTitle';

describe('SidebarTitle', () => {
  const propsTitle = 'occurrences';

  it('should have text content equal to the props title', () => {
    render(<SidebarTitle title={propsTitle} />);
    const sidebarTitleElement = screen.getByRole('heading', {
      name: propsTitle,
    });
    expect(sidebarTitleElement).toHaveTextContent(propsTitle);
  });
});
