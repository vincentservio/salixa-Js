const clickLinks = () => {
  const gallery = document.getElementById("galleryTab");
  gallery.addEventListener("click", galleryClick);

  const home = document.getElementById("homeTab");
  home.addEventListener("click", loadInfo);

  const comments = document.getElementById("commentTab");
  comments.addEventListener("click", loadComment);

  const reservations = document.getElementById("reserveTab");
  reservations.addEventListener("click", loadReservations);
};
