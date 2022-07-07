function stringChallenge(str){
    let string = str;
    if(string.split(string[0]).join('') === '' || string.length === 1) 
        return string.length;
    const dic = {
      ac: "b",
      ab: "c",
      ba: "c",
      bc: "a",
      ca: "b",
      cb: "a"
    };
   
    for( let i = 0; i < string.length; i++ ) {
      const slice = string.slice(i,i+2);
      const match = dic[slice] || slice;
      string = string.replace(slice,match);
    }

    return stringChallenge(string);
}

module.exports = stringChallenge;