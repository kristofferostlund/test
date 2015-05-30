function smsClick(event) {
  if (isAndroid()) {
    window.open('sms:' + phoneNumber + '?body=' + message);
  } else if (isOldIPhone()) {
    window.open('sms:' + phoneNumber + ';body=' + message);
  } else if (isNewIPhone()) {
    window.open('sms:' + phoneNumber + '&body=' + message);
  } else {
    copyClick(event);
  }
}

function copyClick(event) {
  prompt('Copy the collowing text:', message);
}

var uaString = navigator.userAgent
  , phoneNumber = '+46730123444117'
  , message = 'Hello, World!';
  
function isWinPhone() {
  return /trident|edge/i.test(uaString);
}

function isAndroid() {
  return /android/i.test(uaString) && !isWinPhone();
}

function isOldIPhone() {
  return /iphone; cpu iphone os [0-7]/i.test(uaString);
}

function isNewIPhone() {
  return /iphone; cpu iphone os [8-9]/i.test(uaString);
}