module.exports = function reverse (n) {
  let sortToStr = n.toString().split('').reverse().join('');
  return n = parseInt(sortToStr, 10);
}
