// Initialize variables
let count = 0;
let startTime = Date.now();
let currentTime = count - startTime;
let tabs = [];

const alarmsSetup = () => {
  chrome.alarms.create("timerTick", { periodInMinutes: 1 / 60 }); // Every second
  chrome.alarms.create("keepAlive", { periodInMinutes: 1 / 2 });
  // Handles total time
  chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "timerTick") {
      // Update the count based on elapsed time
      count = Math.floor((Date.now() - startTime) / 1000);
    }
  });
};

// Handle requests for the current count
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "GET_TRACKED_DATA") {
    // Calculate the most current count
    const currentCount = Math.floor((Date.now() - startTime) / 1000);
    sendResponse({ data: currentCount });
  }
  return true; // Important: indicates you'll use sendResponse asynchronously
});

alarmsSetup();
