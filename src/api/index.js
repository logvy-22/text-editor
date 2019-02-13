const BASE_URL = 'https://api.datamuse.com/';
const SYNONYMS_ENDPOINT = 'words?rel_syn=';

export const getSynonymsList = word => fetch(BASE_URL + SYNONYMS_ENDPOINT + word)
  .then(data => data.json());
