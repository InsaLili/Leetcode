var HitCounter = function () {
  this.hitMap = [];
};

/**
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function (timestamp) {
  this.hitMap.push(timestamp);
};

/**
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function (timestamp) {
  while (this.hitMap.length > 0) {
    const diff = timestamp - this.hitMap[0];
    if (diff >= 300) {
      this.hitMap.shift();
    } else {
      break;
    }
  }

  return this.hitMap.length;
};

/**
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */
