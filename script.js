function firstWord(s) {
  // your code here
	
	if (s.length === 0 || !s.includes(" ")) {
    return s;
  } else {
    const firstSpaceIndex = s.indexOf(" ");
    const firstWord = s.slice(0, firstSpaceIndex);
    return firstWord;
  }
	
	
	
}

// Do not change the code below

const s = prompt("Enter String:")
alert(firstWord(s))
