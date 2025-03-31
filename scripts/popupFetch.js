fetchBrowserData = () => {
  chrome.runtime.sendMessage({ action: "GET_BROWSER_DATA" }, (response) => {
    if (response && response.data !== undefined) {
      document.getElementById("data-display").innerText = response.data;
    } else {
      document.getElementById("data-display").innerText = "No data available.";
    }
  });
};

fetchTabsData = () => {
    chrome.runtime.sendMessage({ action: "GET_TABS_DATA" }, (response) => {
      if (response && response.data !== undefined) {
        document.getElementById("tabs-display").innerText = response.data.length;
      } else {
        document.getElementById("tabs-display").innerText = "No data available.";
      }
    });
  };

// Update every second
fetchBrowserData();
fetchTabsData();
setInterval(fetchBrowserData, fetchTabsData, 1000);
