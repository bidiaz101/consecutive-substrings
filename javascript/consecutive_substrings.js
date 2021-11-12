function consecutiveSubstrings(string) {
  // type your code here
  const substrings = []

  for(let i = 0; i < string.length; i++){
    substrings.push(string.slice(i))
    for(let j = 1; j < string.length; j++){
      substrings.push(string.slice(i, i + j))
    }
  }

  return substrings.filter((value, index) => substrings.indexOf(value) === index)
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log(consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log(consecutiveSubstrings('a'));

  console.log("");

  console.log("Expecting: []");
  console.log(consecutiveSubstrings(''));

  console.log("")

  console.log("a lot")
  console.log(consecutiveSubstrings('The quick brown fox jumps over the lazy dog.'))

  console.log("")

  console.log("Expecting: ['a', 'ab', 'b']");
  console.log(consecutiveSubstrings('ab'));
}

module.exports = consecutiveSubstrings;

// Please add your pseudocode to this file
// And a written explanation of your solution

// I tinkered with it until it worked, but I'm not even sure how know how it works.
// I think the nested loops find every combo of index numbers to collect the substring from the input string
