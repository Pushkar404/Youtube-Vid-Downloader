const express = require('express');
const ytdl = require('ytdl-core');
const app = express();
const port = 3000;

app.use(express.static('public')); // Serve static files from 'public' directory
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/download', async (req, res) => {
  const { url } = req.body;
  if (!ytdl.validateURL(url)) {
    return res.status(400).json({ error: 'Invalid YouTube URL' });
  }
  try {
    const info = await ytdl.getInfo(url);
    const title = info.videoDetails.title;
    res.header('Content-Disposition', `attachment; filename="${title}.mp4"`);
    ytdl(url, { filter: 'videoandaudio' }).pipe(res);
  } catch (err) {
    res.status(500).json({ error: 'Failed to download video' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
