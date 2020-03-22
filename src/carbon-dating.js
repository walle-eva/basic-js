const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(/* sampleActivity */) {
  throw 'Not implemented';
  let k = MODERN_ACTIVITY/parseFloat(str);
    let n = Math.log(k);
    let t = 0.693/HALF_LIFE_PERIOD;
    let time = n/t;
    let result = Math.ceil(time);
	return result;
};
