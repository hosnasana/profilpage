document.addEventListener("DOMContentLoaded", function () {
  // Retrieve deleted songs from localStorage or initialize an empty array
  let deletedSongs = JSON.parse(localStorage.getItem("deletedSongs")) || [];

  // Function to update the UI to hide deleted songs based on localStorage
  function updateDeletedSongsUI() {
    const songElements = document.querySelectorAll(".song");
    songElements.forEach((songElement) => {
      const artist = songElement.querySelector("h3").innerText;
      const title = songElement.querySelector("p").innerText;

      // Check if this song has been deleted
      const isDeleted = deletedSongs.some(
        (song) => song.artist === artist && song.title === title
      );

      // If the song is deleted, remove it from the DOM
      if (isDeleted) {
        songElement.remove();
      }
    });
  }

  // Add a click event listener to each trash icon
  const trashIcons = document.querySelectorAll(".fa-trash");
  trashIcons.forEach((icon) => {
    icon.addEventListener("click", function () {
      const songDiv = this.closest(".song");
      const artist = songDiv.querySelector("h3").innerText;
      const title = songDiv.querySelector("p").innerText;

      // Add the deleted song to the deletedSongs array
      deletedSongs.push({ artist, title });
      localStorage.setItem("deletedSongs", JSON.stringify(deletedSongs));

      // Remove the song element from the DOM
      songDiv.remove();
    });
  });

  // On page load, update the UI to hide deleted songs
  updateDeletedSongsUI();
});

//favoerite icon
document.addEventListener("DOMContentLoaded", function () {
  // Retrieve favorited songs from localStorage or initialize an empty array
  let favoriteSongs = JSON.parse(localStorage.getItem("favoriteSongs")) || [];

  // Function to update the UI for favorited songs
  function updateFavoriteIcons() {
    const songElements = document.querySelectorAll(".song");
    songElements.forEach((songElement) => {
      const artist = songElement.querySelector("h3").innerText;
      const title = songElement.querySelector("p").innerText;

      // Check if this song is favorited
      const isFavorited = favoriteSongs.some(
        (song) => song.artist === artist && song.title === title
      );

      // If the song is favorited, change the heart color to red
      if (isFavorited) {
        songElement.querySelector(".fa-heart").classList.add("favorited");
      }
    });
  }

  // Add click event listener to each heart icon
  const heartIcons = document.querySelectorAll(".fa-heart");
  heartIcons.forEach((icon) => {
    icon.addEventListener("click", function () {
      const songDiv = this.closest(".song");
      const artist = songDiv.querySelector("h3").innerText;
      const title = songDiv.querySelector("p").innerText;

      // Check if the song is already favorited
      const isFavorited = favoriteSongs.some(
        (song) => song.artist === artist && song.title === title
      );

      if (!isFavorited) {
        // Add the song to the favoriteSongs array
        favoriteSongs.push({ artist, title });
        localStorage.setItem("favoriteSongs", JSON.stringify(favoriteSongs));

        // Change the heart icon color to red
        this.classList.add("favorited");
      } else {
        // Remove the song from the favoriteSongs array
        favoriteSongs = favoriteSongs.filter(
          (song) => !(song.artist === artist && song.title === title)
        );
        localStorage.setItem("favoriteSongs", JSON.stringify(favoriteSongs));

        // Remove the red color from the heart icon
        this.classList.remove("favorited");
      }
    });
  });

  // On page load, update the UI for favorited songs
  updateFavoriteIcons();
});
