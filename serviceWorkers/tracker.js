let count = 0;

setInterval(() => {
  count++;
}, 1000);


chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    //Sends data to popupFetch which then displays as HTML
  sendResponse({ data: count });
});

chrome.runtime.onInstalled.addListener(() => {
    //Keeps the service worker active
    chrome.alarms.create("keepActive", { periodInMinutes: 0.5 });
});