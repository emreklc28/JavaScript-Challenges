const isVowel = letter => {
    const vowels = ['a', 'e', 'ı', 'i', 'o', 'ö', 'u', 'ü'];
    return vowels.includes(letter);
  }
  
  function spell (word) {
    let copyWord = word;
  
    let i = 0;
    let result = '';
    let count = 0;
    
    while(i < copyWord.length) {
      const letter = copyWord[i];
      
      if (isVowel(letter)) {
        result += letter;
  
        const nextLetter = copyWord[i + 1];
        const otherLetter = copyWord[i + 2];
  
        if (nextLetter && otherLetter && !isVowel(nextLetter) && !isVowel(otherLetter)) {
          result += nextLetter + '-';
          i++;
        } else result += '-';
  
        count++;
      } else {
        result += letter;
      }
  
      i++;
    }
  
    const resultStrLastIdx = result.length - 1;
    const lastChar = result[resultStrLastIdx];
  
    const hasHyphenBeforeLast = result[resultStrLastIdx - 1] === '-';
    const hasHyphenAtLast = lastChar === '-';
    
    if (hasHyphenBeforeLast) result = result.slice(0, resultStrLastIdx - 1) + lastChar;
    else if (hasHyphenAtLast) result = result.slice(0, resultStrLastIdx);
    
    console.log(word, '-->', result);
    return result;

}

spell('emre')
spell('elma');
spell('bilgisayar');
spell('kalem');
spell('tren');
spell('spor');
spell('merhaba');
spell('dunya')

