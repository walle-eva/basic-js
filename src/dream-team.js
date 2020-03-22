module.exports = function createDreamTeam(arr) {
  throw 'Not implemented';
  arr = arr.sort();
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    newArr.push(arr[i][0]);
  }
  let name = newArr.join('');
  return name;
};
