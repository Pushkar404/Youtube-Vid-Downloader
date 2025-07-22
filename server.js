const express = require("express");
const ytdl = require("ytdl-core");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static("public"));

app.post("/download", async (req, res) => {
  const { url } = req.body;
  if (!ytdl.validateURL(url)) {
    return res.status(400).json({ error: "Invalid YouTube URL" });
  }

  try {
    const info = await ytdl.getInfo(url);
    const title =
      info.videoDetails.title.replace(/[^a-zA-Z0-9]/g, "_") + ".mp4";
    res.header("Content-Disposition", `attachment; filename="${title}"`);
    ytdl(url, { filter: "videoandaudio" }).pipe(res);
  } catch (err) {
    res.status(500).json({ error: "Failed to download video" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
