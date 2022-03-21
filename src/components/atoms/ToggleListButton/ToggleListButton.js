import './ToggleListButton.css';

const ToggleListButton = ({ handleToggleList, isListShown, drownNumbers }) => {
  return (
    <>
      {drownNumbers.length ? (
        <button
          onClick={handleToggleList}
          className={
            isListShown ? 'hide-btn toggle-list' : 'show-btn toggle-list'
          }
        >
          {isListShown ? 'hide' : 'show'}
        </button>
      ) : null}
    </>
  );
};

export default ToggleListButton;
