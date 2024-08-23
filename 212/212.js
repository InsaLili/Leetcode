/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  const result = [];
  const root = {};

  const buildTrie = () => {
    for (let word of words) {
      let node = root;
      for (let c of word) {
        if (!node[c]) node[c] = {};
        node = node[c];
      }
      node.word = word;
    }
  };

  const dfs = (row, col, node) => {
    if (node.word) {
      result.push(node.word);
      node.word = null;
    }

    const letter = board[row][col];
    board[row][col] = '#';

    const dir = [
      [-1, 0],
      [0, 1],
      [1, 0],
      [0, -1],
    ];
    for (let [rowOffset, colOffset] of dir) {
      const newRow = row + rowOffset;
      const newCol = col + colOffset;
      if (
        newRow < 0 ||
        newRow >= board.length ||
        newCol < 0 ||
        newCol >= board[0].length
      )
        continue;

      const newLetter = board[newRow][newCol];
      if (node[newLetter]) {
        dfs(newRow, newCol, node[newLetter]);
      }
    }
    board[row][col] = letter;
  };

  buildTrie();

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      const letter = board[row][col];
      if (root[letter]) {
        dfs(row, col, root[letter]);
      }
    }
  }

  return result;
};
