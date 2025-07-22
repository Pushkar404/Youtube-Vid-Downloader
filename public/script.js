document.getElementById("download-btn").addEventListener("click", async () => {
  const url = document.getElementById("youtube-url").value;
  const status = document.getElementById("status");

  if (!url) {
    status.textContent = "Please enter a YouTube URL";
    return;
  }

  status.textContent = "Processing...";

  try {
    const response = await fetch("/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url }),
    });

    if (response.ok) {
      status.textContent = "Download starting...";
      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "video.mp4";
      link.click();
      status.textContent = "Download complete!";
    } else {
      const { error } = await response.json();
      status.textContent = `Error: ${error || "Failed to download"}`;
    }
  } catch (err) {
    status.textContent = "Error: Could not connect to server";
  }
});
