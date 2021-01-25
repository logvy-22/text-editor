import React from 'react';
import PropTypes from 'prop-types';
import StyleBtn from '../../containers/styleButton';
import './style.css';

function StylePicker({ chosenStyles }) {
  const isActiveState = btnValue => chosenStyles.includes(btnValue);

  return (
    <div className="style-pickers">
      <StyleBtn styleName="bold" btnText="b" className="bold" isActive={isActiveState('b')} />
      <StyleBtn styleName="italic" btnText="i" className="italic" isActive={isActiveState('i')} />
      <StyleBtn styleName="underline" btnText="u" className="underline" isActive={isActiveState('u')} />
    </div>
  );
}

StylePicker.propTypes = {
  chosenStyles: PropTypes.instanceOf(Array).isRequired,
};

export default StylePicker;
