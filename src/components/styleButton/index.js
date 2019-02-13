import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function StyleButton({
  styleName,
  btnText,
  handleChooseStyle,
  isActive,
}) {
  let classList = 'btn styleBtn';
  if (isActive) {
    classList += ' active';
  }
  return (
    <button
      type="button"
      className={classList}
      onClick={() => handleChooseStyle(styleName)}
    >
      {btnText}
    </button>
  );
}

StyleButton.propTypes = {
  styleName: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  handleChooseStyle: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default StyleButton;
