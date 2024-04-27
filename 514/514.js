/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
var findRotateSteps = function (ring, key) {
  let dic = {};
  let map = new Array(ring.length).fill(0);
  let result = 0;
  let final = [];
  for (let i = 0; i < ring.length; i++) {
    if (dic[ring.charAt(i)] === undefined) {
      dic[ring.charAt(i)] = [i];
    } else {
      dic[ring.charAt(i)].push(i);
    }
  }
  for (let i = 0; i < key.length; i++) {
    const positions = dic[key.charAt(i)];
    if (i === 0) {
      for (const po of positions) {
        map[po] = Math.min(po, ring.length - po);
        if (i === key.length - 1) {
          final.push(map[po]);
        }
      }
    } else {
      for (const po of positions) {
        let newMap = Infinity;
        const prevPostions = dic[key.charAt(i - 1)];
        for (const prePo of prevPostions) {
          let dif = 0;
          if (po - prePo > 0) {
            dif = Math.min(po - prePo, prePo + ring.length - po);
          } else {
            dif = Math.min(prePo - po, po + ring.length - prePo);
          }
          newMap = Math.min(newMap, map[prePo] + dif);
        }
        map[po] = newMap;
        if (i === key.length - 1) {
          final.push(map[po]);
        }
      }
    }
    result++;
  }
  return result + Math.min(...final);
};
