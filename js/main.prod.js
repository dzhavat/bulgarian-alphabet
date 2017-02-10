'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// I guess is nice to have one track which contains all letters
// this is english version
var ALPHABET_TRACK = 'audio/alphabet.mp3?v=1486765899166';

var createAudioPlayer = function createAudioPlayer(source) {
  var audio = new Audio();
  audio.src = source;
  audio.controls = false;
  audio.autoplay = false;
  return audio;
};

var playTrackAtTime = function playTrackAtTime(player) {
  return function (duration) {
    return function (start) {
      player.currentTime = start;
      player.play();
      setTimeout(function () {
        return player.pause();
      }, duration);
    };
  };
};

//create a player
var audioPlayer = createAudioPlayer(ALPHABET_TRACK);

//create a function which plays only a single letter from a track
var playSingleLatter = playTrackAtTime(audioPlayer)(1000);

// attach click event to every <li /> element and plays certain letter based on position
[].concat(_toConsumableArray(document.querySelectorAll('li'))).forEach(function (letterElement, letterPosition) {
  letterElement.addEventListener('click', function () {
    return playSingleLatter(letterPosition);
  });
});
