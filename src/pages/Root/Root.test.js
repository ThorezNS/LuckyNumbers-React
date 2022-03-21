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
      generatorBtn: screen.getByText(/generate numbers/i),
      cleanAllBtn: screen.getByText(/clean all/i),
      nextBtn: screen.getByText(/next/i),
      balls: screen.getAllByTestId('ball'),
    };
  };

  it('each element should display "-" before click the button', async () => {
    const { balls } = element();
    balls.forEach((element) => {
      expect(element).toHaveTextContent('-');
    });
  });

  it('only the "generate numbers" button should be visible at the beginning', () => {
    const { generatorBtn, cleanAllBtn, nextBtn } = element();
    expect(generatorBtn).toBeVisible();
    expect(cleanAllBtn).not.toBeVisible();
    expect(nextBtn).not.toBeVisible();
  });

  it('after click, each element should show number', async () => {
    const { balls, generatorBtn } = element();
    userEvent.click(generatorBtn);
    await waitFor(
      () =>
        balls.forEach((element) => {
          expect(element).toHaveTextContent(/^[0-9]*$/);
        }),
      {
        timeout: 3000,
      }
    );
  });

  it('after clicking "generate numbers" the number of occurrences and a percentage should appear', async () => {
    const { generatorBtn } = element();
    userEvent.click(generatorBtn);
    await waitFor(
      () => {
        const occurrenceNumbersElement =
          screen.getAllByTestId('OccurrenceNumbers');
        expect(occurrenceNumbersElement).toBeTruthy();
        occurrenceNumbersElement.forEach((element) => {
          expect(element.firstChild).toHaveTextContent(/^[0-9]*$/);
          expect(element.lastChild).toHaveTextContent(/^[0-9.%]*$/);
        });
      },
      {
        timeout: 3000,
      }
    );
  });

  it('only the "clean all" and "next" button should be visible, after clicking "generate numbers"', async () => {
    const { generatorBtn, cleanAllBtn, nextBtn } = element();
    userEvent.click(generatorBtn);
    await waitFor(
      () => {
        expect(generatorBtn).not.toBeVisible();
        expect(cleanAllBtn).toBeVisible();
        expect(nextBtn).toBeVisible();
      },
      {
        timeout: 3000,
      }
    );
  });

  it('after clicking on the "next" button, a bar with the drawn numbers should appear', async () => {
    const { generatorBtn, nextBtn } = element();
    userEvent.click(generatorBtn);
    await waitFor(
      () => {
        userEvent.click(nextBtn);
        const drownNumbersWrapperElement = screen.getByTestId(
          'drownNumbersWrapper'
        );
        expect(drownNumbersWrapperElement.firstChild).toBeVisible();
      },
      {
        timeout: 3000,
      }
    );
  });

  it('after clicking on the "clear all" button, all numbers should disappear', async () => {
    const { generatorBtn, cleanAllBtn, balls } = element();
    userEvent.click(generatorBtn);
    await waitFor(
      () => {
        userEvent.click(cleanAllBtn);
        const drownNumbersWrapperElement = screen.queryByTestId(
          'drownNumbersWrapper'
        );
        const occurrenceNumbersElement =
          screen.queryAllByTestId('OccurrenceNumbers');
        expect(drownNumbersWrapperElement.firstChild).toBeNull();
        expect(occurrenceNumbersElement).toEqual([]);
        balls.forEach((element) => {
          expect(element).toHaveTextContent('-');
        });
      },
      {
        timeout: 3000,
      }
    );
  });
});
