export const setStyle = (styleType) => {
  const selection = window.getSelection();
  const range = selection.getRangeAt(0);

  if (range) {
    selection.removeAllRanges();
    selection.addRange(range);
  }

  document.execCommand(styleType, false, null);
};

export const getCurrentStyles = () => {
  const getParentLocalName = element => (element.parentElement.localName);

  const selection = window.getSelection();
  const range = selection.getRangeAt(0);

  let parent = selection.anchorNode;
  const currentStyles = [];

  if (range && selection) {
    while (getParentLocalName(parent) !== 'div') {
      currentStyles.push(getParentLocalName(parent));
      parent = parent.parentElement;
    }
  }

  return currentStyles;
};

const isOneWord = (selection) => {
  if (selection.type !== 'Range') return false;
  const selectedText = selection.toString().trim();

  const isWithoutSymbols = RegExp(/[$-/:-?{-~!"^_`[\]]/).test(selectedText);

  return !(isWithoutSymbols || selectedText.includes(' '));
};

export const getSelectedWord = () => {
  const selection = window.getSelection();

  if (!isOneWord(selection)) {
    return null;
  }

  return selection.toString().trim();
};

export const replaceWord = (word) => {
  document.execCommand('insertText', false, word);
};
