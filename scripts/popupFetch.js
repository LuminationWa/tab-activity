fetchData = () => {
  chrome.runtime.sendMessage({ action: "GET_TRACKED_DATA" }, (response) => {
    if (response && response.data !== undefined) {
      document.getElementById("data-display").innerText = response.data;
    } else {
      document.getElementById("data-display").innerText = "No data available.";
    }
  });
};

// Update every second
fetchData();
setInterval(fetchData, 1000);
