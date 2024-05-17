document.getElementById('closeTabsButton').addEventListener('click', () => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.runtime.sendMessage({ action: 'closeOtherTabs', tabId: tabs[0].id }, (response) => {
      window.close();
    });
  });
});

document.getElementById('closeWindowsButton').addEventListener('click', () => {
  chrome.windows.getCurrent((currentWindow) => {
    chrome.runtime.sendMessage({ action: 'closeOtherWindows', windowId: currentWindow.id }, (response) => {
      window.close();
    });
  });
});

document.getElementById('closeEverythingButton').addEventListener('click', () => {
  chrome.runtime.sendMessage({ action: 'closeEverything' }, (response) => {
    window.close();
  });
});
