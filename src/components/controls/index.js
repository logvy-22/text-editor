import React from 'react';
import './style.css';
import StylesPicker from '../../containers/stylePicker';
import GetSynonymsButton from '../../containers/getSynonymsButton';

function Controls() {
  return (
    <div className="controls-wrapper">
      <StylesPicker />
      <GetSynonymsButton />
    </div>
  );
}

export default Controls;
