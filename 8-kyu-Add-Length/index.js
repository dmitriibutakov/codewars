function addLength(str) {
  return str.split(' ').reduce((acc, elm) => {
    return [...acc, elm + ' ' + elm.length];
  }, []); 
}

console.log(addLength('mops ass wwwwww'))