var isOneBitCharacter = function (bits) {
  let arr = [];
  for (let i = 0; i <= bits.length - 1; i++) {
    console.log (bits[0]);
    if (bits[i] === 0) {
      // console.log (bits[i]);
      arr.push (true);
    } else {
      if (bits[i + 1] === 1 || bits[i + 1] === 0) {
        i = i + 1;
        arr.push (false);
      }
    }
  }
  return arr[arr.length - 1];
};

var isOneBitCharacter = function (bits) {
  let r;
  for (let i = 0; i < bits.length; i++) {
    r = bits[i] === 0;
    if (!r) {
      i = i + 1;
    }
  }
  return r;
};

isOneBitCharacter ([1, 1, 1, 0]);
