function stringChallenge(str){
  if(str.length === 1) return str.length;
  if(str.split(str[0]).join('') === '') return str.length;
  if(str.length % 2 != 0  & str[0] === str[1]) {
      str = str.split('').reverse().join('');
  }
  const dic = {
      ac: "b",
      ab: "c",
      ba: "c",
      bc: "a",
      ca: "b",
      cb: "a"
  };
  const reducerArr = [];

  for (let i=0; i<str.length; i += 2 ) {
      let slice = str.slice(i,i+2)
      if(dic[slice]){
          reducerArr.push(dic[slice])
      } else {
          reducerArr.push(slice)
      }
  }
  str = reducerArr.join('');
  return stringChallenge(str);
}

module.exports = stringChallenge;