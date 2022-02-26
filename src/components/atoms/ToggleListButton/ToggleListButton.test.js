import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ToggleListButton from './ToggleListButton';

describe('ToggleListButton', () => {
  const toggleListButton = (drownNumbers, isListShown) => {
    return {
      element: () => {
        return screen.getByRole('button', {
          name: isListShown ? /hide/i : /show/i,
        });
      },
      render: () => {
        return render(
          <ToggleListButton
            drownNumbers={drownNumbers}
            isListShown={isListShown}
            handleToggleList={() => {}}
          />
        );
      },
    };
  };

  it('should not show a button in the UI if drownNumbers is an empty array', () => {
    const component = toggleListButton([], false);
    component.render();
    expect(
      screen.queryByRole('button', { name: /show/i })
    ).not.toBeInTheDocument();
  });

  it('should be visible in the UI if the list of drawn numbers contains at least one array with value', () => {
    const component = toggleListButton([[2, 8]], false);
    component.render();
    expect(component.element()).toBeVisible();
  });

  it('should have class "hide-btn toggle-list" if list of drawn numbers is shown', () => {
    const component = toggleListButton([[2, 8]], true);
    component.render();
    expect(component.element()).toHaveClass('hide-btn toggle-list');
  });

  it('should have class "show-btn toggle-list" if list of drawn numbers is hidden', () => {
    const component = toggleListButton([[2, 8]], false);
    component.render();
    expect(component.element()).toHaveClass('show-btn toggle-list');
  });
});
