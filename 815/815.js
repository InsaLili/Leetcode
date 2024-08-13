/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function (routes, source, target) {
  if (target === source) return 0;

  let line = new Map();
  for (let bus = 0; bus < routes.length; bus++) {
    for (let stop of routes[bus]) {
      const current = line.get(stop) || [];
      line.set(stop, [...current, bus]);
    }
  }

  let queue = [];
  let seen = new Set();
  for (let route of line.get(source) || []) {
    queue.push(route);
    seen.add(route);
  }

  let busCount = 1;
  while (queue.length > 0) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const route = queue.shift();
      for (let stop of routes[route]) {
        if (stop === target) return busCount;

        for (let nextRoute of line.get(stop) || []) {
          if (!seen.has(nextRoute)) {
            seen.add(nextRoute);
            queue.push(nextRoute);
          }
        }
      }
    }
    busCount++;
  }

  return -1;
};
