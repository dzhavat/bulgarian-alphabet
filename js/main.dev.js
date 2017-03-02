((window, document) => {
  const ALPHABET_TRACK = 'audio/alphabet.mp3?v=1486765899166';

  const createAudioPlayer = (source) => {
    const audio = new Audio();
    audio.src = source;
    audio.controls = false;
    audio.autoplay = false;
    return audio;
  }

  const playTrackAtTime = player => duration => start => {
    player.currentTime = start;
    playTrack(player);
    setTimeout( () => stopTrack(player), duration);
  }

  const playTrack = player => player.play();

  const pauseTrack = player => player.pause();

  const stopTrack = player => {
    pauseTrack(player);
    resetPlayer(player);
  }

  const resetPlayer = player => player.currentTime = 0;

  // Creates a player
  const audioPlayer = createAudioPlayer(ALPHABET_TRACK);

  // Creates a function which plays only a single letter from a track
  const playSingleLatter = playTrackAtTime(audioPlayer)(1000);

  // Attaches a click event to every <li /> element and plays certain letter based on position
  [ ...document.querySelectorAll('.js-letter') ].forEach( (letterElement, letterPosition) => {
    letterElement.addEventListener('click', () => playSingleLatter(letterPosition))
  });

  document.querySelector('.js-button-play').addEventListener('click', () => playTrack(audioPlayer));
  document.querySelector('.js-button-pause').addEventListener('click', () => pauseTrack(audioPlayer));
  document.querySelector('.js-button-stop').addEventListener('click', () => stopTrack(audioPlayer));
})(window, document);
