const clickLinks = () => {
  const gallery = document.getElementById("galleryTab");
  gallery.addEventListener("click", galleryClick);

  const home = document.getElementById("homeTab");
  home.addEventListener("click", loadInfo);
};
