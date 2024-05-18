// Create context menu items
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "closeOtherTabs",
    title: "Close Other Tabs",
    contexts: ["action"]
  });

  chrome.contextMenus.create({
    id: "closeOtherWindows",
    title: "Close Other Windows",
    contexts: ["action"]
  });

  chrome.contextMenus.create({
    id: "closeEverything",
    title: "Close Everything",
    contexts: ["action"]
  });
});

// Handle context menu item clicks
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "closeOtherTabs") {
    chrome.tabs.query({}, (ts) => {
      ts.forEach((t) => {
        if (t.id !== tab.id) {
          chrome.tabs.remove(t.id);
        }
      });
    });
  } else if (info.menuItemId === "closeOtherWindows") {
    chrome.windows.getAll((ws) => {
      ws.forEach((w) => {
        if (w.id !== tab.windowId) {
          chrome.windows.remove(w.id);
        }
      });
    });
  } else if (info.menuItemId === "closeEverything") {
    chrome.windows.getAll((ws) => {
      ws.forEach((w) => {
        chrome.windows.remove(w.id);
      });
    });
  }
});

// Default action on left-click
chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.query({}, (ts) => {
    ts.forEach((t) => {
      if (t.id !== tab.id) {
        chrome.tabs.remove(t.id);
      }
    });
  });
});
