var library = {
  tracks: { 123: { id: 123,
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            456: { id: 456,
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"}
          },

  playlists: { 789: { id: 789,
                      name: "Coding Music",
                      tracks: [123, 456]
                    }
             }
};


function printPlaylists(library){
  var pls = library.playlists;

  for(var p in pls){
    //console.log(pls[p]);
    printPlaylist(pls[p]);
  }
}

function printTracks(library){
  var trs = library.tracks; // bunches of tracks objects

  for(var k in trs){
    console.log(trs[k]);
    printTracksHelper(trs[k]);
  }
}

function printTracksHelper(tra){
    console.log(tra.id + ": { " +"id: " + tra.id + ", " + "name: " +tra.name + ", " + "album: " + tra.album + " }")
}

function printPlaylist(pl){
  console.log(pl.id + ": { " +"id: " + pl.id + ", " + "name: " + pl.name + ", " + "tracks: " + pl.tracks + " }");
}

//function printSearchResults(){}


function addTrackToPlaylist(tr_id, pl_id){
  library.playlists[pl_id].tracks.push(tr_id);
}


function addTrack(track){
  var sNum = track.id;
  library.tracks[sNum] = {};
  library.tracks[sNum]['id'] = track.id;
  library.tracks[sNum]['name'] = track.name;
  library.tracks[sNum]['artist'] = track.artist;
  library.tracks[sNum]['album'] = track.album;

  return library;
}



function addPlaylist(playlist){
  var pNum = playlist.id;
  library.playlists[pNum] = {};
  library.playlists[pNum].id = playlist.id;
  library.playlists[pNum].name = playlist.name;
  library.playlists[pNum].tracks = playlist.tracks;

  return library
}


//var d = printTracks(library);

t = {};
t.id = 678;
t.name = "fghj";
t.artist = "cvbnm";
t.album = "ertyu";
var r = addTrack(t);
//console.dir(library);

addTrackToPlaylist(t.id, 789);

printPlaylists(library);


//console.log(library);


// p = {};
// p.id = "234";
// p.name = "bee";
// p.tracks = t;
// var a = addPlaylist(p);
// console.log(library);