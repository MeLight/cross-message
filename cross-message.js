function CrossMessage() {
  this.platform = null;
  if(typeof chrome !== 'undefined') {
    this.platform = 'chrome';
  }

  else {
    this.platform = 'firefox';
  }
}

CrossMessage.prototype.sendMessage = function(message, callback, tabId) {
  switch(this.platform) {
    case 'chrome':
      if(typeof tabId === 'undefined') {  //this means we're sending the message from a content script
        chrome.runtime.sendMessage(message, callback);
      }
      else {
        chrome.tabs.sendMessage(tabId, message, callback);
      }

      break;

    case 'firefox':
      break;

    default:
      console.error("CrossMessage platform not defined");
  }
}

CrossMessage.prototype.messageListener = function(handlerFunction) {
  switch(this.platform) {
    case 'chrome':
      chrome.runtime.onMessage.addListener(handlerFunction);
      break;

    case 'firefox':
      break;

    default:
      console.error("CrossMessage platform not defined");
    }
}
