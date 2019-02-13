import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function GetSynonymsButton({ getSynonyms }) {
  return (<button type="submit" className="btn" onClick={getSynonyms}>Get synonyms</button>);
}

GetSynonymsButton.propTypes = {
  getSynonyms: PropTypes.func.isRequired,
};

export default GetSynonymsButton;
