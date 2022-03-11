import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import Root from './Root';

describe('Root', () => {
  beforeEach(() => {
    render(<Root />);
  });

  const element = () => {
    return {
      generatorBtn: screen.getByRole('button', {
        name: /generate numbers/i,
      }),
      cleanAllBtn: screen.getByRole('button', {
        name: /clean all/i,
      }),
      nextBtn: screen.getByRole('button', {
        name: /next/i,
      }),
      balls: screen.getAllByTestId('ball'),
    };
  };

  it('each ball should display "-" before click the button', async () => {
    const { balls } = element();
    balls.forEach((ball) => {
      expect(ball).toHaveTextContent('-');
    });
  });

  it('after click, each ball should show number', async () => {
    const { balls, generatorBtn } = element();
    userEvent.click(generatorBtn);
    await waitFor(
      () =>
        balls.forEach((ball) => {
          expect(ball).toHaveTextContent(/^[0-9]*$/);
        }),
      {
        timeout: 3000,
      }
    );
  });
});
