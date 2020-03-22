module.exports = function transform( arr ) {
    throw 'Not implemented';
    let a = '--discard-next';
  let b = '--discard-prev';
  let c = '--double-next';
  let d = '--double-prev';
  for(let i = 0; i < arr.length; i++){
    if(arr[i] == a){
	  arr.splice(i, 2);
	}
	if(arr[i] == b){
	  arr.splice(i - 1, 2);
	}
	if(arr[i] == c){
	  arr.splice(i, 1, arr[i + 1]);
	}
	if(arr[i] == d){
	  arr.splice(i - 1, 1, arr[i - 1]);
	}
  }
  return arr;
};
