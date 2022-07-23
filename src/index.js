module.exports = function check(str, map) {

  let dict = {};

  function createObject(map) {
    for (let i = 0; i < map.length; i++) {
      dict[map[i][1]] = map[i][0];
    }
    return dict
  }


  createObject(map);
  console.log(dict)
  let closedArr = [];

  function closedArray(map) {
    closedArr = map.map(a => {
      return a[0];
    })

    return closedArr;
  }

  closedArray(map);
  function isClosed(ch) {
    return closedArr.indexOf(ch) > -1;
  }

  if (str.length % 2 !== 0) {
    return false
  }

  let result = [];


  for (let i = 0; i < str.length; i++) {

    const current = str[i];
    if (isClosed(current)) {
      result.push(current);
    }
    else {
      if (result.length === 0) {
        return false
      }

    }

    let top = result[result.length - 1];

    if (dict[current] === top) {
      result.pop()
    }

    
  }
  return result.length === 0
}
