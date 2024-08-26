/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  const result = [];
  const getOneLine = (list, length) => {
    const count = list.length - 1;
    const space = Math.floor((maxWidth - length) / count);
    let extraSpace = (maxWidth - length) % count;
    let oneLine = '';
    for (let i = 0; i <= count; i++) {
      oneLine += list[i];
      if (i < count) {
        const hasExtraSpace = extraSpace > 0 ? 1 : 0;
        extraSpace--;
        const totalSpace = hasExtraSpace + space + 1;
        let emptyString = '';
        for (let i = 0; i < totalSpace; i++) {
          emptyString += ' ';
        }
        oneLine += emptyString;
      }
    }
    return oneLine;
  };

  const getLastLine = list => {
    let oneline = '';
    for (let i = 0; i < list.length; i++) {
      oneline += list[i];
      if (i < list.length - 1) {
        oneline += ' ';
      }
    }
    const restSpace = maxWidth - oneline.length;
    for (let i = 0; i < restSpace; i++) {
      oneline += ' ';
    }
    return oneline;
  };

  let length = 0;
  let line = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const startSpace = line.length > 0 ? 1 : 0;
    if (length + word.length + startSpace <= maxWidth) {
      length += word.length + startSpace;
      line.push(word);
    } else {
      if (line.length === 1) {
        result.push(getLastLine(line));
      } else {
        result.push(getOneLine(line, length));
      }
      length = word.length;
      line = [word];
    }
    if (i === words.length - 1) {
      result.push(getLastLine(line));
    }
  }

  return result;
};
