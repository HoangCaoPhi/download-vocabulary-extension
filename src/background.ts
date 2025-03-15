chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "download_audio") {
    const url = message.url;
    const filename = `Vocabulary_Audio/${new URL(url).pathname.split("/").pop()}`;

    chrome.downloads.download({
      url,
      filename,  
      conflictAction: "uniquify",  
      saveAs: false  
    });
  }
});
