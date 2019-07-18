String.prototype.blank = function() {
  if (this === "" || this.match(/^\s$/g)){
    return true;
  }
  else {
    return false;
  }
}
