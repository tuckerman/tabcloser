chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'closeOtherTabs') {
    chrome.tabs.query({}, (tabs) => {
      tabs.forEach((tab) => {
        if (tab.id !== request.tabId) {
          chrome.tabs.remove(tab.id);
        }
      });
    });
  } else if (request.action === 'closeOtherWindows') {
    chrome.windows.getAll((windows) => {
      windows.forEach((window) => {
        if (window.id !== request.windowId) {
          chrome.windows.remove(window.id);
        }
      });
    });
  } else if (request.action === 'closeEverything') {
    chrome.windows.getAll((windows) => {
      windows.forEach((window) => {
        chrome.windows.remove(window.id);
      });
    });
  }
  sendResponse({ status: 'done' });
});
