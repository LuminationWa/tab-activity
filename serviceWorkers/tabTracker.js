const tabs = [];

chrome.alarms.create("keepAlive", { periodInMinutes: 1 / 2 });

chrome.tabs.onCreated.addListener((tab) => {
  tab.creation = Date.now(); // Record the time tab was created
  tabs.push(tab);
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "GET_TABS_DATA") {
    console.log(tabs)
    sendResponse({
      data: tabs.map((tab) => ({
        ...tab,
        timeSpent: (Date.now() - tab.creation) / 1000,
      })),
    });
  }
  return true;
});
