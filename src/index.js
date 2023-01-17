module.exports = function check(str, bracketsConfig) {
  // your solution (oldest)
  const event = bracketsConfig.map((i) => i.join(""));
  for (let i = 0; i < event.length; i++) {
    if (str.includes(event[i])) {
      str = str.replaceAll(event[i], "");
      i = -1;
    }
  }
  return str.length === 0 ? true : false;
};
