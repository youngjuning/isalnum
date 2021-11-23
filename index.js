function isalnum(char) {
  return (char >= '0' && char <= '9') || (char >= 'a' && char <= 'z');
}

module.export = isalnum;
