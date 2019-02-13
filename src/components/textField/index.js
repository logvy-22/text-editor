import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function TextField({ checkStylesAction }) {
  const onMouseUpHandler = () => {
    checkStylesAction();
  };

  return (
    <div
      contentEditable
      className="textEditorField"
      placeholder="Enter text here..."
      onMouseUp={onMouseUpHandler}
    />
  );
}

TextField.propTypes = {
  checkStylesAction: PropTypes.func.isRequired,
};

export default TextField;
