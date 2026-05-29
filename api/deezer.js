export default async function handler(req, res) {
  try {
    const { q } = req.query;

    if (!q) {
      return res.status(400).json({
        error: "Missing query",
      });
    }

    const response = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=album.search&album=${encodeURIComponent(q)}&limit=30&api_key=51fe457d86075bc17470845141b0015b&format=json`,
    );

    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      error: "Server error",
      details: error.message,
    });
  }
}
