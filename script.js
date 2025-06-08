function makeid(l) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  
  for (let i = 0; i<l; i++) {
      result += characters[Math.floor(Math.random()* characters.length)];
  }
  
  return result;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
