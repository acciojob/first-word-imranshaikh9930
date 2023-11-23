function firstWord(s) {
  // your code here
	 if (s.trim() === '' || !s.includes(' ')) {
		    return s;
  }
	const firstIndex = s.indexOf(" ");
	const sliceed = s.slice(0,firstIndex);
	return sliceed;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
