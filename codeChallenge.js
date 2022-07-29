//1: sum zero
const addToZero = (num) => {
    let array = [num]
    for(let i = 0; i < array.length; i++){
        for(let j = 0; i < array.length; i++){
            if(i !== j){
                if(array[i] + array[j] === 0){
                    return true
                } else {
                    return false
                }
            }
        }
    }
}

addToZero([1])
addToZero([1, 2])
addToZero([1, 2, 3])
addToZero([1, 2, 3, -2])
//2: unique chararters
function uniqueCharacters(str){
    let tempChars =[]
    for(let i = 0; i < str.length; i++){
        if(tempChars.includes(str[i])){
            return false
        } else {
            tempChars.push(str[i])
        }
    }
    return true
}
console.log(uniqueCharacters('monday'))
//pangram sentence
const str = 'The quick brown fox jumps over the lazy dog!';
const isPangram = (str = '') => {
   str = str.toLowerCase();
   const { length } = str;
   const alphabets = 'abcdefghijklmnopqrstuvwxyz';
   const alphaArr = alphabets.split('');
   for(let i = 0; i < length; i++){
      const el = str[i];
      const index = alphaArr.indexOf(el);
      if(index !== -1){
         alphaArr.splice(index, 1);
      };
   };
   return !alphaArr.length;
};
console.log(isPangram(str))
//longest word
function longestWord(str) {
    let strSplit = str.split(' ');
    let longWord = 0;
    for(let i = 0; i < strSplit.length; i++){
        if(strSplit[i].length > longWord){
            longWord = strSplit[i].length;
        }
    }
    return
}
longestWord('hi and hello')