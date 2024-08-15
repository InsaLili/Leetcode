/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const graph = new Array(numCourses).fill(0).map(i => []);
  const indegree = new Array(numCourses).fill(0);

  for (let pre of prerequisites) {
    graph[pre[1]].push(pre[0]);
    indegree[pre[0]]++;
  }

  const zeroDegree = [];
  for (let i = 0; i < numCourses; i++) {
    if (indegree[i] === 0) {
      zeroDegree.push(i);
    }
  }

  if (zeroDegree.length === 0) return false;

  const taken = [];
  while (zeroDegree.length > 0) {
    const course = zeroDegree.pop();
    taken.push(course);
    for (let pre of graph[course]) {
      indegree[pre]--;
      if (indegree[pre] === 0) {
        zeroDegree.push(pre);
      }
    }
  }

  return taken.length === numCourses ? true : false;
};
