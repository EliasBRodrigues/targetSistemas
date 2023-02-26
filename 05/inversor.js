function reverseString(string) {
  return (string === '') ? '' : reverseString(string.substring(1)) + string.charAt(0);
}
console.log(reverseString("teste"));

