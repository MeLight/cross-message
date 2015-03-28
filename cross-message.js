function CrossMessage() {
  this.platform = null;
  if(typeof chrome !== 'undefined') {
    this.platform = 'chrome';
  }

  else {
    this.platform = 'firefox';
  }
}

CrossMessage.prototype.sendMessage = function(message, callback) {
  switch(this.platform) {
    case 'chrome':
      break;

    case 'firefox':
      break;

    default:
      console.error("CrossMessage platform not defined");
  }
}

CrossMessage.prototype.messageListener = function(message, sender, callback) {

}
