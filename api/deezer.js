export default async function handler(req, res) {
  try {
    const { q } = req.query;

    if (!q) {
      return res.status(400).json({
        error: "Missing query",
      });
    }

    const response = await fetch(
      `https://api.deezer.com/search/album?q=${encodeURIComponent(q)}`,
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
