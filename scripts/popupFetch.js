document.addEventListener("DOMContentLoaded", () => {
    chrome.runtime.sendMessage({ type: "GET_TRACKED_DATA" }, (response) => {
        if (response && response.data) {
            document.getElementById("data-display").innerText = response.data;
        } else {
            document.getElementById("data-display").innerText = "No data available.";
        }
    });
});