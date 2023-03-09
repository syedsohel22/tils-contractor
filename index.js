function slideShow() {
  const arr = [
    "https://content.iconworldoftile.com/content/tiles/glazed-porcelain-tiles-marble-look-tiles-floors-and-walls-milas-black-grande.jpg",
    "https://images.unsplash.com/photo-1599031628962-1f6755a3b1b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvb3IlMjB0aWxlc3xlbnwwfHwwfHw%3D&w=1000&q=80",
    "https://cpimg.tistatic.com/06800155/b/4/Flooring-Tiles.jpg",
  ];

  let i = 0;
  let div = document.getElementById("slider");
  let img = document.createElement("img");
  img.src = arr[0];

  div.append(img);
  i = i + 1;

  setInterval(function () {
    if (i == 3) {
      i = 0;
    }

    img.src = arr[i];
    i = i + 1;
    div.append(img);
  }, 2000);
}

slideShow();
