//your JS code here. If required.
const browserInfo = document.getElementById('info');
const text = "You are using "+ navigator.userAgent;
browserInfo.innerText = text;
// const browserInfo = {
//   userAgent: navigator.userAgent,
//   appVersion: navigator.appVersion,
//   platform: navigator.platform,
// };

console.log(browserInfo);