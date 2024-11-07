const express = require("express");
const cors = require("cors");

const app = express();

const allArtists = [
  {
    id: 1,
    name: "The Beatles",
    link: "https://www.deezer.com/artist/1",
    share:
      "https://www.deezer.com/artist/1?utm_source=deezer&utm_content=artist-1&utm_term=0_1730998126&utm_medium=web",
    picture: "https://api.deezer.com/artist/1/image",
    picture_small:
      "https://e-cdns-images.dzcdn.net/images/artist/fe9eb4463ea87452e84ed97e0c86b878/56x56-000000-80-0-0.jpg",
    picture_medium:
      "https://e-cdns-images.dzcdn.net/images/artist/fe9eb4463ea87452e84ed97e0c86b878/250x250-000000-80-0-0.jpg",
    picture_big:
      "https://e-cdns-images.dzcdn.net/images/artist/fe9eb4463ea87452e84ed97e0c86b878/500x500-000000-80-0-0.jpg",
    picture_xl:
      "https://e-cdns-images.dzcdn.net/images/artist/fe9eb4463ea87452e84ed97e0c86b878/1000x1000-000000-80-0-0.jpg",
    nb_album: 37,
    nb_fan: 7484219,
    radio: true,
    tracklist: "https://api.deezer.com/artist/1/top?limit=50",
    type: "artist",
  },
  {
    id: 2,
    name: "The Clash",
    link: "https://www.deezer.com/artist/2",
    share:
      "https://www.deezer.com/artist/2?utm_source=deezer&utm_content=artist-2&utm_term=0_1730998147&utm_medium=web",
    picture: "https://api.deezer.com/artist/2/image",
    picture_small:
      "https://e-cdns-images.dzcdn.net/images/artist/82a5fe6ba783cf618d5394ae0b8129b9/56x56-000000-80-0-0.jpg",
    picture_medium:
      "https://e-cdns-images.dzcdn.net/images/artist/82a5fe6ba783cf618d5394ae0b8129b9/250x250-000000-80-0-0.jpg",
    picture_big:
      "https://e-cdns-images.dzcdn.net/images/artist/82a5fe6ba783cf618d5394ae0b8129b9/500x500-000000-80-0-0.jpg",
    picture_xl:
      "https://e-cdns-images.dzcdn.net/images/artist/82a5fe6ba783cf618d5394ae0b8129b9/1000x1000-000000-80-0-0.jpg",
    nb_album: 15,
    nb_fan: 1505269,
    radio: true,
    tracklist: "https://api.deezer.com/artist/2/top?limit=50",
    type: "artist",
  },
  {
    id: 3,
    name: "Snoop Dogg",
    link: "https://www.deezer.com/artist/3",
    share:
      "https://www.deezer.com/artist/3?utm_source=deezer&utm_content=artist-3&utm_term=0_1730998154&utm_medium=web",
    picture: "https://api.deezer.com/artist/3/image",
    picture_small:
      "https://e-cdns-images.dzcdn.net/images/artist/4ad894ebbf2dcc0eaefd2510d123e128/56x56-000000-80-0-0.jpg",
    picture_medium:
      "https://e-cdns-images.dzcdn.net/images/artist/4ad894ebbf2dcc0eaefd2510d123e128/250x250-000000-80-0-0.jpg",
    picture_big:
      "https://e-cdns-images.dzcdn.net/images/artist/4ad894ebbf2dcc0eaefd2510d123e128/500x500-000000-80-0-0.jpg",
    picture_xl:
      "https://e-cdns-images.dzcdn.net/images/artist/4ad894ebbf2dcc0eaefd2510d123e128/1000x1000-000000-80-0-0.jpg",
    nb_album: 176,
    nb_fan: 7479794,
    radio: true,
    tracklist: "https://api.deezer.com/artist/3/top?limit=50",
    type: "artist",
  },
];

app.use(express.json());

app.use(cors());

app.get("/artists", function (req, res) {
  res.status(200).json(allArtists);
});

module.exports = app;
