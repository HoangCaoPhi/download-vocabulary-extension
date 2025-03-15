document.querySelectorAll(".sound.audio_play_button").forEach((element) => {
  const audioDiv = element as HTMLElement;
  const mp3Url = audioDiv.getAttribute("data-src-mp3");

  if (mp3Url) { 
    const downloadBtn = document.createElement("button");
    downloadBtn.textContent = "Download";
    downloadBtn.style.marginRight = "10px";
    downloadBtn.style.cursor = "pointer";
    downloadBtn.style.padding = "5px 10px";
    downloadBtn.style.border = "1px solid #000";
    downloadBtn.style.backgroundColor = "#007bff";
    downloadBtn.style.color = "#fff";
    downloadBtn.style.borderRadius = "5px";

    downloadBtn.addEventListener("click", () => {
      chrome.runtime.sendMessage({ action: "download_audio", url: mp3Url });
    });

    audioDiv.parentElement?.insertBefore(downloadBtn, audioDiv);
  }
});