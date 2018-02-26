
module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) {
    return false;
  }
  var stek = [];
  str = str.split('');

  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < bracketsConfig.length; j++) {
      if (str[i] == bracketsConfig[j][1] && stek[stek.length - 1] == bracketsConfig[j][0]) {
        stek.pop();
      } else if (str[i] === bracketsConfig[j][0]) {
        stek.push(str[i]);
      }
    }
  }

  if (stek.length == 0) {
    return true;
  } else {
    return false;
  }

}
