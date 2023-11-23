function firstWord(s) {
  // your code here
	
	if(s.length === 0 || !s.includes(" ")){
		return s
	}
	else{
		const firstIndex = s.indexOf(" ");
	const sliceed = s.slice(0,firstIndex);
	return sliceed;
	}
	
	
	
}

// Do not change the code below

const s = prompt("Enter String:")
alert(firstWord(s))
