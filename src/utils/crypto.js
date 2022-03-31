export const createHash = str => {
  var hash1 = (5381 << 16) + 5381;
  var hash2 = hash1;
  var hashPos = 0;
  while (hashPos < str.length) {
    hash1 = ((hash1 << 5) + hash1 + (hash1 >> 27)) ^ str.charCodeAt(hashPos);
    if (hashPos == str.length - 1) {
      break;
    }
    hash2 = ((hash2 << 5) + hash2 + (hash2 >> 27)) ^ str.charCodeAt(hashPos + 1);
    hashPos += 2;
  }

  return hash1 + hash2 * 1566083941;
};
