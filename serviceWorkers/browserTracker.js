// Initialize variables
let startTime = Date.now();
let currentTime;
let tabs = [];

chrome.alarms.create("keepAlive", { periodInMinutes: 1 / 2 });

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "GET_BROWSER_DATA") {
    // Calculate the most current count
    const currentCount = Math.floor((Date.now() - startTime) / 1000);
    sendResponse({ data: currentCount });
  }
  return true;
});