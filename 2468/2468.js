/**
 * @param {string} message
 * @param {number} limit
 * @return {string[]}
 */
var splitMessage = function (message, limit) {
  let cur = 1,
    parts = 1;

  while ((parts.toString().length + 3) * parts + message.length + cur > limit * parts) {
    if (parts.toString().length * 2 + 3 >= limit) return [];
    parts++;
    cur += parts.toString().length;
  }

  const result = [];
  let currentPos = 0;

  for (let i = 1; i <= parts; i++) {
    const suffix = `<${i}/${parts}>`;
    const length = limit - suffix.length;
    const end = currentPos + length;
    const mes = message.substring(currentPos, end);
    result.push(mes + suffix);
    currentPos = end;
  }

  return result;
};
