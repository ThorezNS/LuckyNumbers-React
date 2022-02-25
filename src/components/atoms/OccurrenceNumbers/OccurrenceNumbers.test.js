import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import OccurrenceNumbers from './OccurrenceNumbers';

describe('OccurrenceNumbers', () => {
  const OccurrenceNumbersElement = () =>
    screen.getByTestId('OccurrenceNumbers');
  const renderOccurrenceNumbersComponent = (array) =>
    render(<OccurrenceNumbers occurrencesArray={array} />);

  it('should be in the document', () => {
    renderOccurrenceNumbersComponent([null, 7, 6]);
    expect(OccurrenceNumbersElement()).toBeInTheDocument();
  });

  it('number element should output a number with the string type', () => {
    renderOccurrenceNumbersComponent([null, 7, null]);
    expect(OccurrenceNumbersElement().firstChild).toHaveTextContent('7');
  });

  it('percentage element should print a number with the string type and a percent sign', () => {
    renderOccurrenceNumbersComponent([null, null, 6]);
    expect(OccurrenceNumbersElement().lastChild.innerHTML).toEqual('6%');
  });
});
