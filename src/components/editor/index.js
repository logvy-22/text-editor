import React from 'react';
import './style.css';
import Controls from '../controls';
import TextField from '../../containers/textField';

function Editor() {
  return (
    <div>
      <Controls />
      <TextField />
    </div>
  );
}

export default Editor;
