import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Button', () => {
  const buttonElement = {
    generateNumbers: () =>
      screen.getByRole('button', { name: /generate numbers/i }),
    cleanAll: () => screen.getByRole('button', { name: /clean all/i }),
    next: () => screen.getByRole('button', { name: /next/i }),
  };

  const renderButtonComponent = (name, disabled, isFirstDrawFinished, type) => {
    const buttonType = () => {
      if (type === 'generateBtn') return [true, false, false];
      if (type === 'cleanBtn') return [false, true, false];
      if (type === 'nextBtn') return [false, false, true];
    };

    return render(
      <Button
        name={name}
        disabled={disabled}
        isFirstDrawFinished={isFirstDrawFinished}
        handleGenerateNumbers={() => {}}
        handleCleanAll={() => {}}
        handleNextDraw={() => {}}
        generateBtn={buttonType()[0]}
        cleanBtn={buttonType()[1]}
        nextBtn={buttonType()[2]}
      />
    );
  };

  describe('Generate numbers button', () => {
    it('should be in the document', () => {
      renderButtonComponent('Generate numbers', false, false, 'generateBtn');
      expect(buttonElement.generateNumbers()).toBeInTheDocument();
    });

    it('should not be disabled before the first draw is finished', () => {
      renderButtonComponent('Generate numbers', false, false, 'generateBtn');
      expect(buttonElement.generateNumbers()).not.toBeDisabled();
    });

    it('should be disabled during the draw', () => {
      renderButtonComponent('Generate numbers', true, false, 'generateBtn');
      expect(buttonElement.generateNumbers()).toBeDisabled();
    });

    it('should be disabled after the first draw is finished', () => {
      renderButtonComponent('Generate numbers', true, true, 'generateBtn');
      expect(buttonElement.generateNumbers()).toBeDisabled();
    });

    it('should have class "buttons__generator" before the first draw is finished', () => {
      renderButtonComponent('Generate numbers', false, false, 'generateBtn');
      expect(buttonElement.generateNumbers()).toHaveClass('buttons__generator');
    });

    it('should have class "buttons__hide" after the first draw is finished', () => {
      renderButtonComponent('Generate numbers', true, true, 'generateBtn');
      expect(buttonElement.generateNumbers()).toHaveClass('buttons__hide');
    });

    it('should have class "buttons__generator buttons__disabled" during the first draw', () => {
      renderButtonComponent('Generate numbers', true, false, 'generateBtn');
      expect(buttonElement.generateNumbers()).toHaveClass(
        'buttons__generator buttons__disabled'
      );
    });
  });

  describe('Clean all button', () => {
    it('should be in the document', () => {
      renderButtonComponent('Clean all', false, false, 'cleanBtn');
      expect(buttonElement.cleanAll()).toBeInTheDocument();
    });

    it('should not be disabled after the draw is finished', () => {
      renderButtonComponent('Clean all', false, true, 'cleanBtn');
      expect(buttonElement.cleanAll()).not.toBeDisabled();
    });

    it('should be disabled during the draw', () => {
      renderButtonComponent('Clean all', true, false, 'cleanBtn');
      expect(buttonElement.cleanAll()).toBeDisabled();
    });

    it('should have class "buttons__hide" before the first draw is finished', () => {
      renderButtonComponent('Clean all', false, false, 'cleanBtn');
      expect(buttonElement.cleanAll()).toHaveClass('buttons__hide');
    });

    it('should have class "buttons__generator" after the draw is finished', () => {
      renderButtonComponent('Clean all', false, true, 'cleanBtn');
      expect(buttonElement.cleanAll()).toHaveClass('buttons__generator');
    });

    it('should have class "buttons__generator buttons__disabled" during the draw', () => {
      renderButtonComponent('Clean all', true, true, 'cleanBtn');
      expect(buttonElement.cleanAll()).toHaveClass(
        'buttons__generator buttons__disabled'
      );
    });
  });

  describe('Next button', () => {
    it('should be in the document', () => {
      renderButtonComponent('Next', false, false, 'nextBtn');
      expect(buttonElement.next()).toBeInTheDocument();
    });

    it('should not be disabled after the draw is finished', () => {
      renderButtonComponent('Next', false, true, 'nextBtn');
      expect(buttonElement.next()).not.toBeDisabled();
    });

    it('should be disabled during the draw', () => {
      renderButtonComponent('Next', true, false, 'nextBtn');
      expect(buttonElement.next()).toBeDisabled();
    });

    it('should have class "buttons__hide" before the first draw is finished', () => {
      renderButtonComponent('Next', false, false, 'nextBtn');
      expect(buttonElement.next()).toHaveClass('buttons__hide');
    });

    it('should have class "buttons__next buttons__generator" after the draw is finished', () => {
      renderButtonComponent('Next', false, true, 'nextBtn');
      expect(buttonElement.next()).toHaveClass(
        'buttons__next buttons__generator'
      );
    });

    it('should have class "buttons__next buttons__generator buttons__disabled" during the draw', () => {
      renderButtonComponent('Next', true, true, 'nextBtn');
      expect(buttonElement.next()).toHaveClass(
        'buttons__next buttons__generator buttons__disabled'
      );
    });
  });
});
