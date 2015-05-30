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

var isPhoneElement = document.getElementById('isPhone')
  , uaStringElement = document.getElementById('uaString');

if (isAndroid()) {
  isPhoneElement.innerText = "This is an Android device.";
} else if (isOldIPhone()) {
  isPhoneElement.innerText = "This is an older iPhone (up to iOS 7).";
} else if (isNewIPhone()) {
  isPhoneElement.innerText = "This is an older iPhone (iOS 8 and above).";
} else if (isWinPhone()) {
  isPhoneElement.innerText = "This is a Windows Phone device.";
} else {
  isPhoneElement.innerText = "Hopefully you're not on a phone, otherwise I've made a mistake.";
}

uaStringElement.innerText = uaString;