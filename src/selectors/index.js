import { createSelector } from 'reselect';

const stylesSelector = state => state.currentStyles;
const synonymsSelector = state => state.synonyms;

export const chosenStylesSelect = createSelector(
  stylesSelector,
  state => state.stylesList,
);

export const synonymsListSelect = createSelector(
  synonymsSelector,
  state => state.synonymsList,
);
