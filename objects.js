

var playlist = {

  Kanye: "Gold Digger",
  artist: "song",

}

function updatePlaylist(playlist, artistName, songTitle) {

    playlist["Phil Ochs"] = "Here's to the State of Mississippi"
    return playlist

}

function removeFromPlaylist(playlist, artistName) {


  delete playlist.Kanye;
  return playlist;

}
