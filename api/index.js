const express = require("express");
const cors = require("cors");

const app = express();

const allArtists = [
  {
    id: 130,
    name: "Real McCoy",
    link: "https://www.deezer.com/artist/130",
    share:
      "https://www.deezer.com/artist/130?utm_source=deezer&utm_content=artist-130&utm_term=0_1730996939&utm_medium=web",
    picture: "https://api.deezer.com/artist/130/image",
    picture_small:
      "https://e-cdns-images.dzcdn.net/images/artist/a6889ba4088cc114211c7214d727d090/56x56-000000-80-0-0.jpg",
    picture_medium:
      "https://e-cdns-images.dzcdn.net/images/artist/a6889ba4088cc114211c7214d727d090/250x250-000000-80-0-0.jpg",
    picture_big:
      "https://e-cdns-images.dzcdn.net/images/artist/a6889ba4088cc114211c7214d727d090/500x500-000000-80-0-0.jpg",
    picture_xl:
      "https://e-cdns-images.dzcdn.net/images/artist/a6889ba4088cc114211c7214d727d090/1000x1000-000000-80-0-0.jpg",
    nb_album: 14,
    nb_fan: 26153,
    radio: true,
    tracklist: "https://api.deezer.com/artist/130/top?limit=50",
    type: "artist",
  },
];

app.use(express.json());

app.use(cors());

app.get("/artists", function (req, res) {
  res.status(200).json(allArtists);
});

module.exports = app;
