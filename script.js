//your JS code here. If required.
const browserInfo = document.getElementById('browser-info');
const text = "You are using "+ navigator.userAgent+ " version "+navigator.appVersion;
browserInfo.innerText = text;