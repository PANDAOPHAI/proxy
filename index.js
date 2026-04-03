import express from "express";
import fetch from "node-fetch";

const app = express();

app.get("/", async (req, res) => {
  const url = req.query.url;

  if (!url) return res.send("No URL provided");

  try {
    const response = await fetch(url, {
      headers: {
        "Referer": "https://animedekho.app/",
        "User-Agent": "Mozilla/5.0"
      }
    });

    const text = await response.text();

    res.set("Access-Control-Allow-Origin", "*");
    res.send(text);

  } catch (err) {
    res.send("Error fetching");
  }
});

app.listen(10000, () => console.log("Server running"));
