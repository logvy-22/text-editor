import React from 'react';
import { Provider } from 'react-redux';
import Editor from '../editor';
import Synonyms from '../../containers/synonyms';
import store from '../../store';
import './style.css';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Editor />
        <Synonyms />
      </div>
    </Provider>
  );
}

export default App;
