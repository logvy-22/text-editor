import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Synonyms({ synonymsArray, handleSynonymSelect }) {
  return (
    <div>
      <h2>Synonyms</h2>
      {!synonymsArray.length && <span>Select world</span>}
      {synonymsArray.map(synonym => (
        <button
          key={synonym}
          type="button"
          className="btn btn-synonym"
          onClick={() => handleSynonymSelect(synonym)}
        >
          {synonym}
        </button>
      ))}
    </div>
  );
}

Synonyms.propTypes = {
  synonymsArray: PropTypes.instanceOf(Array).isRequired,
  handleSynonymSelect: PropTypes.func.isRequired,
};

export default Synonyms;
