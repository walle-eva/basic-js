module.exports = function getSeason(date) {
  
  let month = date.getMonth();
  if((month >= 2) && (month < 5)){
    return 'spring';
  }
  else if((month >= 5) && (month < 8)){
    return 'summer';
  }
  else if((month >= 8) && (month < 11)){
    return 'automn';
  }
  else {
   return 'winter';
  }
};
