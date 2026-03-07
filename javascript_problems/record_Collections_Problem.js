const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value) {
  if (value === "") {
    // 1️ If value is empty, delete the property
    delete records[id][prop];
  } else if (prop !== "tracks") {
    // 2️ If prop isn't tracks, assign the value
    records[id][prop] = value;
  } else {
    // 3️ If prop is tracks
    // Create tracks array if it doesn't exist
    if (!records[id].hasOwnProperty("tracks")) {
      records[id].tracks = [];
    }
    // Add value to the tracks array
    records[id].tracks.push(value);
  }

  // Always return the entire records object
  return records;
}