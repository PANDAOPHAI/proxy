const express = require("express");
const axios = require("axios");

const app = express();

app.get("/", async (req, res) => {
  try {

    const target =
      "https://sportseera2.pages.dev/Drm/P3?id=kayo";

    const response = await axios.get(target, {
      headers: {
        "User-Agent":
          "Mozilla/5.0"
      }
    });

    let html = response.data;

    // Fix relative paths
    html = html.replace(
      /src="\//g,
      'src="https://sportseera2.pages.dev/'
    );

    html = html.replace(
      /href="\//g,
      'href="https://sportseera2.pages.dev/'
    );

    res.setHeader(
      "Access-Control-Allow-Origin",
      "*"
    );

    res.send(html);

  } catch (err) {
    res.send("Proxy Error");
    console.log(err);
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server Running");
});
