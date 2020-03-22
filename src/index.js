module.exports = function check(str, bracketsConfig) {
  const brackets = str.split('');
  for (let i = 0; i < brackets.length; i++){
    for (let j = 0; j < bracketsConfig.length; j++){
      if (bracketsConfig[j][0] === brackets[i] && bracketsConfig[j][1] === brackets[i + 1]){
        brackets.splice(i, 2);
        i = i - 2;
      }
    }
  }
    return brackets.length === 0 ? true : false;
};
