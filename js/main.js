// I guess is nice to have one track which contains all letters
// this is english version
const ALPHABET_TRACK = 'http://www.learning-english-online.net/wp-content/uploads/sites/20/2015/04/alphabet-complete.mp3';

const createAudioPlayer = (source) => {
  const audio = new Audio();
  audio.src = source;
  audio.controls = false;
  audio.autoplay = false;
  return audio;
}

const playTrackAtTime = player => duration => start => {
  player.currentTime = start;
  player.play();
  setTimeout( () => player.pause(), duration)
}

//create a player
const audioPlayer = createAudioPlayer(ALPHABET_TRACK);

//create a function which plays only a single letter from a track
const playSingleLatter = playTrackAtTime(audioPlayer)(1000);

// attach click event to every <li /> element and plays certain letter based on position
[ ...document.querySelectorAll('li') ].forEach( (letterElement, letterPosition) => {
  letterElement.addEventListener('click', () => playSingleLatter(letterPosition) )
});
